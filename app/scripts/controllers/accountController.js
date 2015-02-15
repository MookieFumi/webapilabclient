(function() {
    'use strict';

    angular.module('webapilabclient')
        .controller('accountController', ['$scope', '$location', '$timeout', 'accountService', 'uiNotify',
            function($scope, $location, $timeout, accountService, uiNotify) {

                $scope.loginData = {
                    userName: 'MookieFumi',
                    password: 'mookiefumi'
                };

                accountService.fillAuthData();
                $scope.authentication = accountService.authentication;

                $scope.savedSuccessfully = false;
                $scope.messages = [];

                $scope.registration = {
                    userName: "",
                    password: "",
                    confirmPassword: "",
                    name: "",
                    surname: "",
                    email: ""
                };

                $scope.signUp = function() {
                    $scope.messages = [];

                    accountService.saveRegistration($scope.registration).then(function(response) {

                            $scope.savedSuccessfully = true;
                            $scope.messages.push("User has been registered successfully, you will be redicted to login page in 2 seconds.");
                            startTimer();

                        },
                        function(response) {
                            for (var key in response.data.ModelState) {
                                //for (var i = 0; i < response.data.ModelState[key].length; i++) {
                                $scope.messages.push(response.data.ModelState[key][0]);
                                //}
                            }
                        });
                };

                $scope.login = function() {
                    accountService.login($scope.loginData).then(function(response) {
                            $location.path('default');
                        },
                        function(err) {
                            uiNotify.show(err.error_description);
                        });
                };

                var startTimer = function() {
                    var timer = $timeout(function() {
                        $timeout.cancel(timer);
                        $location.path('/account/login');
                    }, 2000);
                }

            }
        ]);

})();
