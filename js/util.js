'use strict';

(function () {
  const WIZARD_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
  const WIZARD_EYES = [`black`, `red`, `blue`, `yellow`, `green`];
  const isRenderWizardsArr = () => {
    for (let i = 0; i < wizardsQuantity; i++) {
      window.setup.wizards[i] = {
        name: getRandomItem(window.setup.WIZARD_NAMES) + ` ` + getRandomItem(window.setup.WIZARD_SURNAMES),
        colorCoat: getRandomItem(WIZARD_COLORS),
        eyesColor: getRandomItem(WIZARD_EYES)
      };
    }
  };

  // Функуия нахождения случайного элемета
  const getRandomItem = function (elements) {
    return elements[Math.floor(Math.random() * elements.length)];
  };
  // Функция генерации случайных данных из массива
  const renderWizardsArr = function (wizardsQuantity) {
    for (let i = 0; i < wizardsQuantity; i++) {
      window.setup.wizards[i] = {
        name: getRandomItem(window.setup.WIZARD_NAMES) + ` ` + getRandomItem(window.setup.WIZARD_SURNAMES),
        colorCoat: getRandomItem(WIZARD_COLORS),
        eyesColor: getRandomItem(WIZARD_EYES)
      };
    }
  };
  window.util = {
    isRenderWizardsArr: isRenderWizardsArr,

    getRandomItem: getRandomItem
  };
})();
