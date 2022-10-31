// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const changeImage = document.getElementById("horn-select");
  const soundFile = document.querySelector(".hidden");
  changeImage.addEventListener('change', function() {
    const result = document.querySelector("img");
    result.src = "assets/images/" + changeImage.value + ".svg";
    
    soundFile.src = "assets/audio" + changeImage.value + ".mp3";
});

const changeVolume = document.getElementById("volume-controls");

changeVolume.addEventListener('change', function() {
  const result = document.querySelectorAll("img")[1];
  if (changeVolume.value == 0)
    result.src = "assets/icons/volume-level-0.svg";
  else if (changeVolume.value < 33)
    result.src = "assets/icons/volume-level-1.svg";
  else if (changeVolume.value < 67)
    result.src = "assets/icons/volume-level-2.svg";
  else
    result.src = "assets/icons/volume-level-3.svg";
  soundFile.volume = changeVolume.value/100;
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