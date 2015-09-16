'use strict';

/**
 * @ngdoc service
 * @name yoAppApp.Storage
 * @description
 * # Storage
 * Service in the yoAppApp.
 */
angular.module('yoAppApp')
    .service('Storage', function() {
        return {
            setData: function(data) {
                localStorage.data = data;
            },
            getData: function() {
                return localStorage.data;
            },
            deleteData: function() {
                delete localStorage.data;
            }
        }
    });