(function(){
  "use strict";

  var app = angular.module('ProjectSummerApp');

  app.controller('HomeController', function($scope, $state) {
      $scope.initController = function () {        
      };

      $scope.buttonEODClick = function () {
        $state.go('TrainingState');
      };

      $scope.buttonUnplannedClick = function () {
        $state.go('ManageExerciseState');
      };
  });

})();