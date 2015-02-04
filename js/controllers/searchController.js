'use strict';

angular.module('webapilabclient')
    .controller('searchController', ['$http', 'settings', 'uiNotify', function($http, settings, uiNotify) {
        var vm = this;
        vm.members = [];
        vm.townsPagination = {
            hasMoreTowns: false,
            pageIndex: 0,
            count: 0
        };
        vm.towns = [];
        vm.townToSearch = '';

        vm.getMembers = function() {
            $http.get(settings.webapiurl + 'api/members').
            success(function(data, status, headers, config) {
                getScope().vm.members = data;
            }).
            error(function(data, status, headers, config) {
                uiNotify.show(status + '. ' + data.Message);
            });
        };

        vm.searchTowns = function(clear) {
            if(clear){
                vm.clearTowns();  
            }
            loadTowns();
        };

        vm.clearTowns = function() {
            vm.members = [];
            vm.towns = [];
            vm.townsPagination = {
                hasMoreTowns: false,
                pageIndex: 0,
                count: 0
            };
        };

        function loadTowns() {
            var url = settings.webapiurl +
                'api/towns?name=' + vm.townToSearch +
                '&pageIndex=' + parseInt(vm.townsPagination.pageIndex + 1) +
                '&pageSize=' + settings.maxPageSize;
            $http.get(url).
            success(function(data, status, headers, config) {
                var scope = getScope();
                scope.vm.towns.push.apply(scope.vm.towns, data.Data);
                scope.vm.townsPagination.hasMoreTowns = data.HasNextPage;
                scope.vm.townsPagination.pageIndex = data.PageIndex;
                scope.vm.townsPagination.count = data.Count;
            }).
            error(function(data, status, headers, config) {
                uiNotify.show(status + '. ' + data.Message);
            });
        };

        function getScope() {
            var controllerElement = document.querySelector("[ng-controller='searchController as vm']");
            return angular.element(controllerElement).scope();
        }
    }]);
