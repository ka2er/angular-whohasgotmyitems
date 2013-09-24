'use strict';

angular.module('whohasgotmyitemApp')
  .controller('MainCtrl', function ($rootScope, $scope, Item, $location) {

    if(! $rootScope.email ) {
        $location.path('/login');
        return;
    }


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
            || (y <= now.getFullYear() && m < (now.getMonth()+1))
            || (y <= now.getFullYear() && m <= (now.getMonth()+1) &&d < now.getDate())
         );
    };

    $scope.archive = function(item) {
        item.archivedDate = new Date();
        item.archived = true;
        item.update();
    };

    $scope.showHistory = function() {
        $location.path('/history')
    };

    $scope.hasHistory = function() {

        var ret = false;
        $scope.items.forEach(function(item) {
            ret |= item.archived && item.archived === true;
        });

        return ret;
    };
  });
