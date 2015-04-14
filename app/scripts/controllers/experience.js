'use strict';

/**
 * @ngdoc function
 * @name projetCvApp.controller:EducationCtrl
 * @description
 * # ExpeCtrl
 * Controller of the projetCvApp
 */
angular.module('projetCvApp')
  .controller('ExpeCtrl', function ($scope, $http) {
      $http.get("assets/experience.json")
      .success(function(data) {
        $scope.expe = data.expe;
      })
      .error(function(error) {
            console.log(error);
      });
  });