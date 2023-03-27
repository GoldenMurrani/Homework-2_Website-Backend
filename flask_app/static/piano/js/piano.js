/* JavaScript for Piano Page of Homework 1 */

/* Constants for the piano parts, letters, and sounds*/
const piano = document.querySelector('.piano-back');
const pianoKeys = document.querySelectorAll('.pianoKey');
const pianoTitle = document.querySelector('.piano-title');
const greatOldOne = document.querySelector('.great-old-one');
const blackText = document.querySelectorAll('.piano-text-black');
const whiteText = document.querySelectorAll('.piano-text-white');
const sound = {65:"http://carolinegabriel.com/demo/js-keyboard/sounds/040.wav",
                87:"http://carolinegabriel.com/demo/js-keyboard/sounds/041.wav",
                83:"http://carolinegabriel.com/demo/js-keyboard/sounds/042.wav",
                69:"http://carolinegabriel.com/demo/js-keyboard/sounds/043.wav",
                68:"http://carolinegabriel.com/demo/js-keyboard/sounds/044.wav",
                70:"http://carolinegabriel.com/demo/js-keyboard/sounds/045.wav",
                84:"http://carolinegabriel.com/demo/js-keyboard/sounds/046.wav",
                71:"http://carolinegabriel.com/demo/js-keyboard/sounds/047.wav",
                89:"http://carolinegabriel.com/demo/js-keyboard/sounds/048.wav",
                72:"http://carolinegabriel.com/demo/js-keyboard/sounds/049.wav",
                85:"http://carolinegabriel.com/demo/js-keyboard/sounds/050.wav",
                74:"http://carolinegabriel.com/demo/js-keyboard/sounds/051.wav",
                75:"http://carolinegabriel.com/demo/js-keyboard/sounds/052.wav",
                79:"http://carolinegabriel.com/demo/js-keyboard/sounds/053.wav",
                76:"http://carolinegabriel.com/demo/js-keyboard/sounds/054.wav",
                80:"http://carolinegabriel.com/demo/js-keyboard/sounds/055.wav",
                186:"http://carolinegabriel.com/demo/js-keyboard/sounds/056.wav"};
const creepySound = "https://orangefreesounds.com/wp-content/uploads/2020/09/Creepy-piano-sound-effect.mp3?_=1";

/* Constants for the piano keys, separate */
const whiteKey1 = document.getElementById('piano-white1');
const whiteKey2 = document.getElementById('piano-white2');
const whiteKey3 = document.getElementById('piano-white3');
const whiteKey4 = document.getElementById('piano-white4');
const whiteKey5 = document.getElementById('piano-white5');
const whiteKey6 = document.getElementById('piano-white6');
const whiteKey7 = document.getElementById('piano-white7');
const whiteKey8 = document.getElementById('piano-white8');
const whiteKey9 = document.getElementById('piano-white9');
const whiteKey10 = document.getElementById('piano-white10');

const blackKey1 = document.getElementById('piano-black1');
const blackKey2 = document.getElementById('piano-black2');
const blackKey3 = document.getElementById('piano-black3');
const blackKey4 = document.getElementById('piano-black4');
const blackKey5 = document.getElementById('piano-black5');
const blackKey6 = document.getElementById('piano-black6');
const blackKey7 = document.getElementById('piano-black7');

// Secret message variable
var secretMessage = "";

var playNotes = true;

