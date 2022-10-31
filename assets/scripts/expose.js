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

changeVolume.addEventListener('change', (event) => {
  const result = document.querySelectorAll("img")[1];
  if (event.target.value == 0)
    result.src = "assets/icons/volume-level-0.svg";
  else if (event.target.value < 33)
    result.src = "assets/icons/volume-level-1.svg";
  else if (event.target.value < 67)
    result.src = "assets/icons/volume-level-2.svg";
  else
    result.src = "assets/icons/volume-level-3.svg";
  soundFile.volume = changeVolume.value/100.0;
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