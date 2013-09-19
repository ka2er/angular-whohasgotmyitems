'use strict';

angular.module('whohasgotmyitemApp')
  .factory('Item', function ($mongolabResource) {
        return $mongolabResource('items');
  });