//Event Listener for Key Being Pressed
document.addEventListener('keydown', function(event) {
	
	// the key that was pressed
	var pressedKey = event.key;

	if (playNotes === true){

		// Key Down Event (White)
		if (pressedKey === 'a'){
			whiteKey1.style.backgroundColor = '#FF0000';
			whiteKey1.style.transform = 'scale(0.95)';
			whiteKey1.style.boxShadow = '1px 1px 1px #000000';

			var keyNote = new Audio(sound['65']);
			keyNote.play();

			secretMessage += pressedKey;
		}
		if (pressedKey === 's'){
			whiteKey2.style.backgroundColor = '#FF0000';
			whiteKey2.style.transform = 'scale(0.95)';
			whiteKey2.style.boxShadow = '1px 1px 1px #000000';

			var keyNote = new Audio(sound['83']);
			keyNote.play();

			secretMessage += pressedKey;
		}
		if (pressedKey === 'd'){
			whiteKey3.style.backgroundColor = '#FF0000';
			whiteKey3.style.transform = 'scale(0.95)';
			whiteKey3.style.boxShadow = '1px 1px 1px #000000';

			var keyNote = new Audio(sound['68']);
			keyNote.play();

			secretMessage += pressedKey;
		}
		if (pressedKey === 'f'){
			whiteKey4.style.backgroundColor = '#FF0000';
			whiteKey4.style.transform = 'scale(0.95)';
			whiteKey4.style.boxShadow = '1px 1px 1px #000000';

			var keyNote = new Audio(sound['70']);
			keyNote.play();

			secretMessage += pressedKey;
		}
		if (pressedKey === 'g'){
			whiteKey5.style.backgroundColor = '#FF0000';
			whiteKey5.style.transform = 'scale(0.95)';
			whiteKey5.style.boxShadow = '1px 1px 1px #000000';

			var keyNote = new Audio(sound['71']);
			keyNote.play();

			secretMessage += pressedKey;
		}
		if (pressedKey === 'h'){
			whiteKey6.style.backgroundColor = '#FF0000';
			whiteKey6.style.transform = 'scale(0.95)';
			whiteKey6.style.boxShadow = '1px 1px 1px #000000';

			var keyNote = new Audio(sound['72']);
			keyNote.play();

			secretMessage += pressedKey;
		}
		if (pressedKey === 'j'){
			whiteKey7.style.backgroundColor = '#FF0000';
			whiteKey7.style.transform = 'scale(0.95)';
			whiteKey7.style.boxShadow = '1px 1px 1px #000000';

			var keyNote = new Audio(sound['74']);
			keyNote.play();

			secretMessage += pressedKey;
		}
		if (pressedKey === 'k'){
			whiteKey8.style.backgroundColor = '#FF0000';
			whiteKey8.style.transform = 'scale(0.95)';
			whiteKey8.style.boxShadow = '1px 1px 1px #000000';

			var keyNote = new Audio(sound['75']);
			keyNote.play();

			secretMessage += pressedKey;
		}
		if (pressedKey === 'l'){
			whiteKey9.style.backgroundColor = '#FF0000';
			whiteKey9.style.transform = 'scale(0.95)';
			whiteKey9.style.boxShadow = '1px 1px 1px #000000';

			var keyNote = new Audio(sound['76']);
			keyNote.play();

			secretMessage += pressedKey;
		}
		if (pressedKey === ';'){
			whiteKey10.style.backgroundColor = '#FF0000';
			whiteKey10.style.transform = 'scale(0.95)';
			whiteKey10.style.boxShadow = '1px 1px 1px #000000';

			var keyNote = new Audio(sound['186']);
			keyNote.play();

			secretMessage += pressedKey;
		}

		// Key Down Event (Black)
		if (pressedKey === 'w'){
			blackKey1.style.backgroundColor = '#0000FF';
			blackKey1.style.transform = 'scale(0.95)';
			blackKey1.style.boxShadow = '1px 1px 1px #000000';

			var keyNote = new Audio(sound['87']);
			keyNote.play();

			secretMessage += pressedKey;
		}
		if (pressedKey === 'e'){
			blackKey2.style.backgroundColor = '#0000FF';
			blackKey2.style.transform = 'scale(0.95)';
			blackKey2.style.boxShadow = '1px 1px 1px #000000';

			var keyNote = new Audio(sound['69']);
			keyNote.play();

			secretMessage += pressedKey;
		}
		if (pressedKey === 't'){
			blackKey3.style.backgroundColor = '#0000FF';
			blackKey3.style.transform = 'scale(0.95)';
			blackKey3.style.boxShadow = '1px 1px 1px #000000';

			var keyNote = new Audio(sound['84']);
			keyNote.play();

			secretMessage += pressedKey;
		}
		if (pressedKey === 'y'){
			blackKey4.style.backgroundColor = '#0000FF';
			blackKey4.style.transform = 'scale(0.95)';
			blackKey4.style.boxShadow = '1px 1px 1px #000000';

			var keyNote = new Audio(sound['89']);
			keyNote.play();

			secretMessage += pressedKey;
		}
		if (pressedKey === 'u'){
			blackKey5.style.backgroundColor = '#0000FF';
			blackKey5.style.transform = 'scale(0.95)';
			blackKey5.style.boxShadow = '1px 1px 1px #000000';

			var keyNote = new Audio(sound['85']);
			keyNote.play();

			secretMessage += pressedKey;
		}
		if (pressedKey === 'o'){
			blackKey6.style.backgroundColor = '#0000FF';
			blackKey6.style.transform = 'scale(0.95)';
			blackKey6.style.boxShadow = '1px 1px 1px #000000';

			var keyNote = new Audio(sound['79']);
			keyNote.play();

			secretMessage += pressedKey;
		}
		if (pressedKey === 'p'){
			blackKey7.style.backgroundColor = '#0000FF';
			blackKey7.style.transform = 'scale(0.95)';
			blackKey7.style.boxShadow = '1px 1px 1px #000000';

			var keyNote = new Audio(sound['80']);
			keyNote.play();

			secretMessage += pressedKey;
		}

	}
	
});

