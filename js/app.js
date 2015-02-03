'use strict';

angular.module('webapilabclient', ['LocalStorageModule', 'angular-loading-bar']);

angular.module('webapilabclient').config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

angular.module('webapilabclient').constant('settings', {
    'webapiurl': 'http://webapi21668.azurewebsites.net/api/'
});
