'use strict';

const WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const WIZARDS_QUANTITY = 4;
const WIZARD_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
const userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
const similarListElement = document.querySelector('.setup-similar-list');
const similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
const wizards = [];

const getRandomItem = function () {
  let elements = wizards;
  return elements[Math.floor(Math.random() * elements.length)];
};

const renderWizardsArr = function (wizardsQuantity) {
  for (let i = 0; i < wizardsQuantity; i++) {
    wizards[i] = {
      name:
        WIZARD_NAMES[getRandomItem(WIZARD_NAMES.length)] +
        ' ' +
        WIZARD_SURNAMES[getRandomItem(WIZARD_SURNAMES.length)],
      coatColor: WIZARD_COLORS[getRandomItem(WIZARD_COLORS.length)],
      eyesColor: WIZARD_EYES[getRandomItem(WIZARD_EYES.length)],
    };
  }
};

const renderWizard = function (wizard) {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

const fragment = document.createDocumentFragment();
renderWizardsArr(WIZARDS_QUANTITY);
wizards.forEach((item) => {
  fragment.appendChild(renderWizard(item));
});
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
