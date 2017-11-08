var synth = window.speechSynthesis;

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
      option.textContent += ' -- DEFAULT'; //установить звук по умолчанию нельзя, он задается системой, но можно изменить его среди выбранных
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

// анализирует клавиатуру на нажание клавишь
let inputText = '';
window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

  // склеивает весь текст со всех текстовых клоков, для проигрывания.
  switch (event.keyCode) {
    case 9: // tab
    case 32: // key space
    case 49: // key "!"
    case 190: // key "."
    case 191: // key "?"
      inputText = '';
      let textareaCount = document.getElementsByTagName("textarea");
      for (var i = 0; i < textareaCount.length; i++) {
        if (textareaCount[i].value){
          inputText += textareaCount[i].value;
        }
      }
      break;
    default:
      return; // Quit when this doesn't handle the key event.
  }

  // const inputText = document.getElementById("text_id").value;
  const inputLastWord = inputText.split(/[\\.!\?\s+]/).slice(-1);
  const inpuntLastSentence = inputText.split(/[\\.!\?]/).slice(-1);

  switch (event.keyCode) {
    case 32: //key space
      synthVoice(inputLastWord); //read last word.
      break;
    case 9: // tab
    case 49: // kes "!"
    case 190: // key "."
    case 191: // key "?"
      synthVoice(inputLastWord); //read last word.
      if ((inputLastWord[0] !== inpuntLastSentence[0]) &&
          (inputLastWord[0].length + 1 < inpuntLastSentence[0].length)){ // предложение в одно слово не читать.
        synthVoice(inpuntLastSentence); //read last word.
      }
    break;
    default:
      return; // Quit when this doesn't handle the key event.
  }
  // Cancel the default action to avoid it being handled twice
  // event.preventDefault();
}, true);

pitch.onchange = function() {
  pitchValue.textContent = pitch.value;
}

rate.onchange = function() {
  rateValue.textContent = rate.value;
}

// voiceSelect.onchange = function(){
//   speak();
// }
