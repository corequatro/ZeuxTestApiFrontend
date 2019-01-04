angular.module('app').controller('HomeController', ['$scope', '$http', '$timeout', '$rootScope', function ($scope, $http, $timeout, $rootScope) {

    $scope.userAssets = [];

    $scope.currentTab = 'assets';
    $scope.show = function (tabType) {
        $scope.currentTab = tabType;
        console.log(tabType);
       
    }
    $scope.getDefaultUserAsset = function () {
        $scope.getUserAssets("");
    }

    $scope.typeToString = function (type) {
        if (type === 0) {
            return "Savings";
        }
        if (type === 1) {
            return "P2P";
        }
        if (type === 2) {
            return "Funds";
        }
        return "All";
    }

    $scope.getUserAssets = function (assetType) {
        $scope.currentAsset = assetType;
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