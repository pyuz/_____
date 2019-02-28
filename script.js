'use strict'

document.getElementById("fake").addEventListener("click", revealSecret);

function revealSecret() {
  document.getElementById("fake").style.color = "#f79";
  document.getElementById("secret").style.visibility = "visible";
}

function hideSecret() {
  document.getElementById("fake").style.color = "#49f";
  document.getElementById("secret").style.visibility = "hidden";
}
