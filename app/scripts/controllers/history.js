'use strict';

angular.module('whohasgotmyitemApp')
  .controller('HistoryCtrl', function ($rootScope, $scope, Item, $location) {

        $scope.items = Item.query({q:'{"archived":true, "user":"'+$rootScope.email+'"}'});

        $scope.remove = function(item) {

            item.remove(function(){
                $scope.items = Item.query({q:'{"archived":true}'}, function(r) {
                    if(r.length === 0) {
                        $location.path('/');
                    }
                });
            });
        };
  });
