'use strict';

angular.module('whohasgotmyitemApp')
  .controller('ShareCtrl', function ($scope, $location, Item) {

        $scope.item = {};
        $scope.returnDelay = 7;

        // prefill with known users
        $scope.whoList = [];
        Item.query({f:'{"who": 1}', s:'{"who" : 1}'}, function(items) {
            items.forEach(function(item) {
                $scope.whoList.push(item.who);
            });
        });

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
