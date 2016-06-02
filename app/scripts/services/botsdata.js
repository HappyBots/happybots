'use strict';

/**
 * @ngdoc service
 * @name happybotsApp.botsData
 * @description
 * # botsData
 * Value in the happybotsApp.
 */
angular.module('happybotsApp')
  .value('botsData', {
    "alex" : {
      name: "Alex",
      description: "A Wikipedia bot for messenger",
      imageSrc:"images/alex.png",
      messengerUrl: "blabla"
    }
  });
