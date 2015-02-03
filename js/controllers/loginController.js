'use strict';

angular.module('webapilabclient')
    .controller('loginController', ['$scope', '$location', 'authService', 'uiNotify', function($scope, $location, authService, uiNotify) {

        $scope.loginData = {
            userName: 'Taiseer',
            password: 'SuperPass'
        };

        authService.fillAuthData();
        $scope.authentication = authService.authentication;

        $scope.showLoginModal = function() {
            $('#modal1').openModal();
        };

        $scope.showRegisterModal = function() {
            uiNotify.show('This option is under construction');
        };

        $scope.login = function() {
            authService.login($scope.loginData)
                .then(function(response) {
                        $('#modal1').closeModal();
                    },
                    function(err) {
                        uiNotify.show(err.error_description);
                    });
        };

        $scope.logOut = function() {
            authService.logOut();
        }
    }]);
