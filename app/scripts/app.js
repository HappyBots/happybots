


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
      .when('/bot/wip', {
        templateUrl: 'views/wip.html',
        controller: 'WipCtrl',
        controllerAs: 'wip'
      })
      .when('/bot/:name', {
        templateUrl: 'views/bot.html',
        controller: 'BotCtrl',
        controllerAs: 'bot'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/about'
      });
  });
