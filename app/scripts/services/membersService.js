(function() {
    'use strict';
    angular.module('webapilabclient')
        .factory('membersService', ['$http', '$q', 'settings',
            function($http, $q, settings) {

                var membersServiceFactory = {};
                var _getAll = function() {
                    var deferred = $q.defer();
                    var url = settings.webapiurl + 'api/members';
                    $http.get(url)
                        .success(function(response) {
                            deferred.resolve(response);
                        }).error(function(err, status) {
                            deferred.reject(err);
                        });

                    return deferred.promise;
                };

                membersServiceFactory.getAll = _getAll;

                return membersServiceFactory;
            }
        ]);
})();
