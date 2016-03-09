;'use strict';

angular.module('modalTest', ['ngRoute', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
  .controller('dialogTestCtrl', function($scope, $interval){

    $scope.extinguisher = {
      type: ['powder', 'carbon_dioxide'],
      weight: false
    };

    $interval(function () {
      $scope.now = new Date().toLocaleString('ru-RU');
    });

    $scope.myDate = new Date();

    $scope.chooseYourDestiny = function () {
      debugger;
      var dayZero = Math.round(new Date() / 1000 / 60 / 60 / 24 / 365.25);
      var beginCount = Math.round(this.myDate / 1000 / 60 / 60 / 24 / 365.25);
      var summary = (dayZero - beginCount);
      if (summary > 2) {
        alert('Пора перезаряжать!');
      } else if (summary > 2 && this.extinguisher.type === 'carbon_dioxide') {
        alert('Пора перезаряжать и проверить целостность раструба')
      } else if (summary >= 1 && this.extinguisher.type === 'powder') {
        alert('Время освидетельствования');
      } else if (summary >= 1 ) {
        alert('Автомобильный');
      } else if (summary < 1) {
        alert('Всё в порядке');
      }
    }
  });
