(function() {
  'use strict';

  angular
    .module('helmut')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController($scope, $location, $anchorScroll) {
    $scope.gotoModal = function() {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('connexion');

      // call $anchorScroll()
      $anchorScroll();
    };
  }
})();