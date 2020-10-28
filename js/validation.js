'use strict';

(function () {
  const MIN_NAME_LENGTH = 2;
  const MAX_NAME_LENGTH = 25;

  window.userNameInput.addEventListener(`invalid`, () => {
    const valueLength = window.userNameInput.value.length;

    if (valueLength < MIN_NAME_LENGTH) {
      window.userNameInput.setCustomValidity(`Еще ` + (MIN_NAME_LENGTH - valueLength) + ` символов`);
    } else if (valueLength > MAX_NAME_LENGTH) {
      window.userNameInput.setCustomValidity(`Удалите лишние ` + (valueLength - MAX_NAME_LENGTH) + ` символов`);
    } else {
      window.userNameInput.setCustomValidity(``);
    }

    window.userNameInput.reportValidity();
  });

  window.userNameInput.addEventListener(`input`, () => {
    const valueLength = window.userNameInput.value.length;

    if (valueLength < MIN_NAME_LENGTH) {
      window.userNameInput.setCustomValidity(`Еще ` + (MIN_NAME_LENGTH - valueLength) + ` символов`);
    } else if (valueLength > MAX_NAME_LENGTH) {
      window.userNameInput.setCustomValidity(`Удалите лишние ` + (valueLength - MAX_NAME_LENGTH) + ` символов`);
    } else {
      window.userNameInput.setCustomValidity(``);
    }

    window.userNameInput.reportValidity();
  });
})();
