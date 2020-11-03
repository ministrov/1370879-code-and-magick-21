'use strict';

(function () {
  const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
  const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
  const WIZARD_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
  const WIZARD_EYES = [`black`, `red`, `blue`, `yellow`, `green`];
  const isRenderWizardsArr = (wizardsQuantity) => {
    let wizards = [];
    for (let i = 0; i < wizardsQuantity; i++) {
      wizards[i] = {
        name: getRandomItem(WIZARD_NAMES) + ` ` + getRandomItem(WIZARD_SURNAMES),
        colorCoat: getRandomItem(WIZARD_COLORS),
        eyesColor: getRandomItem(WIZARD_EYES)
      };
    }

    return wizards;
  };

  // Функуия нахождения случайного элемета
  const getRandomItem = function (elements) {
    return elements[Math.floor(Math.random() * elements.length)];
  };

  window.util = {
    isRenderWizardsArr,
    getRandomItem,
    WIZARD_COLORS,
    WIZARD_EYES
  };
})();
