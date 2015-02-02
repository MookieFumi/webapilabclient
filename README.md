webapilabclient
=========================== 

This is an example to consume data WebAPI laboratory.

It is a project that uses [Bower] as client package manager and [AngularJs] and [Materialize].

[AngularJs]: https://angularjs.org/
[Bower]: http://bower.io/
[Materialize]: http://materializecss.com/

Javascript code :

```js
vm.getMembers = function() {
    var url = "http://webapi21668.azurewebsites.net/api/members";
    $http.get(url).
    success(function(data, status, headers, config) {
        var controllerElement = document.querySelector('[ng-controller="membersController as vm"]');
        var $scope = angular.element(controllerElement).scope();
        $scope.vm.members = data;
    }).
    error(function(data, status, headers, config) {
    });
};
```