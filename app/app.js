'use strict';

angular.module('modalTest', ['ngRoute', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
  .controller('dialogTestCtrl',function($scope, $interval){

    $interval(function () {
      $scope.now = new Date().toLocaleString('ru-RU');
    });

    $scope.myDate = new Date();

    $scope.chooseYourDestiny = function () {
      debugger;
      var dayZero = Math.round(new Date() / 1000 / 60 / 60 / 24 / 365.25);
      var beginCount = Math.round(this.myDate / 1000 / 60 / 60 / 24 / 365.25);
      var summary = (dayZero - beginCount);
      if (summary >= 2) {
        alert('Пора перезаряжать!');
      } else if (summary >= 1) {
          alert('Время освидетельствования');
      } else if (summary < 1) {
          alert('Всё в порядке');
      }
    }
  });
