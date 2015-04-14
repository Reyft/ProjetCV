'use strict';

/**
 * @ngdoc function
 * @name projetCvApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projetCvApp
 */
angular.module('projetCvApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.toto = "hello!";
    $scope.getStatus = function(h) {
    	$scope.totoResult = $scope.toto;
    }
  });
