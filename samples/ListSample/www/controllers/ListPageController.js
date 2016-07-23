var listSampleController = angular.module('ListSample', []);

listSampleController.controller('ListSampleController', function ListSampleController($scope) {
    $scope.restoreItems = function () {
        $scope.items = [
            { id: '1', name: 'First item' }, 
            { id: '2', name: 'Second item' },
            { id: '3', name: 'Third item' },
            { id: '4', name: '4th item' },
            { id: '5', name: '5th item' },
            { id: '6', name: '6th item' },
        ];
    }

    $scope.changeSelectedId = function (id) {
        console.log('item selected: ' + id);
        
        $scope.selectedId = id;
    }

    $scope.unsetSelectedId = function () {
        $scope.selectedId = '0';
    }

    $scope.isUnsetSelectedId = function () {
        return $scope.selectedId === '0';
    }

    $scope.removeItem = function (id) {
        for (var i = 0; i < $scope.items.length; i++) {
            if ($scope.items[i].id === id) {
                $scope.items.splice(i, 1);
                break;
            }
        }
    }

    $scope.restoreItems();
    $scope.unsetSelectedId();
});