angular.module('app').controller('Home.IndexController', ['$scope', '$http', '$timeout', '$rootScope', function ($scope, $http, $timeout, $rootScope) {

    $scope.userAssets = [];
   

    $scope.getDefaultUserAsset = function () {
        $scope.getUserAssets("");
    }

    $scope.getUserAssets = function (assetType) {
        $http({
            method: 'GET',
            url: "http://localhost:2845/api/v1/UserAssetsApi/getAsync?ProductType=" + assetType

        }).then(function (resp) {
            $scope.userAssets = resp.data;
        });
    }

    $timeout(function () {
        $scope.getDefaultUserAsset();
    });
}]);