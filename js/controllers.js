"use strict";

function membersController($http) {
    var url = "http://webapi21668.azurewebsites.net/api/";
    var vm = this;
    vm.members = [];
    vm.towns = [];
    vm.townToSearch = "";

    vm.getMembers = function() {
        $http.get(url + "members").
        success(function(data, status, headers, config) {
            getScope().vm.members = data;
        }).
        error(function(data, status, headers, config) {
            toast(status + ". " + data.Message, 4000);
        });
    };

    vm.searchTown = function() {
        $http.get(url + "towns?name=" + vm.townToSearch).
        success(function(data, status, headers, config) {
            getScope().vm.towns = data;
        }).
        error(function(data, status, headers, config) {
            toast(status + ". " + data.Message, 4000);
        });
    };

    function getScope() {
        var controllerElement = document.querySelector('[ng-controller="membersController as vm"]');
        return angular.element(controllerElement).scope();
    }
}

angular.module('webapilabclient').controller('membersController', membersController).$inject = ['$http'];