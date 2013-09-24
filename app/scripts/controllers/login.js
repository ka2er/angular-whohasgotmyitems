'use strict';

angular.module('whohasgotmyitemApp')
  .controller('LoginCtrl', function ($rootScope, $scope, $window, $location, $http, Token) {
        $scope.accessToken = Token.get();



        $scope.authenticate = function() {
            Token.getTokenByPopup()
                .then(function(params) {
                    // Success getting token from popup.

                    // Verify the token before setting it, to avoid the confused deputy problem.
                    Token.verifyAsync(params.access_token).
                        then(function(data) {
                            $rootScope.$apply(function() {

                                Token.set(params.access_token)

                                // get user info
                                var endpoint = "https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token="+params.access_token;
                                //var endpoint = "https://www.googleapis.com/plus/v1/people/me";
                                $http.get(endpoint).success(function(data){
                                    $rootScope.email = data.email;
                                    localStorage['email'] = data.email;
                                    $location.path("/");
                                });

                            });
                        }, function() {
                            alert("Failed to verify token.")
                        });

                }, function() {
                    // Failure getting token from popup.
                    alert("Failed to get token from popup.");
                });
        };
  });
