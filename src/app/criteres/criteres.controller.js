(function() {
  'use strict';

  angular
  .module('helmut')
  .controller('CriteresController', CriteresController);

  /** @ngInject */
  function CriteresController($scope, $cookies, $state) {

   $scope.categories = [
     {value:'citadine', label:'une citadine'},
     {value:'sportive', label:'une sportive'},
     {value:'break', label:'un break'},
     {value:'4x4', label:'un 4x4'},
     {value:'berline', label:'une berline'},
     {value:'coupe', label:'une coupé'},
     {value:'cabriolet', label:'un cabriolet'}
   ];

   $scope.answers = {
    categorie: 'citadine',
    city: '',
    prixmin: '10 000',
    prixmax: '100 000',
    kilometrage: '50 000'
  };

  $scope.subline = "Par exemple: <em>Los Angeles</em> or <em>New York</em>";

  $scope.submit = function() {
    if ($scope.answers) {
          // Setting the cookie
          $cookies.params = $scope.answers;
          $state.go('dashboard'); // go to dashboard
        }
      };
  
  

}
})();
