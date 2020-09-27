'use strict';

const WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф'];
const WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц'];

let userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
let similarListElement = document.querySelector('.setup-similar-list');
let similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

let wizards = [
  {name: WIZARD_NAMES[0], surname: WIZARD_SURNAME[0], colorCoat: 'rgb(241, 43, 107)', eyesColor: 'red'},
  {name: WIZARD_NAMES[1], surname: WIZARD_SURNAME[1], colorCoat: 'rgb(146, 100, 161)', eyesColor: 'black'},
  {name: WIZARD_NAMES[2], surname: WIZARD_SURNAME[2], colorCoat: 'rgb(56, 159, 117)', eyesColor: 'blue'},
  {name: WIZARD_NAMES[3], surname: WIZARD_SURNAME[3], colorCoat: 'rgb(215, 210, 55)', eyesColor: 'yellow'}
];

const renderWizard = function (wizard) {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = `${WIZARD_NAMES[i]} ${WIZARD_SURNAME[i]}`;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

let fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
