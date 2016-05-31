'use strict';

/**
 * @ngdoc function
 * @name happybotsApp.controller:BotCtrl
 * @description
 * # BotCtrl
 * Controller of the happybotsApp
 */
angular.module('happybotsApp')
  .controller('BotCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {

    $scope.botName = $routeParams.name;

  }]);
