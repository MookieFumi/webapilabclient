function cardMember() {
	return { 
        restrict: 'E',
        scope: {
            memberInfo: '=info'
        },
        templateUrl: 'templates/cardMember.html'
    };
}

angular.module('webapilabclient').directive('cardMember', cardMember);