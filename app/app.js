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

      //switch(summary) {
      //  case summary > 5:
      //    alert('Пора перезаряжать!');
      //    break;
      //  case summary >= 5 && this.extinguisher.type === 'carbon_dioxide':
      //    alert('Пора перезаряжать и проверить целостность раструба');
      //    break;
      //  case summary >= 5 && this.extinguisher.type === 'powder':
      //    alert('Пора перезаряжать и проверить целостность шланга и манометра');
      //    break;
      //  case summary >= 2 && this.extinguisher.weight === true:
      //    alert('Автомобильный. Пора перезаряжать');
      //    break;
      //  case summary >= 1:
      //    alert('Время освидетельствования');
      //    break;
      //  default:
      //    alert('Всё в порядке');
      //    break;
      //}

      if (summary >= 2 && this.extinguisher.weight === true) {
        alert('Автомобильный. Пора перезаряжать');
      } else if (summary >= 5 && this.extinguisher.type === 'carbon_dioxide') {
        alert('Пора перезаряжать и проверить целостность раструба')
      } else if (summary >= 5 && this.extinguisher.type === 'powder') {
        alert('Пора перезаряжать и проверить целостность шланга и манометра');
      } else if (summary > 5) {
        alert('Пора перезаряжать!');
      } else if (summary >= 1 ) {
        alert('Время освидетельствования');
      } else if (summary < 1) {
        alert('Всё в порядке');
      }

      //                                                                                                                                                          $scope.extinguisher.type = null;
    };

  });
