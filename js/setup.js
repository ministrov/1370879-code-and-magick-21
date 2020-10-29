'use strict';

(function () {
  const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
  const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
  const WIZARDS_QUANTITY = 4;
  const similarListElement = document.querySelector(`.setup-similar-list`);
  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
  const wizards = [];

  const renderWizard = function (wizard) {
    let wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

    return wizardElement;
  };

  const fragment = document.createDocumentFragment();
  window.util.isRenderWizardsArr(WIZARDS_QUANTITY);
  wizards.forEach((item) => {
    fragment.appendChild(renderWizard(item));
  });
  similarListElement.appendChild(fragment);

  window.popup.userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);

  window.setup = {
    WIZARD_NAMES,
    WIZARD_SURNAMES,
    WIZARDS_QUANTITY,
    wizards
  };
})();
