angular.module('webapilabclient').directive('cardTown', function() {
    return {
        restrict: 'E',
        scope: {
            townInfo: '=info'
        },
        templateUrl: 'templates/cardTown.html'
    };
});
