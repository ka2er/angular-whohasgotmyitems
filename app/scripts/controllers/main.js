'use strict';

angular.module('whohasgotmyitemApp')
  .controller('MainCtrl', function ($scope, Item) {
       $scope.items = Item.query();

        /*

        $scope.items = [
        {
            name: 'wheel',
            who: 'odile',
            when: '123456789',
            categories: ['divers']
        },
        {
            name: 'pen',
            who: 'odile',
            when: '123456789',
            categories: ['object']
        }    ];
        */
  });
