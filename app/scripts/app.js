'use strict';

/**
 * @ngdoc overview
 * @name happybotsApp
 * @description
 * # happybotsApp
 *
 * Main module of the application.
 */
angular
  .module('happybotsApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/wip', {
        templateUrl: 'views/wip.html',
        controller: 'WipCtrl',
        controllerAs: 'wip'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/:name', {
        templateUrl: 'views/bot.html',
        controller: 'BotCtrl',
        controllerAs: 'bot'
      })
      .otherwise({
        redirectTo: '/alex'
      });
  });
