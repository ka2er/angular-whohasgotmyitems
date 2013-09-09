'use strict';

angular.module('whohasgotmyitemApp')
  .controller('MainCtrl', function ($scope) {
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
  });
