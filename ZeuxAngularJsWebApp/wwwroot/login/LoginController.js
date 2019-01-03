angular.module('app').controller('LoginController', ['$scope', '$http', '$timeout', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $http, $timeout, $rootScope, $location, AuthenticationService) {

        var vm = this;
        initController();

        function initController() {
            AuthenticationService.Logout();
        };

        $scope.login = function () {
            AuthenticationService.Login(vm.username, vm.password, function (result) {
                if (result === true) {
                    $location.path('/');
                } else {
                    vm.error = 'Username or password is incorrect';
                    vm.loading = false;
                }
            });
        }
    }
]);
