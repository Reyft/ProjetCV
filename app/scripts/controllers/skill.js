'use strict';

/**
 * @ngdoc function
 * @name projetCvApp.controller:SkillCtrl
 * @description
 * # SkillCtrl
 * Controller of the projetCvApp
 */
angular.module('projetCvApp')
	.controller('SkillCtrl', function ($http, $scope) {
  		$http.get("assets/skill.json")
  			.success(function(data) {
  		$scope.skill = data.skills;
  		})
  		.error(function(error) {
            console.log(error);
    	});
	});