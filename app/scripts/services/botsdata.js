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
      messengerUrl: "http://m.me/alex.wikimessenger",
      githubUrl: "https://github.com/patriciamayo/Alex-wikiMessenger"
    },
  });
