// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var listVoice = [];
  const changeVoice = document.getElementById("voice-select");
  speechSynthesis.onvoiceschanged = () => {
  //const page = document.querySelector("body");
  listVoice = speechSynthesis.getVoices();
  console.log(listVoice);
  //page.addEventListener('load', function() {
    
  
  var option;
  
  for (let i = 0; i < listVoice.length; i++) { 
    option = document.createElement("option");
    option.textContent = `${listVoice[i].name} (${listVoice[i].lang})`;
    changeVoice.appendChild(option);
  }}
  //});

  const button = document.querySelector("button");
  const img = document.querySelector("img");
  button.addEventListener('click', function() {
    const synth = window.speechSynthesis;
    const textArea = document.getElementById("text-to-speak");
    const utterThis = new SpeechSynthesisUtterance(textArea.value);
    //var listVoice = speechSynthesis.getVoices();
    console.log(listVoice);
    for (let j = 0; j < listVoice.length; j++) {
      if (listVoice[j].name == changeVoice.value)
        utterThis.voice = listVoice[j];
    }
    synth.speak(utterThis);
    
    img.src = "assets/images/smiling-open.png"
    utterThis.addEventListener('end', () => {
      img.setAttribute('src', 'assets/images/smiling.png')
    });
  });

}