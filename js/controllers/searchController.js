'use strict';

angular.module('webapilabclient')
    .controller('searchController', ['$http', 'settings', 'uiNotify', function($http, settings, uiNotify) {
            var vm = this;
            vm.members = [];
            vm.towns = [];
            vm.townToSearch = '';

            vm.getMembers = function() {
                $http.get(settings.webapiurl + 'members').
                success(function(data, status, headers, config) {
                    getScope().vm.members = data;
                }).
                error(function(data, status, headers, config) {
                    uiNotify.show(status + '. ' + data.Message);
                });
            };

            vm.searchTown = function() {
                $http.get(settings.webapiurl + 'towns?name=' + vm.townToSearch).
                success(function(data, status, headers, config) {
                    getScope().vm.towns = data;
                }).
                error(function(data, status, headers, config) {
                    uiNotify.show(status + '. ' + data.Message);
                });
            };

            vm.clearTowns = function() {
                vm.members = [];
                vm.towns = [];
            };

            function getScope() {
                var controllerElement = document.querySelector("[ng-controller='searchController as vm']");
                return angular.element(controllerElement).scope();
            }
        }]);
