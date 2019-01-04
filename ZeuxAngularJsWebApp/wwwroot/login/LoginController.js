angular.module('app').controller('LoginController', ['$scope', '$http', '$timeout', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $http, $timeout, $rootScope, $location, AuthenticationService) {

        $scope.username = "";
        $scope.password = "";

        $scope.login = function () {
            AuthenticationService.Login($scope.username, $scope.password, function (result) {
                if (result === true) {
                    $location.path('/');
                }
            });
        }

        $timeout(function () {
            AuthenticationService.Logout();
        });
    }
]);
