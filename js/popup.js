'use strict';

(function () {
  const setupOpen = document.querySelector(`.setup-open`);
  const userDialog = document.querySelector(`.setup`);
  const setupClose = userDialog.querySelector(`.setup-close`);
  const userNameInput = userDialog.querySelector(`.setup-user-name`);

  const Key = {
    ENTER: `Enter`,
    ESC: `Escape`
  };

  const startCoordinates = {
    x: 0,
    y: 0
  };

  const onSetupEscPress = (evt) => {
    if (evt.key === Key.ESC && userNameInput !== document.activeElement) {
      evt.preventDefault();
      closePopup(userDialog);
    }
  };

  const openPopup = (popup) => {
    popup.classList.remove(`hidden`);
    document.addEventListener(`keydown`, onSetupEscPress);

    startCoordinates.x = userDialog.offsetLeft;
    startCoordinates.y = userDialog.offsetTop;
  };

  const closePopup = (popup) => {
    popup.classList.add(`hidden`);
    userDialog.style.left = `${startCoordinates.x}px`;
    userDialog.style.top = `${startCoordinates.y}px`;
    document.removeEventListener(`keydown`, onSetupEscPress);
  };


  setupOpen.addEventListener(`click`, function () {
    openPopup(userDialog);
  });

  setupOpen.addEventListener(`keydown`, function (evt) {
    if (evt.key === Key.ENTER) {
      evt.preventDefault();
      openPopup(userDialog);
    }
  });

  setupClose.addEventListener(`click`, function () {
    closePopup(userDialog);
  });

  setupClose.addEventListener(`keydown`, function (evt) {
    if (evt.key === Key.ENTER) {
      evt.preventDefault();
      closePopup(userDialog);
    }
  });

  window.popup = {
    userNameInput,
    userDialog
  };
})();