//Event Listener for Key Being Let Go
document.addEventListener('keyup', function(event) {
	
	// the key that was pressed
	var pressedKey = event.key;

	// Key Up Event (White)
	if (pressedKey === 'a'){
		whiteKey1.style.backgroundColor = '#DFDFDF';
		whiteKey1.style.transform = 'none';
		whiteKey1.style.boxShadow = '5px 5px 5px #000000';
	}
	if (pressedKey === 's'){
		whiteKey2.style.backgroundColor = '#DFDFDF';
		whiteKey2.style.transform = 'none';
		whiteKey2.style.boxShadow = '5px 5px 5px #000000';
	}
	if (pressedKey === 'd'){
		whiteKey3.style.backgroundColor = '#DFDFDF';
		whiteKey3.style.transform = 'none';
		whiteKey3.style.boxShadow = '5px 5px 5px #000000';
	}
	if (pressedKey === 'f'){
		whiteKey4.style.backgroundColor = '#DFDFDF';
		whiteKey4.style.transform = 'none';
		whiteKey4.style.boxShadow = '5px 5px 5px #000000';
	}
	if (pressedKey === 'g'){
		whiteKey5.style.backgroundColor = '#DFDFDF';
		whiteKey5.style.transform = 'none';
		whiteKey5.style.boxShadow = '5px 5px 5px #000000';
	}
	if (pressedKey === 'h'){
		whiteKey6.style.backgroundColor = '#DFDFDF';
		whiteKey6.style.transform = 'none';
		whiteKey6.style.boxShadow = '5px 5px 5px #000000';
	}
	if (pressedKey === 'j'){
		whiteKey7.style.backgroundColor = '#DFDFDF';
		whiteKey7.style.transform = 'none';
		whiteKey7.style.boxShadow = '5px 5px 5px #000000';
	}
	if (pressedKey === 'k'){
		whiteKey8.style.backgroundColor = '#DFDFDF';
		whiteKey8.style.transform = 'none';
		whiteKey8.style.boxShadow = '5px 5px 5px #000000';
	}
	if (pressedKey === 'l'){
		whiteKey9.style.backgroundColor = '#DFDFDF';
		whiteKey9.style.transform = 'none';
		whiteKey9.style.boxShadow = '5px 5px 5px #000000';
	}
	if (pressedKey === ';'){
		whiteKey10.style.backgroundColor = '#DFDFDF';
		whiteKey10.style.transform = 'none';
		whiteKey10.style.boxShadow = '5px 5px 5px #000000';
	}

	// Key Up Event (Black)
	if (pressedKey === 'w'){
		blackKey1.style.backgroundColor = '#000000';
		blackKey1.style.transform = 'none';
		blackKey1.style.boxShadow = '1px 1px 1px #000000';
	}
	if (pressedKey === 'e'){
		blackKey2.style.backgroundColor = '#000000';
		blackKey2.style.transform = 'none';
		blackKey2.style.boxShadow = '3px 3px 3px #000000';
	}
	if (pressedKey === 't'){
		blackKey3.style.backgroundColor = '#000000';
		blackKey3.style.transform = 'none';
		blackKey3.style.boxShadow = '3px 3px 3px #000000';
	}
	if (pressedKey === 'y'){
		blackKey4.style.backgroundColor = '#000000';
		blackKey4.style.transform = 'none';
		blackKey4.style.boxShadow = '3px 3px 3px #000000';
	}
	if (pressedKey === 'u'){
		blackKey5.style.backgroundColor = '#000000';
		blackKey5.style.transform = 'none';
		blackKey5.style.boxShadow = '3px 3px 3px #000000';

		secretCheck();
	}
	if (pressedKey === 'o'){
		blackKey6.style.backgroundColor = '#000000';
		blackKey6.style.transform = 'none';
		blackKey6.style.boxShadow = '3px 3px 3px #000000';
	}
	if (pressedKey === 'p'){
		blackKey7.style.backgroundColor = '#000000';
		blackKey7.style.transform = 'none';
		blackKey7.style.boxShadow = '3px 3px 3px #000000';
	}

});

//Function to check secret message
function secretCheck() {
	console.log(secretMessage.slice(-8));

	if (secretMessage.slice(-8) === 'weseeyou'){
		Awaken();
	}
}

//Function to awaken great old one
function Awaken() {
	var choir = new Audio(creepySound);
	choir.play();

	piano.style.display = 'none';
	piano.style.opacity = 0;

	greatOldOne.style.opacity = 1;

	playNotes = false;
}

// loop to create fade-in fade-out effect for letters
for (let i = 0; pianoKeys.length; i++){

	// mouse entering the keys-area listener
	pianoKeys[i].addEventListener("mouseover", function() {
		
		// set opacity for black text to 1
		for (let x = 0; x < blackText.length; x++){
			blackText[x].style.opacity = 1;
		}

		// set opacity for white text to 1
		for (let x = 0; x < whiteText.length; x++){
			whiteText[x].style.opacity = 1;
		}

	});

	// mouse leaving the keys-area listener
	pianoKeys[i].addEventListener("mouseleave", function() {
		
		// set opacity for black text to 0
		for (let x = 0; x < blackText.length; x++){
			blackText[x].style.opacity = 0;
		}

		// set opacity for white text to 1
		for (let x = 0; x < whiteText.length; x++){
			whiteText[x].style.opacity = 0;
		}

	});
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

