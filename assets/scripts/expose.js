// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const changeImage = document.getElementById("horn-select");
  const soundFile = document.querySelector(".hidden");
  changeImage.addEventListener('change', (event) => {
    const result = document.querySelector("img");
    result.src = "assets/images/" + event.target.value + ".svg";
    
    soundFile.src = "assets/audio/" + event.target.value + ".mp3";
});

const changeVolume = document.getElementById("volume-controls");

changeVolume.addEventListener('input', (event) => {
  const result = document.querySelectorAll("img")[1];
  const val = parseInt(changeVolume.value, 10);
  if (val == 0)
    result.src = "assets/icons/volume-level-0.svg";
  else if (val < 33)
    result.src = "assets/icons/volume-level-1.svg";
  else if (val < 67)
    result.src = "assets/icons/volume-level-2.svg";
  else
    result.src = "assets/icons/volume-level-3.svg";
  soundFile.volume = val/100.0;
});

const button = document.querySelector("button");
const canvas = document.document.querySelector("img");
const jsConfetti = new JSConfetti({ canvas })

button.addEventListener('click', function() {
  if (changeImage.value == "party-horn") {
    
    jsConfetti.addConfetti();
  }

  soundFile.play();
});
}