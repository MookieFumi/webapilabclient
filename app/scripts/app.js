(function() {
    'use strict';

    angular.module('webapilabclient', ['ngRoute', 'LocalStorageModule', 'angular-loading-bar']);

    angular.module('webapilabclient')
        .config(function($routeProvider) {
            $routeProvider.when('/default', {
                templateUrl: "views/default.html"
            }).when('/account/login', {
                controller: 'accountController',
                templateUrl: 'views/account/login.html'
            })
            .when('/account/register', {
                controller: 'accountController',
                templateUrl: 'views/account/register.html'
            }).when('/members', {
                controller: 'membersController',
                templateUrl: 'views/members/index.html'
            }).when('/cities', {
                controller: 'citiesController',
                templateUrl: 'views/cities/index.html'
            }).otherwise({
                redirectTo: '/default'
            });
        })
        .config(function($httpProvider) {
            $httpProvider.interceptors.push('authInterceptorService');
        })
        .constant('settings', {
            'webapiurl': 'http://webapilab-tab.azurewebsites.net/',
            'webapiurlDev': 'http://localhost:49284/',
            'maxPageSize': 25
        });

})();
