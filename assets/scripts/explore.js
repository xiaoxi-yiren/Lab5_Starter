// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const page = document.querySelector("body");
  const listVoice = SpeechSynthesis.getVoices();
  page.addEventListener('load', function() {
    
    const changeVoice = document.getElementById("voice-select");
    var option;
    for (let i = 0; i < listVoice.length; i++) { 
      option = document.createElement("option");
      option.textContent = `${listVoice[i].name} (${listVoice[i].lang})`;
      changeVoice.appendChild(option);
    }
});

const button = document.querySelector("button");

button.addEventListener('click', function() {
  const synth = window.speechSynthesis;
  const textArea = document.getElementById("text-to-speak");
  const utterThis = new SpeechSynthesisUtterance(textArea.value);
  for (let j = 0; j < listVoice.length; j++) {
    if (listVoice[j].name == changeVoice.value)
      utterThis.voice = listVoice[j];
  }
  synth.speak(utterThis);
});
}