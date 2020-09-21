"use strict";

const CLOUD_WIDTH = 500;
const CLOUD_HEIGHT = 200;

window.renderStatistics = function (ctx) {
  renderCloud(ctx, 110, 60, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, 100, 50, '#fff');

  ctx.fillStyle = 'red';
  ctx.fillText('Вы', 110, 75);
  ctx.fillRect(160, 60, 430, 20);

  ctx.fillStyle = '#000';
  ctx.fillText('Иван', 110, 105);
  ctx.fillRect(160, 90, 430, 20);

  ctx.fillStyle = '#f2f2f2';
  ctx.fillText('Юлия', 110, 135);
  ctx.fillRect(160, 120, 430, 20);

  ctx.fillStyle = '#f2f2f2';
  ctx.fillText('Юлия', 110, 135);
  ctx.fillRect(160, 120, 430, 20);
};

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
