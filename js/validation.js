'use strict';

(function () {
  const MIN_NAME_LENGTH = 2;
  const MAX_NAME_LENGTH = 25;

  window.popup.userNameInput.addEventListener(`invalid`, () => {
    const valueLength = window.popup.userNameInput.value.length;

    if (valueLength < MIN_NAME_LENGTH) {
      window.popup.userNameInput.setCustomValidity(`Еще ` + (MIN_NAME_LENGTH - valueLength) + ` символов`);
    } else if (valueLength > MAX_NAME_LENGTH) {
      window.popup.userNameInput.setCustomValidity(`Удалите лишние ` + (valueLength - MAX_NAME_LENGTH) + ` символов`);
    } else {
      window.popup.userNameInput.setCustomValidity(``);
    }

    window.popup.userNameInput.reportValidity();
  });

  window.popup.userNameInput.addEventListener(`input`, () => {
    const valueLength = window.popup.userNameInput.value.length;

    if (valueLength < MIN_NAME_LENGTH) {
      window.popup.userNameInput.setCustomValidity(`Еще ` + (MIN_NAME_LENGTH - valueLength) + ` символов`);
    } else if (valueLength > MAX_NAME_LENGTH) {
      window.popup.userNameInput.setCustomValidity(`Удалите лишние ` + (valueLength - MAX_NAME_LENGTH) + ` символов`);
    } else {
      window.popup.userNameInput.setCustomValidity(``);
    }

    window.popup.userNameInput.reportValidity();
  });
})();
