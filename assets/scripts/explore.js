// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const page = document.querySelector("html");
  page.addEventListener('load', function() {
    const listVoice = SpeechSynthesis.getVoices();
  const changeVoice = document.getElementById("voice-select");
  var option;
  for (let i = 0; i < listVoice.length; i++) { 
    option = document.createElement("option");
    option.text = listVoice[i].name;
    changeVoice.add(option);
  }
});

const button = document.querySelector("button");

button.addEventListener('click', function() {
  if (changeImage.value == "party-horn") {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  }

  soundFile.play();
});
}