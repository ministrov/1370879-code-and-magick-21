'use strict';

(function () {
  const setupOpen = document.querySelector(`.setup-open`);
  const setupClose = userDialog.querySelector(`.setup-close`);
  const userDialog = document.querySelector(`.setup`);
  const userNameInput = userDialog.querySelector(`.setup-user-name`);

  const onSetupEscPress = (evt) => {
    if (evt.key === `Escape` && userNameInput !== document.activeElement) {
      evt.preventDefault();
      closePopup(userDialog);
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


  setupOpen.addEventListener(`click`, function () {
    openPopup(userDialog);
  });

  setupOpen.addEventListener(`keydown`, function (evt) {
    if (evt.key === `Enter`) {
      evt.preventDefault();
      openPopup(userDialog);
    }
  });

  setupClose.addEventListener(`click`, function () {
    closePopup(userDialog);
  });

  setupClose.addEventListener(`keydown`, function (evt) {
    if (evt.key === `Enter`) {
      evt.preventDefault();
      closePopup(userDialog);
    }
  });

  window.popup = {
    userNameInput,
    userDialog
  };
})();
