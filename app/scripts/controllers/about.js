'use strict';

/**
 * @ngdoc function
 * @name projetCvApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the projetCvApp
 */
angular.module('projetCvApp')
	.controller('AboutCtrl', function ($http, $scope) {
  		$http.get("assets/about.json")
  			.success(function(data) {
  		$scope.about = data.abouts;
  		})
  		.error(function(error) {
            console.log(error);
    	});
	});