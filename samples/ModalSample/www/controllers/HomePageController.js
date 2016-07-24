var modalSample = angular.module('ModalSample', ['ngMaterial']);

modalSample.controller('HomePageController', function($scope, $mdDialog) {
    $scope.status = '  ';
    $scope.showModal = function(ev) {
        $mdDialog.show({
            controller: 'ModalController',
            templateUrl: 'templates/ModalTemplate.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: false
        })

        .then(function(answer) {
            console.log('You said the information was "' + answer + '".');
        }, function() {
            console.log('You cancelled the dialog.');
        });
    };
});