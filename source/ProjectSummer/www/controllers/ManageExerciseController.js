(function(){
  "use strict";

  var app = angular.module('ProjectSummerApp');

  app.controller('ManageExerciseController', function($scope) {
      $scope.initController = function (params) {
        $scope.pageTitle = "Manage Exercises";
        
        $scope.selectedId = '';
        
        var connectionService = new ConnectionService();
        $scope.allExercises = connectionService.getAllExercises();  
      }
      
      $scope.changeSelectedId = function (id) {
        $scope.selectedId = id;
      };
  });

})();