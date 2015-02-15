(function() {
    'use strict';

    angular.module('webapilabclient')
        .controller('menuController', ['$scope', '$location', 'accountService', function($scope, $location, accountService) {

            accountService.fillAuthData();
            $scope.authentication = accountService.authentication;

            $scope.logOut = function() {
                accountService.logOut();
                $location.path('/account/login');                
            }
        }]);
})();
