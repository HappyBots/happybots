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
      id: "alex",
      description: "A Wikipedia bot for messenger",
      imageSrc:"images/alex.png",
      imageBgSrc:"images/alexBg5.jpg",
      icoSrc:"images/alexIcoNoBorder.png",
      messengerUrl: "https://m.me/1753699528246555",
      githubUrl: "https://github.com/patriciamayo/wikiMessenger"
    },
  });
