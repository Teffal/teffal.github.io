var synth = window.speechSynthesis;

var inputForm = document.querySelector('form');
var inputTxt = document.querySelector('.txt');
var voiceSelect = document.querySelector('select');

var pitch = document.querySelector('#pitch');
var pitchValue = document.querySelector('.pitch-value');
var rate = document.querySelector('#rate');
var rateValue = document.querySelector('.rate-value');

var voices = [];
// автоматический список поддерживаемых языков
function populateVoiceList() {
  voices = synth.getVoices();
  var selectedIndex = voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
  voiceSelect.innerHTML = '';
  for(i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
  voiceSelect.selectedIndex = selectedIndex;
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

function synthVoice(text){
  if(inputTxt.value !== ''){
    var utterThis = new SpeechSynthesisUtterance(text);
    var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for(i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    utterThis.pitch = pitch.value;
    utterThis.rate = rate.value;
    synth.speak(utterThis);
  }
}

// анализирует клавиатуру на нажание клавишь
window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

  const inputText = document.getElementById("text_id").value;
  const inputLastWord = inputText.split(/[\\.!\?\s+]/).slice(-1);
  const inpuntLastSentence = inputText.split(/[\\.!\?]/).slice(-1);
  // const inpuntLastSentence = inputText.split(/([^.!?]+[.!?]"?)\s?/g).slice(-1);

  switch (event.keyCode) {
    case 32: //key space
      synthVoice(inputLastWord); //read last word.
      break;
    // case 13: //enter
    //   synthVoice(document.getElementById("text_id").value.split(/[\\.!\?\s+]/).slice(-2)); //read last word.
    //   synthVoice(document.getElementById("text_id").value.split(/[\\.!\?]/).slice(-2)); //read last word.
    //   break;
    case 190: // key "."
      synthVoice(inputLastWord); //read last word.
      synthVoice(inpuntLastSentence); //read last word.
      break;
    case 49: // kes "!"
      synthVoice(inputLastWord); //read last word.
      synthVoice(inpuntLastSentence); //read last word.
    break;
    case 191: // key "?"
      synthVoice(inputLastWord); //read last word.
      synthVoice(inpuntLastSentence); //read last word.
    break;
    case "ArrowRight":
      // code for "right arrow" key press.
    break;
    case "ArrowRight":
      // code for "right arrow" key press.
    break;
    default:
      return; // Quit when this doesn't handle the key event.
  }
  // Cancel the default action to avoid it being handled twice
  // event.preventDefault();
}, true);




// inputForm.onsubmit = function(event) {
//   event.preventDefault();
//
//   speak();
//
//   inputTxt.blur();
// }
//
pitch.onchange = function() {
  pitchValue.textContent = pitch.value;
}

rate.onchange = function() {
  rateValue.textContent = rate.value;
}
//
// voiceSelect.onchange = function(){
//   speak();
// }
