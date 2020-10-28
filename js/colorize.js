'use strict';

(function () {
  const wizardCoatColor = window.userDialog.querySelector(`.setup-wizard .wizard-coat`);
  const wizardCoatColorInput = window.userDialog.querySelector(`input[name = coat-color]`);
  const wizardEyesColor = window.userDialog.querySelector(`.setup-wizard .wizard-eyes`);
  const wizardEyesColorInput = window.userDialog.querySelector(`input[name = eyes-color]`);
  const fireballColor = window.userDialog.querySelector(`.setup-fireball-wrap`);
  const fireballColorInput = window.userDialog.querySelector(`input[name = fireball-color]`);
  const FIRE_BALL_COLOR = [`#ee4830`, `#e6e848`, `#30a8ee`, `#5ce6c0`, `#e848d5`];

  const getRandomCoatColor = () => {
    const color = window.util.getRandomItem(window.util.WIZARD_COLORS);

    wizardCoatColor.style.fill = color;
    wizardCoatColorInput.value = color;
  };

  const getRandomEyesColor = () => {
    const color = window.util.getRandomItem(window.util.WIZARD_EYES);

    wizardEyesColor.style.fill = color;
    wizardEyesColorInput.value = color;
  };

  const getRandomfireballColor = () => {
    const color = window.util.getRandomItem(FIRE_BALL_COLOR);

    fireballColor.style.backgroundColor = color;
    fireballColorInput.value = color;
  };


  wizardCoatColor.addEventListener(`click`, getRandomCoatColor);
  wizardEyesColor.addEventListener(`click`, getRandomEyesColor);
  fireballColor.addEventListener(`click`, getRandomfireballColor);
})();
