(function() {
    'use strict';

    angular.module('webapilabclient')
        .controller('membersController', ['$http', 'membersService', 'settings', 'uiNotify',
            function($http, membersService, settings, uiNotify) {
                var vm = this;
                vm.members = [];

                vm.getMembers = function() {
                    membersService.getAll()
                        .then(function(result) {
                            vm.members = result;
                        }, function(err) {
                            uiNotify.show(err);
                        });
                };
            }
        ]);
})();
