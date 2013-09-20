'use strict';

angular.module('whohasgotmyitemApp')
  .controller('MainCtrl', function ($scope, Item) {
       $scope.items = Item.query();

        $scope.notArchived = function() {
            return function(item) {
                return !item.archived || item.archived !== true;
            };
        };

        $scope.outdated = function(date) {
            var now = new Date();
            var y = +date.substr(0, 4);
            var m = +date.substr(5, 2);
            var d = +date.substr(8, 2);

            return (y < now.getFullYear()
                || m < (now.getMonth()+1)
                || d < now.getDate()
             );
        };

        $scope.archive = function(item) {
            item.archived = true;
            item.update();
        };
  });
