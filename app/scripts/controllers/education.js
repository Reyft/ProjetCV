'use strict';

/**
 * @ngdoc function
 * @name projetCvApp.controller:EducationCtrl
 * @description
 * # EducationCtrl
 * Controller of the projetCvApp
 */
angular.module('projetCvApp')
  .controller('EducationCtrl', function ($scope, $http) {
      $http.get("assets/education.json")
      .success(function(data) {
        $scope.education = data;
      })
      .error(function(error) {
            console.log(error);
      });
  });
