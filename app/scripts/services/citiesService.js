(function() {
    'use strict';
    angular.module('webapilabclient')
        .factory('citiesService', ['$http', '$q', 'settings',
            function($http, $q, settings) {

                var citiesServiceFactory = {};

                var _getAll = function(text, pageIndex) {
                    var deferred = $q.defer();
                    var url = settings.webapiurl +
                        'api/towns?name=' + text +
                        '&pageIndex=' + parseInt(pageIndex) +
                        '&pageSize=' + settings.maxPageSize;

                    $http.get(url)
                        .success(function(response) {
                            deferred.resolve(response);
                        }).error(function(err, status) {
                            deferred.reject(err);
                        });

                    return deferred.promise;
                };

                citiesServiceFactory.getAll = _getAll;

                return citiesServiceFactory;
            }
        ]);
})();
