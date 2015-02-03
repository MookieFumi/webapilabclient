angular.module('webapilabclient').directive('cardMember', function () {
    return {
        restric: 'A',
        scope: {
            memberInfo: '=info'
        },
        templateUrl: "templates/cardMember.html"
    };
});

angular.module('webapilabclient').directive('cardTown', function () {
    return {
        restric: 'A',
        scope: {
            townInfo: '=info'
        },
        templateUrl: "templates/cardTown.html"
    };
});
