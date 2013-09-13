'use strict';

angular.module('whohasgotmyitemApp')
  .controller('ShareCtrl', function ($scope, $location) {

        $scope.item = {};

        // Disable weekend selection

        $scope.save = function(){
          console.log($scope.item);


            // @TODO : store it on the WEB !!! via a directive ???
        };

        $scope.cancel = function() {
            $location.path('/')
        };
  });
