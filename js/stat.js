'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var INDENT_X = 40;
var INDENT_Y = 240;
var GAP = 10;
var GAP_PLAYERS = 90;
var FONT_GAP = 20;
var BAR_HEIGHT = -150;
var BAR_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px  PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + i * 25 + '%, 50%)';
    }
    ctx.fillRect(CLOUD_X + INDENT_X + GAP_PLAYERS * i, CLOUD_Y + INDENT_Y, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + INDENT_X + GAP_PLAYERS * i, CLOUD_Y + INDENT_Y + FONT_GAP);
    ctx.fillText(Math.ceil(times[i]), CLOUD_X + INDENT_X + GAP_PLAYERS * i, CLOUD_Y + INDENT_Y + FONT_GAP - 30 + (BAR_HEIGHT * times[i]) / maxTime);
  }
};

