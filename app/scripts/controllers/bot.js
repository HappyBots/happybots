'use strict';

/**
 * @ngdoc function
 * @name happybotsApp.controller:BotCtrl
 * @description
 * # BotCtrl
 * Controller of the happybotsApp
 */
angular.module('happybotsApp')
  .controller('BotCtrl', ['$scope', '$routeParams', '$location', 'botsData', function ($scope, $routeParams, $location, botsData) {

    var botName = $routeParams.name;
    $scope.Bot = botsData[botName];

    // Redirect if no bot found
    if(angular.isUndefined(botsData[botName])) {
      $location.path('/')
    }

  }]);
