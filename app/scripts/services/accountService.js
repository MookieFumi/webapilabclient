'use strict';
angular.module('webapilabclient').factory('accountService', ['$http', '$q', 'localStorageService', 'settings', function($http, $q, localStorageService, settings) {

    var accountServiceFactory = {};

    var _authentication = {
        isAuth: false,
        userName: ""
    };

    var _saveRegistration = function(registration) {
        _logOut();

        return $http.post(settings.webapiurl + 'api/account/register', registration).then(function(response) {
            return response;
        });

    };

    var _login = function(loginData) {

        var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();

        $http.post(settings.webapiurl + 'token', data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).success(function(response) {
            localStorageService.set('authorizationData', {
                token: response.access_token,
                userName: loginData.userName
            });

            _authentication.isAuth = true;
            _authentication.userName = loginData.userName;

            deferred.resolve(response);

        }).error(function(err, status) {
            _logOut();
            deferred.reject(err);
        });

        return deferred.promise;

    };

    var _logOut = function() {

        localStorageService.remove('authorizationData');

        _authentication.isAuth = false;
        _authentication.userName = "";

    };

    var _fillAuthData = function() {

        var authData = localStorageService.get('authorizationData');
        if (authData) {
            _authentication.isAuth = true;
            _authentication.userName = authData.userName;
        }

    }

    accountServiceFactory.saveRegistration = _saveRegistration;
    accountServiceFactory.login = _login;
    accountServiceFactory.logOut = _logOut;
    accountServiceFactory.fillAuthData = _fillAuthData;
    accountServiceFactory.authentication = _authentication;

    return accountServiceFactory;
}]);

