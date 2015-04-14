'use strict';

/**
 * @ngdoc function
 * @name projetCvApp.controller:RefCtrl
 * @description
 * # RefCtrl
 * Controller of the projetCvApp
 */
angular.module('projetCvApp')
	.controller('RefCtrl', function ($http, $scope) {
  		$http.get("assets/ref.json")
  			.success(function(data) {
  		$scope.ref = data.ref;
  		})
  		.error(function(error) {
            console.log(error);
    	});
	});