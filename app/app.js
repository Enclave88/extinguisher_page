'use strict';

angular.module('modalTest',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
  .controller('dialogTestCtrl',function($scope, $interval){

    $interval(function () {
      $scope.now = new Date().toLocaleString('ru-RU');
    });

    $scope.myDate = new Date();

    $scope.chooseYourDestiny = function () {
      debugger;
      var countDays = Math.floor(new Date() / 1000 / 60 / 60 / 24 / 365.25);
      var countDays2 = Math.floor(this.myDate / 1000 / 60 / 60 / 24 / 365.25);
      var da = countDays - countDays2;
      if (da > 2) {
        alert('Another word!');
      }
    }
  });
