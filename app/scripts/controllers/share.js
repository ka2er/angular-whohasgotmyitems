'use strict';

angular.module('whohasgotmyitemApp')
  .controller('ShareCtrl', function ($rootScope, $scope, $location, Item) {

        $scope.item = {};
        $scope.returnDelay = 7;

        // prefill with known users
        $scope.whoList = [];
        Item.query({f:'{"who": 1}', s:'{"who" : 1}'}, function(items) {
            items.forEach(function(item) {
                if($scope.whoList.indexOf(item.who) === -1) {
                    $scope.whoList.push(item.who);
                }
            });
        });

        $scope.save = function(){
            $scope.item.shareDate = new Date();
            var today = new Date()
            today.setDate(today.getDate() + $scope.returnDelay);
            $scope.item.returnDate = today;
            $scope.item.user = $rootScope.email;

            Item.save($scope.item);
            $location.path('/');
        };

        $scope.cancel = function() {
            $location.path('/')
        };
  });
