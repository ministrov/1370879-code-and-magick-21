'use strict';

const CLOUD_WIDTH = 500;
const CLOUD_HEIGHT = 200;
const CLOUD_X = 100;
const CLOUD_Y = 50;
const GAP = 10;
const FONT_GAP = 15;
const TEXT_WIDTH = 50;
const BAR_HEIGTH = 150;
const BAR_WIDTH = 40;

const renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function(ctx) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.fillText('Вы', 170, 240);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(160, 60, 40, 150);

  ctx.fillStyle = '#000';
  ctx.fillText('Кекс', 225, 240);
  ctx.fillStyle = 'blue';
  ctx.fillRect(220, 60, 40, 150);

  ctx.fillStyle = '#000';
  ctx.fillText('Катя', 280, 240);
  ctx.fillStyle = 'grey';
  ctx.fillRect(280, 60, 40, 150);

  ctx.fillStyle = '#000';
  ctx.fillText('Игорь', 335, 240);
  ctx.fillStyle = 'tomato';
  ctx.fillRect(340, 60, 40, 150);
};
