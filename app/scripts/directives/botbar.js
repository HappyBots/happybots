'use strict';

/**
 * @ngdoc directive
 * @name happybotsApp.directive:botBar
 * @description
 * # botBar
 */
angular.module('happybotsApp')
  .directive('botBar', ['botsData', function (botsData) {
    return {
      templateUrl: 'views/shared/botbar.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.Bots = botsData;
      }
    };
  }]);
