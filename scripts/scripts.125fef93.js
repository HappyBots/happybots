"use strict";angular.module("happybotsApp",["ngAnimate","ngRoute","ngSanitize","ngTouch","typer"]).config(["$routeProvider",function(a){a.when("/wip",{templateUrl:"views/wip.html",controller:"WipCtrl",controllerAs:"wip"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/:name",{templateUrl:"views/bot.html",controller:"BotCtrl",controllerAs:"bot"}).otherwise({redirectTo:"/alex"})}]).run(["$rootScope","$location","$window",function(a,b,c){a.$on("$stateChangeSuccess",function(a){c.ga&&c.ga("send","pageview",{page:b.path()})})}]),angular.module("happybotsApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("happybotsApp").controller("WipCtrl",["$scope",function(a){a.feature="Image Face Recognition",a.newBotName="Eeve"}]),angular.module("happybotsApp").controller("BotCtrl",["$scope","$routeParams","$location","botsData",function(a,b,c,d){var e=b.name;a.Bot=d[e],angular.isUndefined(d[e])&&c.path("/")}]),angular.module("happybotsApp").value("botsData",{alex:{name:"Alex",id:"alex",description:"A Wikipedia bot for messenger",imageSrc:"images/alex.b524a3da.png",imageBgSrc:"images/alexBg5.e8a0223d.jpg",icoSrc:"images/alexIcoNoBorder.7088a25f.png",messengerUrl:"https://m.me/1753699528246555",githubUrl:"https://github.com/patriciamayo/wikiMessenger"}}),angular.module("happybotsApp").directive("botBar",["botsData",function(a){return{templateUrl:"views/shared/botbar.html",restrict:"E",link:function(b,c,d){b.Bots=a}}}]),angular.module("happybotsApp").run(["$templateCache",function(a){a.put("views/about.html",'<section class="about"> <div class="colored-block white"> <div class="container"> <div class="row"> <img src="images/hbIcoS.e07f8fe2.png" alt="Happy Bots icon" class="img-responsive about-logo"> <div class="col-sm-12 text-block"> <h2>Bip Bip... We are HAPPYBOTS</h2> <p>We develop bots for fun and for companies. <br> We love artificial intelligence and disruptive technologies.</p> </div> </div> <!-- /row --> </div> <!-- /container --> </div> <!-- /white--> <div class="colored-block grey"> <div class="container"> <div class="row"> <div class="col-sm-12"> <div class="text-block"> <h2>Need a Bot?</h2> <p class="text">We build bots with <i class="fa fa-heart love" aria-hidden="true"></i><br><a class="cursor-link" onclick="showDoorbellModal()">Contact us</a> if you need a bot for your company :)</p> </div> </div> <div class="col-sm-6 col-sm-offset-3"> <ng-include src="\'views/shared/newsletter.html\'"></ng-include> </div> </div> <!-- /row --> </div> <!-- /container --> </div> <!-- /white--> <div class="colored-block white team-section"> <div class="container"> <div class="row"> <div class="col-sm-12 text-block"> <h2>Get to know us</h2> </div> <div class="col-sm-3 col-sm-offset-3"> <div class="profile"> <img src="images/sandoche.64c5ad50.jpeg" alt="Sandoche Picture" class="img-circle img-responsive"> <h4> Sandoche <strong>Adittane</strong> </h4> <div class="contact"> <a href="https://www.linkedin.com/in/sandoche" target="_blank"><i class="fa fa-linkedin fa-2x"></i></a> <a href="http://www.sandoche.com" target="_blank"><i class="fa fa-globe fa-2x"></i></a> </div> </div> </div> <div class="col-sm-3 center-col"> <div class="profile"> <img src="images/patricia.4c27a826.jpeg" alt="Patricia Picture" class="img-circle img-responsive"> <h4> Patricia <strong>Mayo Tejedor</strong> </h4> <div class="contact"> <a href="https://www.linkedin.com/in/patriciamayotejedor" target="_blank"><i class="fa fa-linkedin fa-2x"></i></a> </div> </div> </div> </div> </div> </div> <div class="colored-block grey"> <div class="container"> <div class="row"> <div class="col-sm-6 col-sm-offset-3"> <ng-include src="\'views/shared/socialbuttons.html\'" class="parent-center"></ng-include> </div> </div> <!-- /row --> </div> <!-- /container --> </div> <!-- /white--> </section>'),a.put("views/bot.html",'<section class="bot center" style="background: url({{ Bot.imageBgSrc }}) no-repeat center fixed; background-size: cover"> <div class="container"> <div class="row"> <div class="col-sm-5 col-sm-offset-1 vcenter"> <img src="{{ Bot.imageSrc }}" class="img-responsive" alt=""> </div> <div class="col-sm-5 center-col vcenter"> <h1>Hello, <strong><typer words="[\'I\\\'m \' +  Bot.name ]" type-time="50" start-typing="true" repeat="false" backspace-time="200" start-delay="1500"></typer></strong></h1> <h2>{{ Bot.description }}</h2> <a href="{{ messengerUrl }}" class="btn btn-lg btn-primary"><img src="images/messenger.7b545e61.png" class="img-bg"> Message Me</a> <a class="btn btn-lg btn-default" href="{{ githubUrl }}"><i class="fa fa-github fa" aria-hidden="true"></i> Fork on github</a> </div> </div> </div> </section> <bot-bar></bot-bar>'),a.put("views/shared/botbar.html",'<footer> <div class="container botbar"> <div class="row"> <div class="col-xs-12 text-center"> <a ng-repeat="Bot in Bots" href="#/{{ Bot.id }}"><img src="{{ Bot.icoSrc }}" alt="" class="icon-messenger"></a> <a href="#/wip"><img src="images/wipIco3.80b03170.png" alt="" class="icon-messenger"></a> </div> </div> </div> </footer>'),a.put("views/shared/navbar.html",'<nav class="navbar navbar-default navbar-fixed-top"> <div class="container"> <!-- Brand and toggle get grouped for better mobile display --> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a href="#" class="navbar-left"><img src="images/hbIcoWhite.7529bbd0.png" class="logo"></a> <a class="navbar-brand" href="#">HAPPY<strong>BOTS</strong></a> </div> <!-- Collect the nav links, forms, and other content for toggling --> <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"> <ul class="nav navbar-nav navbar-right"> <li><a href="#/about">About</a></li> <li><a class="cursor-link" onclick="showDoorbellModal()">Contact</a></li> <li><a href="https://paypal.me/happybots" target="_blank">Donate</a></li> </ul> </div><!-- /.navbar-collapse --> </div><!-- /.container-fluid --> </nav>'),a.put("views/shared/newsletter.html",'<div id="mc_embed_signup"> <form action="//happybots.us13.list-manage.com/subscribe/post?u=32b1b537458f1141784edada0&amp;id=ac648993a1" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate> <div id="mc_embed_signup_scroll"> <div id="mce-responses" class="clear"> <div class="response" id="mce-error-response" style="display:none"></div> <div class="response" id="mce-success-response" style="display:none"></div> </div> <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> <div style="position: absolute; left: -5000px" aria-hidden="true"><input type="text" name="b_32b1b537458f1141784edada0_ac648993a1" tabindex="-1" value=""></div> </div> <div class="input-group"> <input type="email" value="" name="EMAIL" class="required email form-control" id="mce-EMAIL" placeholder="Give your email to get notified about the next bots"> <span class="input-group-btn"> <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button btn btn-default"> </span> </div><!-- /input-group --> </form> <br> <br> </div> <!-- /embeded sign up -->'),a.put("views/shared/socialbuttons.html",'<div class="social"> <ul class="social-center"> <li><a href="https://www.facebook.com/Happybots-174738206274368" target="_blank"><i class="fa fa-facebook"></i></a></li> <li><a href="http://twitter.com/happy_bots" target="_blank"><i class="fa fa-twitter"></i></a></li> <li><a href="https://plus.google.com/105424786764506995629" target="_blank"><i class="fa fa-google-plus"></i> </a></li> </ul> </div>'),a.put("views/wip.html",'<section class="wip center" style="background: url(images/wipBg2.650241d1.png) no-repeat center fixed; background-size: cover"> <div class="container"> <div class="row"> <div class="col-sm-5 col-sm-offset-1 vcenter"> <img src="images/wip.55ab1558.png" class="img-responsive moving-animation" alt=""> </div> <div class="col-sm-5 center-col vcenter"> <h2>Oh my god! {{ newBotName }} is hatching! It will grow up to be the best {{ feature }} bot!</h2> <div class="text-block"> <p class="text">We build bots with <i class="fa fa-heart love" aria-hidden="true"></i><br><a class="cursor-link" onclick="showDoorbellModal()">Contact us</a> if you need a bot for your company :)</p> </div> <ng-include src="\'views/shared/newsletter.html\'"></ng-include> <ng-include src="\'views/shared/socialbuttons.html\'"></ng-include> </div> </div> </div></section> <bot-bar></bot-bar>')}]);