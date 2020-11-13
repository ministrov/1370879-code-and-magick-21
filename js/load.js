'use strict';

(function () {
  const URL = `https://21.javascript.pages.academy/code-and-magick/data`;
  const StatusCode = {
    OK: 200
  };

  const TIME_OUT_MS = 10000;

  window.load = function (onSuccess, onError) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = `json`;

    xhr.addEventListener(`load`, function () {
      if (xhr.status === StatusCode.OK) {
        onSuccess(xhr.response);
      } else {
        onError(`Статус ответа: ` + xhr.status + ` ` + xhr.statusText);
      }
    });

    xhr.addEventListener(`error`, function () {
      onError(`Произошла ошибка соединения`);
    });

    xhr.addEventListener(`timeout`, function () {
      onError(`Запрос не успел выполниться за ` + xhr.timeout + `мс`);
    });

    xhr.timeout = TIME_OUT_MS;
    xhr.open(`GET`, URL);
    xhr.send();
  };
})();
