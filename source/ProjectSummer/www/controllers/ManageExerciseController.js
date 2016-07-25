(function(){
  "use strict";

  var app = angular.module('ProjectSummerApp');

  app.controller('ManageExerciseController', function($scope) {
      $scope.selectedId = '';
      
      $scope.changeSelectedId = function (id) {
        $scope.selectedId = id;
      };

      var connectionService = new ConnectionService();
      $scope.allExercises = connectionService.getAllExercises();
      console.log($scope.allExercises);
  });

})();