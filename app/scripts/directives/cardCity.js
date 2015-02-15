angular.module('webapilabclient').directive('cardCity', function() {
    return {
        restrict: 'E',
        scope: {
            cityInfo: '=info'
        },
        templateUrl: 'templates/cardCity.html'
    };
});
