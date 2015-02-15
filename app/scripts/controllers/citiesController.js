(function() {
    'use strict';

    angular.module('webapilabclient')
        .controller('citiesController', ['$http', 'citiesService', 'settings', 'uiNotify',
            function($http, citiesService, settings, uiNotify) {
                var vm = this;
                vm.citiesPagination = {
                    hasNextPage: false,
                    pageIndex: 0,
                    count: 0
                };
                vm.cities = [];
                vm.cityToSearch = '';

                vm.searchCities = function(clear) {
                    if (clear) {
                        vm.clearCities();
                    }
                    loadCities();
                };

                vm.clearCities = function() {
                    vm.cities = [];
                    vm.citiesPagination = {
                        hasNextPage: false,
                        pageIndex: 0,
                        count: 0
                    };
                };

                function loadCities() {
                    var nextPage = parseInt(vm.citiesPagination.pageIndex + 1);
                    citiesService.getAll(vm.cityToSearch, nextPage)
                        .then(function(result) {
                            vm.cities.push.apply(vm.cities, result.Data);
                            vm.citiesPagination.hasNextPage = result.HasNextPage;
                            vm.citiesPagination.pageIndex = result.PageIndex;
                            vm.citiesPagination.count = result.Count;
                        }, function(err) {
                            uiNotify.show(err);
                        });
                };
            }
        ]);
})();
