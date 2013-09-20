'use strict';

angular.module('whohasgotmyitemApp')
  .controller('ShareCtrl', function ($scope, $location, Item) {

        // prefil who .... TODO

        $scope.item = {};
        $scope.returnDelay = 7;

        // Disable weekend selection

        $scope.save = function(){
            $scope.item.shareDate = new Date();
            var today = new Date()
            today.setDate(today.getDate() + $scope.returnDelay);
            $scope.item.returnDate = today;

            Item.save($scope.item);
            $location.path('/');
        };

        $scope.cancel = function() {
            $location.path('/')
        };
  });
