'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARDS_QUANTITY = 4;
const WIZARD_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYES = [`black`, `red`, `blue`, `yellow`, `green`];
const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 25;
const DB_WIZARDS = {
  name: [
    `Иван`,
    `Хуан Себастьян`,
    `Мария`,
    `Кристоф`,
    `Виктор`,
    `Юлия`,
    `Люпита`,
    `Вашингтон`,
  ],
  surname: [
    `да Марья`,
    `Верон`,
    `Мирабелла`,
    `Вальц`,
    `Онопко`,
    `Топольницкая`,
    `Нионго`,
    `Ирвинг`,
  ],
  coatColor: [
    `rgb(101, 137, 164)`,
    `rgb(241, 43, 107)`,
    `rgb(146, 100, 161)`,
    `rgb(56, 159, 117)`,
    `rgb(215, 210, 55)`,
    `rgb(0, 0, 0)`,
  ],
  eyesColor: [
    `black`,
    `red`,
    `blue`,
    `yellow`,
    `green`,
  ],
  fireballColor: [
    `#ee4830`,
    `#e6e848`,
    `#30a8ee`,
    `#5ce6c0`,
    `#e848d5`,
  ],
};
const userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);
const similarListElement = document.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
const wizards = [];
const setup = document.querySelector(`.setup`);
const setupOpen = document.querySelector(`.setup-open`);
const setupClose = document.querySelector(`.setup-close`);
const userNameInput = document.querySelector(`.setup-user-name`);
const wizardCoatColor = setup.querySelector(`.setup-wizard .wizard-coat`);
const wizardCoatColorInput = setup.querySelector(`input[name = coat-color]`);
const wizardEyesColor = setup.querySelector(`.setup-wizard .wizard-eyes`);
const wizardEyesColorInput = setup.querySelector(`input[name = eyes-color]`);
const fireballColor = setup.querySelector(`.setup-fireball-wrap`);
const fireballColorInput = setup.querySelector(`input[name = fireball-color]`);
// Функуия нахождения случайного элемета
const getRandomItem = function (elements) {
  return elements[Math.floor(Math.random() * elements.length)];
};
// Функция генерации случайных данных из массива
const renderWizardsArr = function (wizardsQuantity) {
  for (let i = 0; i < wizardsQuantity; i++) {
    wizards[i] = {
      name: getRandomItem(WIZARD_NAMES) + ` ` + getRandomItem(WIZARD_SURNAMES),
      colorCoat: getRandomItem(WIZARD_COLORS),
      eyesColor: getRandomItem(WIZARD_EYES)
    };
  }
};

const renderWizard = function (wizard) {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

const fragment = document.createDocumentFragment();
renderWizardsArr(WIZARDS_QUANTITY);
wizards.forEach((item) => {
  fragment.appendChild(renderWizard(item));
});
similarListElement.appendChild(fragment);

userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);

const onSetupEscPress = (evt) => {
  if (evt.key === `Escape` && userNameInput !== document.activeElement) {
    evt.preventDefault();
    closePopup(setup);
  }
};

const openPopup = (popup) => {
  popup.classList.remove(`hidden`);
  document.addEventListener(`keydown`, onSetupEscPress);
};

const closePopup = (popup) => {
  popup.classList.add(`hidden`);
  document.removeEventListener(`keydown`, onSetupEscPress);
};

const getRandomCoatColor = () => {
  const color = DB_WIZARDS.coatColor[getRandomItem(0, DB_WIZARDS.coatColor.length - 1)];

  wizardCoatColor.style.fill = color;
  wizardCoatColorInput.value = color;
};

const getRandomEyesColor = () => {
  const color = DB_WIZARDS.eyesColor[getRandomItem(0, DB_WIZARDS.eyesColor.length - 1)];

  wizardEyesColor.style.fill = color;
  wizardEyesColorInput.value = color;
};

const getRandomfireballColor = () => {
  const color = DB_WIZARDS.fireballColor[getRandomItem(0, DB_WIZARDS.fireballColor.length - 1)];

  fireballColor.style.backgroundColor = color;
  fireballColorInput.value = color;
};

setupOpen.addEventListener(`click`, function () {
  openPopup(setup);
});

setupOpen.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    evt.preventDefault();
    openPopup(setup);
  }
});

setupClose.addEventListener(`click`, function () {
  closePopup(setup);
});

setupClose.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    evt.preventDefault();
    closePopup(setup);
  }
});

wizardCoatColor.addEventListener(`click`, getRandomCoatColor());
wizardEyesColor.addEventListener(`click`, getRandomEyesColor());
fireballColor.addEventListener(`click`, getRandomfireballColor());

userNameInput.addEventListener(`invalid`, () => {
  const valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Еще` + (MIN_NAME_LENGTH - valueLength) + `символов`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Удалите лишние` + (valueLength - MAX_NAME_LENGTH) + `символов`);
  } else {
    userNameInput.setCustomValidity(``);
  }

  userNameInput.reportValidity();
});

userNameInput.addEventListener(`input`, () => {
  const valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Еще` + (MIN_NAME_LENGTH - valueLength) + `символов`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Удалите лишние` + (valueLength - MAX_NAME_LENGTH) + `символов`);
  } else {
    userNameInput.setCustomValidity(``);
  }

  userNameInput.reportValidity();
});
