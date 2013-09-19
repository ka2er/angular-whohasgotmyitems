'use strict';

angular.module('whohasgotmyitemApp')
  .controller('MainCtrl', function ($scope, Item) {
       $scope.items = Item.query();


        $scope.delete = function(item) {
            item.$remove(function(){
                $scope.items = Item.query();
            });
        };
  });
