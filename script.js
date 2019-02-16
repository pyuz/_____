'use strict'

document.getElementById("fake").addEventListener("click", revealSecret);

function revealSecret() {
  document.getElementById("fake").style.color = "#ff7799";
  document.getElementById("secret").style.visibility = "visible";
}
