angular.module('webapilabclient').directive('cardMember', function () {
    return {
        restric: 'A',
        scope: {
            memberInfo: '=info'
        },
        template: "<div class='col s12 m6'><div class='card blue-grey darken-1'><div class='card-content white-text'><span class='card-title'>{{memberInfo.Surname}}, {{memberInfo.Name}}</span><p>{{memberInfo.Departament}}&nbsp;</p></div></div></div>"
    };
});

angular.module('webapilabclient').directive('cardTown', function () {
    return {
        restric: 'A',
        scope: {
            townInfo: '=info'
        },
        template: "<div class='col s12 m3'><div class='card blue darken-1'><div class='card-content white-text'><span class='card-title'>{{townInfo.Name}}</span><p>{{townInfo.Province}}&nbsp;</p></div></div></div>"
    };
});
