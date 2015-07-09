(function() {
  'use strict';

  angular
    .module('helmut')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController($scope, $modal, Facebook) {

    /**
     * Watch for Facebook to be ready.
     * There's also the event that could be used
     */
    $scope.$watch(
      function() {
        return Facebook.isReady();
      },
      function(newVal) {
        if (newVal)
          $scope.facebookReady = true;
      }
    );

    // Define user empty data :/
      $scope.user = {};
      
      // Defining user logged status
      $scope.logged = false;

    // var userIsConnected = false;
      
    // Facebook.getLoginStatus(function(response) {
    //   console.log(response);
    //   if (response.status == 'connected') {
    //     // userIsConnected = true;
    //     $scope.logged = true;
    //   }
    // });
    
    // /**
    //  * IntentLogin
    //  */
    // $scope.IntentLogin = function() {
    //   if(!userIsConnected) {
    //     $scope.login();
    //   }
    // };
    
    /**
     * Login
     */
     $scope.login = function() {
       Facebook.login(function(response) {
        if (response.status == 'connected') {
          $scope.logged = true;
        }
      
      });
     };

     /**
       * Logout
       */
      // $scope.logout = function() {
      //   Facebook.logout(function() {
      //     $scope.$apply(function() {
      //       $scope.user   = {};
      //       $scope.logged = false;  
      //     });
      //   });
      // }
     
     /**
      * me 
      */
      $scope.me = function() {
        Facebook.api('/me', function(response) {
          /**
           * Using $scope.$apply since this happens outside angular framework.
           */
          $scope.$apply(function() {
            console.log(response);
            $scope.user = response;
            $scope.user.profilepic = 'https://graph.facebook.com/' + response.id + '/picture?type=large';
          });
          
        });
      };

      /**
       * Taking approach of Events :D
       */
      $scope.$on('Facebook:statusChange', function(ev, data) {
        console.log('Status: ', data);
        if (data.status == 'connected') {
          $scope.$apply(function() {
            $scope.logged = true;
            $scope.me();
          });
        } else {
          $scope.$apply(function() {
            $scope.logged = false;
          });
        }
        
        
      });

    var myOtherModal = $modal({
      scope: $scope, 
      template: 'app/components/modal/modal.html', 
      show: false
    });
    // Show when some event occurs (use $promise property to ensure the template has been loaded)
    $scope.showModal = function() {
      myOtherModal.$promise.then(myOtherModal.show);
    };
  }
})();
