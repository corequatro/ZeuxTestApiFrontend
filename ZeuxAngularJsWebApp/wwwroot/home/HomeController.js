angular.module('app').controller('HomeController', ['$scope', '$http', '$timeout', '$rootScope', 'config', function ($scope, $http, $timeout, $rootScope, config) {

    $scope.userAssets = [];

    $scope.currentTab ={value: 'assets'}
    $scope.show = function (tabType) {
        $scope.currentTab = { value: tabType.toString() };
    }

    $scope.getDefaultUserAsset = function () {
        $scope.getUserAssets("");
    }
    $scope.activeAsset = { value: 'All' }
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
        $scope.activeAsset = { value: assetType === "" ? "All" : assetType.toString() };

        $http({
            method: 'GET',
            url: config.apiUrl + "/UserAssetsApi/getAsync?ProductType=" + assetType

        }).then(function (resp) {
            $scope.userAssets = resp.data;
        });
    }

    $timeout(function () {
        $scope.getDefaultUserAsset();
    });
}]);