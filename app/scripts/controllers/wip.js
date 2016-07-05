'use strict';

/**
 * @ngdoc function
 * @name happybotsApp.controller:WipCtrl
 * @description
 * # WipCtrl
 * Controller of the happybotsApp
 */
angular.module('happybotsApp')
  .controller('WipCtrl', ['$scope', function ($scope) {

  	$scope.feature = "Image Face Recognition";
  	$scope.newBotName = "Eeve";

  }]);
