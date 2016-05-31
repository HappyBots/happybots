'use strict';

/**
 * @ngdoc function
 * @name happybotsApp.controller:BotCtrl
 * @description
 * # BotCtrl
 * Controller of the happybotsApp
 */
angular.module('happybotsApp')
  .controller('BotCtrl', ['$scope', '$routeParams', 'botsData', function ($scope, $routeParams, botsData) {

    var botName = $routeParams.name;
    $scope.bot = botsData;

  }]);
