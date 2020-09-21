const CLOUD_WIDTH = 500;
const CLOUD_HEIGHT = 200;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x,y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

window.renderStatistics = function (ctx) {
  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 50, 500, 200);
}
