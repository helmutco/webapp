(function() {
  'use strict';

  angular
    .module('helmut')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/landing/landing.html',
        controller: 'LandingController',
        controllerAs: 'landing'
      })
      .state('criteres', {
        url: '/criteres',
        templateUrl: 'app/criteres/criteres.html',
        controller: 'CriteresController',
        controllerAs: 'criteres'
      })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
