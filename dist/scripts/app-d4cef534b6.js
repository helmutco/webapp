!function(){"use strict";angular.module("helmut",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router","mgcrea.ngStrap","vr.directives.nlForm","facebook"])}(),function(){"use strict";function e(){function e(e){var i=this;i.relativeDate=e(i.creationDate).fromNow()}var i={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return e.$inject=["moment"],i}angular.module("helmut").directive("acmeNavbar",e)}(),function(){"use strict";function e(){function e(){return i}var i=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular Strap",url:"http://mgcrea.github.io/angular-strap/",description:"AngularJS 1.2+ native directives for Bootstrap 3.",logo:"angular-strap.png"},{title:"Less",url:"http://lesscss.org/",description:"Less extends the CSS language, adding features that allow variables, mixins, functions and many other techniques.",logo:"less.png"}];this.getTec=e}angular.module("helmut").service("webDevTec",e)}(),function(){"use strict";function e(e){function i(i,s,a,t){var n,l=e(s[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});s.addClass("acme-malarkey"),angular.forEach(i.extraValues,function(e){l.type(e).pause()["delete"]()}),n=i.$watch("vm.contributors",function(){angular.forEach(t.contributors,function(e){l.type(e.login).pause()["delete"]()})}),i.$on("$destroy",function(){n()})}function s(e,i){function s(){return a().then(function(){e.info("Activated Contributors View")})}function a(){return i.getContributors(10).then(function(e){return t.contributors=e,t.contributors})}var t=this;t.contributors=[],s()}var a={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:i,controller:s,controllerAs:"vm"};return s.$inject=["$log","githubContributor"],a}angular.module("helmut").directive("acmeMalarkey",e),e.$inject=["malarkey"]}(),function(){"use strict";function e(e,i){function s(s){function t(e){return e.data}function n(i){e.error("XHR Failed for getContributors.\n"+angular.toJson(i.data,!0))}return s||(s=30),i.get(a+"/contributors?per_page="+s).then(t)["catch"](n)}var a="https://api.github.com/repos/Swiip/generator-gulp-angular",t={apiHost:a,getContributors:s};return t}angular.module("helmut").factory("githubContributor",e),e.$inject=["$log","$http"]}(),function(){"use strict";function e(e,i){function s(){a(),e(function(){t.classAnimation="rubberBand"},4e3)}function a(){t.awesomeThings=i.getTec(),angular.forEach(t.awesomeThings,function(e){e.rank=Math.random()})}var t=this;t.awesomeThings=[],t.classAnimation="",t.creationDate=1435673537578,s()}angular.module("helmut").controller("MainController",e),e.$inject=["$timeout","webDevTec"]}(),function(){"use strict";function e(e,i,s){e.gotoAbout=function(){i.hash("about"),s()}}angular.module("helmut").controller("LandingController",e),e.$inject=["$scope","$location","$anchorScroll"]}(),function(){"use strict";function e(e,i,s){e.$watch(function(){return s.isReady()},function(i){i&&(e.facebookReady=!0)}),e.user={},e.logged=!1,e.login=function(){s.login(function(i){"connected"==i.status&&(e.logged=!0)})},e.me=function(){s.api("/me",function(i){e.$apply(function(){console.log(i),e.user=i,e.user.profilepic="https://graph.facebook.com/"+i.id+"/picture?type=large"})})},e.$on("Facebook:statusChange",function(i,s){console.log("Status: ",s),e.$apply("connected"==s.status?function(){e.logged=!0,e.me()}:function(){e.logged=!1})});var a=i({scope:e,template:"app/components/modal/modal.html",show:!1});e.showModal=function(){a.$promise.then(a.show)}}angular.module("helmut").controller("DashboardController",e),e.$inject=["$scope","$modal","Facebook"]}(),function(){"use strict";function e(e,i,s){e.categories=[{value:"citadine",label:"une citadine"},{value:"sportive",label:"une sportive"},{value:"break",label:"un break"},{value:"4x4",label:"un 4x4"},{value:"berline",label:"une berline"},{value:"coupe",label:"une coupé"},{value:"cabriolet",label:"un cabriolet"}],e.answers={categorie:"citadine",city:"",prixmin:"10 000",prixmax:"100 000",kilometrage:"50 000"},e.subline="Par exemple: <em>Los Angeles</em> or <em>New York</em>",e.submit=function(){e.answers&&(i.params=e.answers,s.go("dashboard"))}}angular.module("helmut").controller("CriteresController",e),e.$inject=["$scope","$cookies","$state"]}(),function(){"use strict";function e(e,i){e.state("home",{url:"/",templateUrl:"app/landing/landing.html",controller:"LandingController",controllerAs:"landing"}).state("criteres",{url:"/criteres",templateUrl:"app/criteres/criteres.html",controller:"CriteresController",controllerAs:"criteres"}).state("dashboard",{url:"/dashboard",templateUrl:"app/dashboard/dashboard.html",controller:"DashboardController",controllerAs:"dashboard"}),i.otherwise("/")}angular.module("helmut").config(e),e.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("helmut").constant("moment",moment)}(),function(){"use strict";function e(e,i){var s="389313394581663";i.init(s),e.debugEnabled(!0)}angular.module("helmut").config(e),e.$inject=["$logProvider","FacebookProvider"]}(),angular.module("helmut").run(["$templateCache",function(e){e.put("app/criteres/criteres.html",'<section class="test"><div class="col-md-12"><div class="main cleartestfix"><form id="nl-form" class="nl-form" ng-submit="submit()">Je cherche<nl-select value="answers.categorie" options="categories" multiple="ou" none="pas" all="une voiture"></nl-select><br>près de<nl-text value="answers.city" placeholder="toute ville" subline="{{ subline }}" name="city"></nl-text>entre<nl-text value="answers.prixmin" placeholder="10 000" subline="{{ subline }}" name="prixmin"></nl-text>€ et<nl-text value="answers.prixmax" placeholder="100 000" subline="{{ subline }}" name="prixmax"></nl-text>€ et<nl-text value="answers.kilometrage" placeholder="50 000" subline="{{ subline }}" name="kilometrage"></nl-text>kms maximum.<div class="nl-submit-wrap"><button class="nl-submit" type="submit">Trouver ma voiture</button></div></form></div></div></section>'),e.put("app/dashboard/dashboard.html",'<header class="navbar navbar-fixed-top"><div class="container"><div class="col-md-6 col-xs-6 text-left"><a href="index.html"><img src="assets/images/logo_small.png"></a></div><div ng-show="!logged" class="col-md-6 col-xs-6 text-right"><a ng-click="showModal()"><span>Créer mon compte</span></a></div><div ng-show="logged" class="col-md-6 col-xs-6 text-right"><span>{{user.name}}</span> <img width="30px" style="border-radius:20px" src="{{user.profilepic}}"></div></div></header><section class="sub-menu"><div class="container"><div class="sub-menu"><div class="col-md-8 col-xs-6 text-left"><h1>Ton dashboard</h1></div></div></div></section><section class="results" id="login"><div class="container"><div ng-show="!logged" class="subscriber-banner"><div class="row"><div class="subscriber-content col-md-8 col-xs-12 text-left"><p>Accède à toutes les fonctionnalités de recherches en créant ton compte sur Helmut.<strong>GRATUITEMENT</strong>.</p></div><div class="col-md-4 col-xs-12 text-right"><a class="join-btn" ng-click="showModal()">Créer mon compte</a></div></div></div></div><div class="container"><div class="row"><div class="offres"><div class="col-xs-12 col-md-4"><a ng-click="showModal()" class="thumbnail"><img src="assets/images/01.jpg" alt="..."><ul class="list-unstyled"><li><h2 id="Titre">BMW Serie 3</h2></li><li><span class="Price" id="Price">20.000 Euros</span></li><li><p id="Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed sapien quam. Sed dapibus est id enim facilisis, at posuere turpis adipiscing. Quisque sit amet dui dui.</p></li></ul></a></div><div class="col-xs-12 col-md-4"><a ng-click="showModal()" class="thumbnail"><img src="assets/images/01.jpg" alt="..."><ul class="list-unstyled"><li><h2 id="Titre">BMW Serie 3</h2></li><li><span class="Price" id="Price">20.000 Euros</span></li><li><p id="Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed sapien quam. Sed dapibus est id enim facilisis, at posuere turpis adipiscing. Quisque sit amet dui dui.</p></li></ul></a></div><div class="col-xs-12 col-md-4"><a ng-click="showModal()" class="thumbnail"><img src="assets/images/01.jpg" alt="..."><ul class="list-unstyled"><li><h2 id="Titre">BMW Serie 3</h2></li><li><span class="Price" id="Price">20.000 Euros</span></li><li><p id="Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed sapien quam. Sed dapibus est id enim facilisis, at posuere turpis adipiscing. Quisque sit amet dui dui.</p></li></ul></a></div></div></div></div><div class="container"><div class="row"><div class="offres"><div class="col-xs-12 col-md-4"><a ng-click="showModal()" class="thumbnail"><img src="assets/images/01.jpg" alt="..."><ul class="list-unstyled"><li><h2 id="Titre">BMW Serie 3</h2></li><li><span class="Price" id="Price">20.000 Euros</span></li><li><p id="Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed sapien quam. Sed dapibus est id enim facilisis, at posuere turpis adipiscing. Quisque sit amet dui dui.</p></li></ul></a></div><div class="col-xs-12 col-md-4"><a ng-click="showModal()" class="thumbnail"><img src="assets/images/01.jpg" alt="..."><ul class="list-unstyled"><li><h2 id="Titre">BMW Serie 3</h2></li><li><span class="Price" id="Price">20.000 Euros</span></li><li><p id="Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed sapien quam. Sed dapibus est id enim facilisis, at posuere turpis adipiscing. Quisque sit amet dui dui.</p></li></ul></a></div><div class="col-xs-12 col-md-4"><a ng-click="showModal()" class="thumbnail"><img src="assets/images/01.jpg" alt="..."><ul class="list-unstyled"><li><h2 id="Titre">BMW Serie 3</h2></li><li><span class="Price" id="Price">20.000 Euros</span></li><li><p id="Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed sapien quam. Sed dapibus est id enim facilisis, at posuere turpis adipiscing. Quisque sit amet dui dui.</p></li></ul></a></div></div></div></div><div class="container"><div class="row"><div class="offres"><div class="col-xs-12 col-md-4"><a ng-click="showModal()" class="thumbnail"><img src="assets/images/01.jpg" alt="..."><ul class="list-unstyled"><li><h2 id="Titre">BMW Serie 3</h2></li><li><span class="Price" id="Price">20.000 Euros</span></li><li><p id="Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed sapien quam. Sed dapibus est id enim facilisis, at posuere turpis adipiscing. Quisque sit amet dui dui.</p></li></ul></a></div><div class="col-xs-12 col-md-4"><a ng-click="showModal()" class="thumbnail"><img src="assets/images/01.jpg" alt="..."><ul class="list-unstyled"><li><h2 id="Titre">BMW Serie 3</h2></li><li><span class="Price" id="Price">20.000 Euros</span></li><li><p id="Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed sapien quam. Sed dapibus est id enim facilisis, at posuere turpis adipiscing. Quisque sit amet dui dui.</p></li></ul></a></div><div class="col-xs-12 col-md-4"><a ng-click="showModal()" class="thumbnail"><img src="assets/images/01.jpg" alt="..."><ul class="list-unstyled"><li><h2 id="Titre">BMW Serie 3</h2></li><li><span class="Price" id="Price">20.000 Euros</span></li><li><p id="Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed sapien quam. Sed dapibus est id enim facilisis, at posuere turpis adipiscing. Quisque sit amet dui dui.</p></li></ul></a></div></div></div><div class="pagination col-md-12 col-xs-12 text-center" id="pagination"><nav><ul class="pagination"><li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li><li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li><li class="inactive"><a href="#">2 <span class="sr-only">(current)</span></a></li><li class="inactive"><a href="#">3 <span class="sr-only">(current)</span></a></li><li class="inactive"><a href="#">4 <span class="sr-only">(current)</span></a></li><li><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li></ul></nav></div></div></section><footer class="footer"><div class="col-md-12 text-center"><img src="assets/images/logo-black.png"><p>Ta perle rare à portée de click</p><img src="assets/images/love.png" style="margin-right:5px"><span><strong>Made in Munich</strong></span><p>© Helmut SA 2015 - Tous droits réservés</p></div></footer><div class="modal fade" id="connexion" role="dialog"><div class="modal-dialog"><div class="modal-content col-md-12 text-center"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button></div><div class="modal-body"><img src="assets/images/bientot.png"><p>En créant un compte sur Helmut, accède à toutes les fonctionnalités de recherche de voitures.<br><br>SIMPLE et COLLABORATIF.</p><div class="facebookconnect"><fb:login-button scope="public_profile,email" onlogin="checkLoginState()">Se connecter avec Facebook</fb:login-button><br><br><div id="status"></div></div><span><strong>Gratuit</strong>.</span></div></div></div></div>'),e.put("app/landing/landing.html",'<section class="hero"><div class="layer"></div><div class="header"><div class="container"><div class="row"><div class="col-md-4 col-xs-4 text-left"><a href="index.html"><img src="assets/images/logo-white.png"></a></div><div class="col-md-8 col-xs-8 text-right"><a class="connect navbar-btn" href="dashboard.html">Se connecter</a> <a class="download-btn" data-toggle="modal" href="#vente">Vend ta voiture</a></div></div></div></div><div class="hero-content"><div class="col-md-12 text-center"><h1>Re-découvre le plaisir de chercher</h1><h2>Helmut te permet de trouver le véhicule qui te correspond instantanément parmi une large gamme garantie.</h2><a ng-href="#criteres" style="margin-top:90px!Important" onclick="_gaq.push([\'_trackEvent\', \'Trouver\', \'TrouverTop\'])" class="use-btn">Trouve ta voiture</a><br><a ng-click="gotoAbout()" onclick="_gaq.push([\'_trackEvent\', \'Trouver\', \'TrouverTop\'])" class="learn-btn">Découvrir Helmut</a></div></div></section><section class="explain" id="about"><div class="container"><div class="row"><div class="headline"><span>La recherche de voiture RÉ-INVENTÉE</span></div><div class="col-md-4 col-xs-6 feature text-center"><img src="assets/images/search.png" class="feature-icon"><div class="feature-content"><h2>Personalisée</h2><p>Avec 4 paramêtres, tu définis ton profil de chercheur. Enrichi le au fur et a mesure afin d\'afficher uniquement les offres qui te correspondent.</p></div></div><div class="col-md-4 col-xs-6 feature text-center"><img src="assets/images/marques.png" class="feature-icon"><div class="feature-content"><h2>Multi-marques</h2><p>Avec 4 paramêtres, tu définis ton profil de chercheur. Enrichi le au fur et a mesure afin d\'afficher uniquement les offres qui te correspondent.</p></div></div><div class="col-md-4 col-xs-6 feature text-center"><img src="assets/images/computer.png" class="feature-icon"><div class="feature-content"><h2>En toute confiance</h2><p>Avec 4 paramêtres, tu définis ton profil de chercheur. Enrichi le au fur et a mesure afin d\'afficher uniquement les offres qui te correspondent.</p></div></div><div class="col-md-12 text-center"><a ng-href="#criteres" class="use-btn">Trouve ta voiture</a></div></div></div></section><section class="random"><div class="container"><div class="row"><div class="col-md-12 col-xs-12 text-center"><div class="sentence"><span>Je cherche <span class="underline">une citadine</span>, près de <span class="underline">Munich</span>, entre <span class="underline">10.000 €</span> et <span class="underline">22.000 €</span><br>avec un maximum de <span class="underline">60.000 kms</span>.</span></div></div><div class="col-md-12 text-center"><div class="button"><a style="cursor:pointer;" onclick="_gaq.push([\'_trackEvent\', \'NouveauStyle\', \'ChangerStyle\'])" class="shuffle-btn">Changer de style</a> <a ng-href="#criteres" class="use-btn">Trouve ta voiture</a></div></div></div></div></section><section class="benefits" id="benefits" display="none"><div class="container"><div class="row"><div class="col-md-4 col-sm-12 col-xs-12 text-left"><span>Une expérience inédite</span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed sapien quam. Sed dapibus est id enim facilisis, at posuere turpis adipiscing. Quisque sit amet dui dui. Duis rhoncus velit nec est condimentum feugiat. Donec aliquam augue nec gravida lobortis. Nunc arcu mi, pretium quis dolor id, iaculis euismod ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div><div class="col-md-8 col-sm-12 col-xs-12 text-center"><img class="image"></div></div></div></section><section class="histoire" id="histoire"><div class="container"><div class="row"><div class="col-md-12 text-center"><p>"Sur Helmut, j\'ai enfin pu trouver la voiture que je cherchais depuis longtemps. Avant, je cherchais sur Le Bon Coin ou sur Ebay, mais jamais je n\'aurai pu trouver ma voiture avec autant de facilité."</p><span><strong>Jean Dusapin,</strong> a trouvé une Audi A3 avec Helmut.</span></div><div class="col-md-12 text-center"><a ng-href="#criteres" style="margin-top:40px" class="use-btn">Trouve ta voiture</a></div></div></div></section><footer class="footer"><div class="col-md-12 text-center"><img src="assets/images/logo-black.png"><p>Ta perle rare à portée de click</p><img src="assets/images/love.png" style="margin-right:5px"><span><strong>Made in Munich</strong></span><p>© Helmut SA 2015 - Tous droits réservés</p></div></footer><div class="modal fade" id="vente" role="dialog"><div class="modal-dialog"><div class="modal-content col-md-12 text-center"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button></div><div class="modal-body col-md-12 text-center"><img src="assets/images/bientot.png"><p style="color:#AD0B06; font-size:14px">Bientôt disponible !</p><p>Nous travaillons dur afin de te permettre de vendre ta perle rare à celui ou celle qui le mérite. En attendant, laisse ton adresse email et nous te tiendrons au courant.</p><input type="text" class="form" autofocus="autofocus" placeholder="thomas@mail.com"><br><br><a href="#" type="submit" class="download-btn" data-dismiss="modal">Me tenir au courant</a><br><br></div></div></div></div>'),e.put("app/main/main.html",'<div class="container"><div><acme-navbar creationdate="main.creationDate"></acme-navbar></div><div class="jumbotron text-center"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><button type="button" class="btn btn-lg btn-success" ng-click="main.showToastr()">Splendid Toastr</button></p><p>With ♥ thanks to the contributions of</p></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{awesomeThing.url}}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),e.put("app/components/modal/modal.html",'<div class="modal fade in" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content col-md-12 text-center"><div class="modal-header"><button type="button" class="close" aria-label="Close" ng-click="$hide()">x</button></div><div class="modal-body"><img src="assets/images/bientot.png"> <button type="button" class="btn btn-primary btn-large" ng-show="!logged" ng-disabled="!facebookReady" ng-click="login()">Login with Facebook</button><p>En créant un compte sur Helmut, accède à toutes les fonctionnalités de recherche de voitures.<br><br>SIMPLE et COLLABORATIF.</p><div ng-show="logged" id="status">Thanks for logging in, {{user.name}}!</div></div></div></div></div>'),e.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>')}]);