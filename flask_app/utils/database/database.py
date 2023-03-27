import mysql.connector
import glob
import json
import csv
from io import StringIO
import itertools
import datetime
class database:

    def __init__(self, purge = False):

        # Grab information from the configuration file
        self.database       = 'db'
        self.host           = '127.0.0.1'
        self.user           = 'master'
        self.port           = 3306
        self.password       = 'master'

    def query(self, query = "SELECT CURDATE()", parameters = None):

        cnx = mysql.connector.connect(host     = self.host,
                                      user     = self.user,
                                      password = self.password,
                                      port     = self.port,
                                      database = self.database,
                                      charset  = 'latin1'
                                     )


        if parameters is not None:
            cur = cnx.cursor(dictionary=True)
            cur.execute(query, parameters)
        else:
            cur = cnx.cursor(dictionary=True)
            cur.execute(query)

        # Fetch one result
        row = cur.fetchall()
        cnx.commit()

        if "INSERT" in query:
            cur.execute("SELECT LAST_INSERT_ID()")
            row = cur.fetchall()
            cnx.commit()
        cur.close()
        cnx.close()
        return row

    def about(self, nested=False):    
        query = """select concat(col.table_schema, '.', col.table_name) as 'table',
                          col.column_name                               as column_name,
                          col.column_key                                as is_key,
                          col.column_comment                            as column_comment,
                          kcu.referenced_column_name                    as fk_column_name,
                          kcu.referenced_table_name                     as fk_table_name
                    from information_schema.columns col
                    join information_schema.tables tab on col.table_schema = tab.table_schema and col.table_name = tab.table_name
                    left join information_schema.key_column_usage kcu on col.table_schema = kcu.table_schema
                                                                     and col.table_name = kcu.table_name
                                                                     and col.column_name = kcu.column_name
                                                                     and kcu.referenced_table_schema is not null
                    where col.table_schema not in('information_schema','sys', 'mysql', 'performance_schema')
                                              and tab.table_type = 'BASE TABLE'
                    order by col.table_schema, col.table_name, col.ordinal_position;"""
        results = self.query(query)
        if nested == False:
            return results

        table_info = {}
        for row in results:
            table_info[row['table']] = {} if table_info.get(row['table']) is None else table_info[row['table']]
            table_info[row['table']][row['column_name']] = {} if table_info.get(row['table']).get(row['column_name']) is None else table_info[row['table']][row['column_name']]
            table_info[row['table']][row['column_name']]['column_comment']     = row['column_comment']
            table_info[row['table']][row['column_name']]['fk_column_name']     = row['fk_column_name']
            table_info[row['table']][row['column_name']]['fk_table_name']      = row['fk_table_name']
            table_info[row['table']][row['column_name']]['is_key']             = row['is_key']
            table_info[row['table']][row['column_name']]['table']              = row['table']
        return table_info



    def createTables(self, purge=False, data_path = 'flask_app/database/'):
        
        # Open the SQL files
        with open(data_path + 'create_tables/institutions.sql') as file:
            institutions = file.read()
        with open(data_path + 'create_tables/positions.sql') as file:
            positions = file.read()
        with open(data_path + 'create_tables/experiences.sql') as file:
            experiences = file.read()
        with open(data_path + 'create_tables/skills.sql') as file:
            skills = file.read()
        
        #Query the SQL files
        institutions_table = self.query(institutions)
        positions_table = self.query(positions)
        experiences_table = self.query(experiences)
        skills_table = self.query(skills)

        #Open the CSV files 
        institutions_csv = csv.reader( open(data_path + 'initial_data/institutions.csv', 'r') )
        positions_csv = csv.reader( open(data_path + 'initial_data/positions.csv', 'r') )
        experiences_csv = csv.reader( open(data_path + 'initial_data/experiences.csv', 'r') )
        skills_csv = csv.reader( open(data_path + 'initial_data/skills.csv', 'r') )

        #Separate CSV files into Columns Headers and Line Data
        inst_columns = next(institutions_csv)
        inst_data = list(institutions_csv)

        posi_columns = next(positions_csv)
        posi_data = list(positions_csv)

        exp_columns = next(experiences_csv)
        exp_data = list(experiences_csv)

        skill_columns = next(skills_csv)
        skill_data = list(skills_csv)

        #INSERT CSV data into SQL Table by calling inserRows function
        self.insertRows("institutions", inst_columns, inst_data)
        self.insertRows("positions", posi_columns, posi_data)
        self.insertRows("experiences", exp_columns, exp_data)
        self.insertRows("skills", skill_columns, skill_data)

        print('I create and populate database tables.')



    def insertRows(self, table='table', columns=['x','y'], parameters=[['v11','v12'],['v21','v22']]):

        #Creates the column part of the query from the column list
        columnString = "(" + ", ".join(columns[1:]) + ")"

        #Create the parameter part of the query from the parameter list of list
        paraString = "("
        for para in parameters:

            for var in para[1:]:
                if(var != 'NULL'):
                    paraString += "'" + var + "', "
                elif(table == 'positions' or table == 'experiences'):
                    paraString += "Null, "
                else:
                    paraString += "'None', "

            paraString = paraString[:-2] + ");"
            #brings the pieces of the query together
            finalQuery = "INSERT INTO " + table + columnString + " VALUES" + paraString
            #insert the query into the database
            self.query(finalQuery)
            paraString = "("

        print('I insert things into the database.')



    def getResumeData(self):
        # Pulls data from the database to genereate data like this:

        finalDict = dict()

        institutions_return = self.query("SELECT * FROM institutions")
        positions_return = self.query("SELECT * FROM positions")
        experiences_return = self.query("SELECT * FROM experiences")
        skills_return = self.query("SELECT * FROM skills")

        for inst in institutions_return:
            finalDict[inst.get('experience_id')] = dict()

            finalDict[inst.get('experience_id')]['address'] = inst.get('address')
            finalDict[inst.get('experience_id')]['city'] = inst.get('city')
            finalDict[inst.get('experience_id')]['state'] = inst.get('state')
            finalDict[inst.get('experience_id')]['type'] = inst.get('type')
            finalDict[inst.get('experience_id')]['zip'] = inst.get('zip')
            finalDict[inst.get('experience_id')]['department'] = inst.get('department')
            finalDict[inst.get('experience_id')]['name'] = inst.get('name')
            finalDict[inst.get('experience_id')]['positions'] = dict()


        print(institutions_return)

        #return finalDict



        return {1: {'address' : 'NULL',
                        'city': 'East Lansing',      
                       'state': 'Michigan',
                        'type': 'Academia',
                         'zip': '48823',
                  'department': 'Computer Science',
                        'name': 'Michigan State University',
                   'positions': {1: {'end_date'        : None,
                                     'responsibilities': 'Hold helprooms; answer questions online; grade assignments',
                                     'start_date'      : datetime.date(2022, 9, 1),
                                     'title'           : 'Undergraduate Learning Assistant',
                                     'experiences': {1: {'description' : 'Helped students learn the basics of Object-Oriented programming',
                                                            'end_date' : None,
                                                           'hyperlink' : 'https://www.coursicle.com/msu/courses/CSE/335/',
                                                                'name' : 'CSE 335',
                                                              'skills' : {1: {'name'        : 'C++',
                                                                                'skill_level' : 8},
                                                                          2: {'name'        : 'Software Design',
                                                                                'skill_level' : 7},
                                                                          3: {'name'        : 'Debugging',
                                                                                'skill_level' : 9}},
                                                          'start_date' : datetime.date(2022, 9, 1)
                                                        }
                                                    }}}},
                2: {'address' : '354 Frandor Ave',
                        'city': 'Lansing',      
                       'state': 'Michigan',
                        'type': 'Restaurant',
                         'zip': '48912',
                  'department': 'NULL',
                        'name': 'Olgas Kitchen',
                   'positions': {1: {'end_date'        : datetime.date(2021, 9, 1),
                                     'responsibilities': 'Perform usual server duties and help around restaurant',
                                     'start_date'      : datetime.date(2021, 6, 1),
                                     'title'           : 'Server',
                                     'experiences': {1: {'description' : 'Worked as a part of a fast moving and dynamic team',
                                                            'end_date' : datetime.date(2021, 9, 1),
                                                           'hyperlink' : 'https://www.olgas.com',
                                                                'name' : 'Team Member',
                                                              'skills' : {},
                                                          'start_date' : datetime.date(2021, 6, 1)
                                                        }
                                                    }}}},
                3: {'address' : 'NULL',
                        'city': 'Shelby Township',      
                       'state': 'Michigan',
                        'type': 'Industry',
                         'zip': '48317',
                  'department': 'Delivery',
                        'name': 'DoorDash',
                   'positions': {1: {'end_date'        : datetime.date(2021, 3, 31),
                                     'responsibilities': 'Delivered food on a regular basis and on time',
                                     'start_date'      : datetime.date(2020, 8, 1),
                                     'title'           : 'Driver',
                                     'experiences': {}
                                                        }}}}


