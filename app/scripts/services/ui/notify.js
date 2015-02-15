'use strict';
angular.module('webapilabclient').factory('uiNotify', function() {

    var uiNotify = {};
    
    var _show = function(message) {
        //toast(message, 4000);
    };

    uiNotify.show = _show;

    return uiNotify;
});
