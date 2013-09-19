'use strict';

angular.module('whohasgotmyitemApp')
  .controller('ShareCtrl', function ($scope, $location, Item) {

        $scope.item = {};

        // Disable weekend selection

        $scope.save = function(){

            Item.save($scope.item);
            $location.path('/');
        };

        $scope.cancel = function() {
            $location.path('/')
        };
  });
