'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAME = ['да Марья Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandom = function (data) {
  var rand = Math.floor(Math.random() * data.length);
  return data[rand];
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var userDialog2 = document.querySelector('.setup-similar');
userDialog2.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = getRandom(WIZARD_NAMES) + ' ' + getRandom(SURNAME);
  wizardElement.querySelector('.wizard-coat').style.fill = getRandom(coatColor);
  wizardElement.querySelector('.wizard-eyes').style.fill = getRandom(eyesColor);

  similarListElement.appendChild(wizardElement);
}
