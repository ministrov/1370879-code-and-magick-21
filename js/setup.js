'use strict';

(function () {
  const WIZARDS_QUANTITY = 4;
  const similarListElement = document.querySelector(`.setup-similar-list`);
  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

  const wizards = window.util.isRenderWizardsArr(WIZARDS_QUANTITY);

  const renderWizard = function (wizard) {
    let wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

    return wizardElement;
  };

  const fragment = document.createDocumentFragment();

  wizards.forEach((item) => {
    fragment.appendChild(renderWizard(item));
  });
  similarListElement.appendChild(fragment);

  window.popup.userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);

  window.setup = {
    wizards
  };
})();
