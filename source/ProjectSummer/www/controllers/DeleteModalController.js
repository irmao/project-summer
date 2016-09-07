(function(){
  "use strict";

  var app = angular.module('ProjectSummerApp.controllers');

  app.controller('DeleteModalController', function($scope, $mdDialog) {
    $scope.hide = function() {
        $mdDialog.hide();
    };

    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
        $mdDialog.hide(answer);
    };
  });

})();
