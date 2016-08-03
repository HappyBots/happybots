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
      githubUrl: "https://github.com/HappyBots/Alex-wikiMessenger",
      class: "dark",
    },
    "sam" : {
      name: "Sam",
      id: "sam",
      description: "A Pokémon bot for messenger to help you win in Pokémon GO",
      imageSrc:"images/sam.png",
      imageBgSrc:"images/samBg.jpg",
      icoSrc:"images/samico.png",
      messengerUrl: "http://m.me/sam.pokemessenger",
      githubUrl: "https://github.com/HappyBots/Sam-pokeMessenger",
      class: "white-shadow",
    },
  });
