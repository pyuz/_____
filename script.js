'use strict'
const fake = document.getElementById("fake");
const shittyCss = document.getElementById("shittyCss");
const secret = document.getElementById("secret");
const player = document.getElementById("player");
const episodes = document.querySelectorAll(".ep");
fake.addEventListener("click", () => {revealSecret(fake.dataset.reveal)});


function removeAllChildren(element){
  while(element.firstChild){
    element.removeChild(element.firstChild);
  };
};

function loadEpisode(episode) {
  removeAllChildren(player);
  let audio = document.createElement("audio");
  let source = document.createElement("source");
  audio.setAttribute("controls", "");
  source.setAttribute("type", "audio/mpeg");
  source.setAttribute("src", episode);
  audio.appendChild(source);
  player.appendChild(audio);
};

episodes.forEach(function(episode) {
  episode.addEventListener("click", () => {loadEpisode(episode.dataset.ep)});
});

function revealSecret(reveal) {
  if (reveal === "false") {
    fake.style.color = "#f79";
    shittyCss.style.display = "inline";
    secret.style.display = "inline";
    fake.dataset.reveal = "true";
  } else {
    fake.style.color = "#4ad";
    shittyCss.style.display = "none";
    secret.style.display = "none";
    fake.dataset.reveal = "false";
  };
};
