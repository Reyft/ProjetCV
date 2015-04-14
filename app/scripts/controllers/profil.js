'use strict';

/**
 * @ngdoc function
 * @name projetCvApp.controller:EducationCtrl
 * @description
 * # EducationCtrl
 * Controller of the projetCvApp
 */
angular.module('projetCvApp')
  .controller('ProfilCtrl', function ($scope, $http) {
      $http.get("assets/description.json")
      .success(function(data) {
        $scope.profil = data.profil;
      })
      .error(function(error) {
            console.log(error);
      });
  });