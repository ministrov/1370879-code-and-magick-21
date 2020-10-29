'use strict';

(function () {
  const WIZARD_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
  const WIZARD_EYES = [`black`, `red`, `blue`, `yellow`, `green`];
  const isRenderWizardsArr = (wizardsQuantity) => {
    for (let i = 0; i < wizardsQuantity.length; i++) {
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

  window.util = {
    isRenderWizardsArr,
    getRandomItem
  };
})();
