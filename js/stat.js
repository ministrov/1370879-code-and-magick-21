'use strict';

const CLOUD_WIDTH = 500;
const CLOUD_HEIGHT = 280;
const CLOUD_X = 100;
const BAR_X = 150;
const BAR_Y = 250;
const BAR_WIDTH = 40;
const BAR_HEIGHT = -150;
const BAR_GAP = 50;
const GAP = 10;
const FONT_GAP = 20;
const FONT_Y = 270;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = function (arr) {
  for (let i = 0; i <= arr.length - 2; i++) {
    let maxElement = arr[i];

    for (let j = i + 1; j <= arr.length - 1; j++) {
      if (arr[j] > maxElement) {
        maxElement = arr[j];
        let swap = arr[i];
        arr[i] = maxElement;
        arr[j] = swap;
      }
    }
  }
  return arr[0];
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, FONT_GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, GAP, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP + GAP, BAR_WIDTH);
  ctx.fillText('Список результатов: ', CLOUD_X + FONT_GAP + GAP, BAR_WIDTH + FONT_GAP);

  ctx.fillStyle = '#000';

  const maxTime = getMaxElement(times);

  const getSaturation = function (min, max) {
    let saturation = Math.floor(Math.random() * (max - min) + min);
    ctx.fillStyle = 'rgba(0, 0, ' + saturation + ', 1)';
  };

  for (let i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), BAR_X + (BAR_GAP + BAR_WIDTH) * i, BAR_GAP + BAR_WIDTH);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(BAR_X + (BAR_GAP + BAR_WIDTH) * i, BAR_Y, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    } else if (names[i] !== 'Вы') {
      getSaturation(50, 250);
      ctx.fillRect(BAR_X + (BAR_GAP + BAR_WIDTH) * i, BAR_Y, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    }
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], BAR_X + (BAR_GAP + BAR_WIDTH) * i, FONT_Y);
  }
};
