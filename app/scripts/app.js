'use strict';

/**
 * @ngdoc overview
 * @name projetCvApp
 * @description
 * # projetCvApp
 *
 * Main module of the application.
 */
angular
  .module('projetCvApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/profil.html',
        controller: 'ProfilCtrl'
      })
      .when('/education', {
        templateUrl: 'views/formation.html',
        controller: 'EducationCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/experience', {
        templateUrl: 'views/experience.html',
        controller: 'ExpeCtrl'
      })
      .when('/reference', {
        templateUrl: 'views/ref.html',
        controller: 'RefCtrl'
      })
      .when('/connaissance', {
        templateUrl: 'views/skills.html',
        controller: 'SkillCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
