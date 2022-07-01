"use strict";

const buttons = document.getElementsByClassName("flex-button");

const buttonFlexHandler = ({ target }) => {
  document.getElementById("flex-container").style.flexDirection =
    target.dataset.flexDirection;
  for (const button of buttons) {
    button.style.backgroundColor = "initial";
    button.style.color = "initial";
  }
  target.style.backgroundColor = "var(--accent-color)";
  target.style.color = "white";
};

for (const button of buttons) {
  button.addEventListener("click", buttonFlexHandler);
}
