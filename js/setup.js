'use strict';

(function () {
  const MAX_SIMILAR_WIZARD_COUNT = 4;
  const similarListElement = document.querySelector(`.setup-similar-list`);
  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

  const wizards = window.util.isRenderWizardsArr(MAX_SIMILAR_WIZARD_COUNT);

  const renderWizard = function (wizard) {
    let wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

    return wizardElement;
  };

  const successHandler = function () {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < MAX_SIMILAR_WIZARD_COUNT; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    window.popup.userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
  };

  const errorHandler = function (errorMessage) {
    let node = document.createElement(`div`);
    node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red;`;
    node.style.position = `absolute`;
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = `30px`;

    node.textContent = errorMessage;
    document.body.insertAdjacentElement(`afterbegin`, node);
  };

  window.load(successHandler, errorHandler);

  const form = document.querySelector(`.setup-wizard-form`);

  const submitHandler = function (evt) {
    window.upload(new FormData(form), function () {
      window.popup.userDialog.classList.add(`hidden`);
    });
    evt.preventDefault();
  };

  form.addEventListener(`submit`, submitHandler);
  window.setup = {
    wizards
  };
})();
