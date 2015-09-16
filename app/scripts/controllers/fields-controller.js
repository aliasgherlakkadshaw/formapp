'use strict';

/**
 * @ngdoc function
 * @name yoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoAppApp
 */
angular.module('yoAppApp')
    .controller('FieldsFormsCtrl', function($scope, Storage) {
        $scope.meta = {};


        var data;
        try {
            data = JSON.parse(Storage.getData());
            $scope.meta = data;
        } catch (ex) {

        }

        $scope.fields = [{
            label: 'Input Text',
            field: 'inputtext'
        }, {
            label: 'Input Email',
            field: 'inputemail'
        }, {
            label: 'Input Password',
            field: 'inputpassword'
        }, {
            label: 'Input Date',
            field: 'inputdate'
        }, {
            label: 'Textarea',
            field: 'textarea'
        }, {
            label: 'Input Age',
            field: 'inputage'
        }, {
            label: 'Input Website',
            field: 'inputwebsite'
        }]


        $scope.check = function(data, index) {
            Storage.setData(JSON.stringify($scope.meta));
        };

    });