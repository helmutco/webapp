(function() {
  'use strict';

  angular
    .module('helmut')
    .controller('LandingController', LandingController);

  /** @ngInject */
  function LandingController($scope, $location, $anchorScroll) {
    $scope.gotoAbout = function() {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('about');

      // call $anchorScroll()
      $anchorScroll();
    };
  }
})();