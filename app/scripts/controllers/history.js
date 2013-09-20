'use strict';

angular.module('whohasgotmyitemApp')
  .controller('HistoryCtrl', function ($scope, Item) {

        $scope.items = Item.query({q:'{"archived":true}'});
  });
