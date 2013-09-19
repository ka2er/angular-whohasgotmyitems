'use strict';

angular.module('whohasgotmyitemApp')
  .controller('MainCtrl', function ($scope, Item) {
       $scope.items = Item.query();


        $scope.outdated = function(date) {
            var now = new Date();
            var y = +date.substr(0, 4);
            var m = +date.substr(5, 2);
            var d = +date.substr(8, 2);

            return (y < now.getFullYear()
                || m < (now.getMonth()+1)
                || d < now.getDay()
             );
        };

        $scope.delete = function(item) {
            item.$remove(function(){
                $scope.items = Item.query();
            });
        };
  });
