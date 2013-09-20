'use strict';

angular.module('whohasgotmyitemApp', ['mongolabResource'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/share', {
        templateUrl: 'views/share.html',
        controller: 'ShareCtrl'
      })
      .when('/history', {
        templateUrl: 'views/history.html',
        controller: 'HistoryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    }).constant({
        //'API_KEY': 'PASTE_HERE_YOUR_API_KEY',
        'DB_NAME': 'whohasgomyitems'
    }).run(function($rootScope) {
        // parameter for date format
        $rootScope.dateFormat = "yyyy-MM-dd";
    });

