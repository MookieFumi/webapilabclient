'use strict';

angular.module('webapilabclient', ['LocalStorageModule', 'angular-loading-bar']);

angular.module('webapilabclient').config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

angular.module('webapilabclient').constant('settings', {
    'webapiurlProduction': 'http://webapilab-tab.azurewebsites.net/',
    'webapiurl': 'http://localhost:49284/',
    'maxPageSize': 25
});
