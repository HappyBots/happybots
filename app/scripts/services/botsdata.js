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
      imageBgSrc:"images/alexBg.jpg",
      icoSrc:"images/alexIco.jpg",
      messengerUrl: "https://m.me/1753699528246555",
      githubUrl: "https://github.com/patriciamayo/wikiMessenger"
    }
  });
