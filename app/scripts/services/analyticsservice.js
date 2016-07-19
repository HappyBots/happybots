'use strict';

/**
 * @ngdoc service
 * @name happybotsApp.analyticsService
 * @description
 * # analyticsService
 * Service in the happybotsApp.
 */
angular.module('happybotsApp')
  .service('analyticsService', function () {
    this.recordPageview = function(url) {
      ga('set', 'page', url);
      ga('send', 'pageview');
    };
  });
