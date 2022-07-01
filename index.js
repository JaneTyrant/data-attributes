"use strict";

const buttons = document.getElementsByClassName("flex-button");

const buttonFlexHandler = ({ target }) => {
  document.getElementById("flex-container").style.flexDirection =
    target.dataset.flexDirection;
};

for (const button of buttons) {
  button.addEventListener("click", buttonFlexHandler);
}
