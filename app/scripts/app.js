'use strict';

angular.module('whohasgotmyitemApp', ['ngRoute', 'mongolabResource', 'googleOauth'])
  .config(function ($routeProvider, TokenProvider) {
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
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      TokenProvider.extendConfig({
          //clientId: 'PASTE_HERE_YOUR_GOOGLE_API_KEY',
          //redirectUri: 'https://items.wospe.fr/oauth2callback.html',
          //redirectUri: 'PASTE_HERE_YOUR_REDIRECT_OAUTH_URL',
          scopes: ["https://www.googleapis.com/auth/userinfo.email",
              "https://www.googleapis.com/auth/userinfo.profile"]
      });

    }).constant({
        //'API_KEY': 'PASTE_HERE_YOUR_API_KEY',
        'DB_NAME': 'whohasgomyitems'
    }).run(function($rootScope, $location) {
        // parameter for date format
        $rootScope.dateFormat = "yyyy-MM-dd";

        if(localStorage['email']) {
            $rootScope.email = localStorage['email'];
        }

        $rootScope.logout = function() {
            localStorage.removeItem('email');
            localStorage.removeItem('accessToken');
            delete $rootScope.email;
            $location.path("/login");
        };

    });

