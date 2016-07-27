(function(){
  "use strict";

  var app = angular.module('ProjectSummerApp');

  app.controller('TrainingController', function($scope) {
      $scope.initController = function () {
        var connectionService = new ConnectionService();
        $scope.exerciseSet = connectionService.getExerciseSetById(0);
        $scope.enabledExerciseIndex = 0;        
      };

      $scope.exerciseDone = function () {
        $scope.selectedId = id;
      };

      $scope.isExerciseDisabled = function (id) {
        if ($scope.enabledExerciseIndex >= $scope.exerciseSet.exercises.length) {
          return true;
        }

        return id !== $scope.exerciseSet.exercises[$scope.enabledExerciseIndex].id;
      };

      $scope.isExerciseDone = function (id) {
        for (var idx = 0; idx < $scope.exerciseSet.exercises.length; idx++) {
          if (id === $scope.exerciseSet.exercises[idx].id) {
            break;
          }
        }
        
        return idx < $scope.enabledExerciseIndex;
      }

      $scope.finishedExercises = function () {
        return $scope.enabledExerciseIndex === $scope.exerciseSet.exercises.length;
      }

      $scope.buttonDoneClick = function () {
        $scope.enabledExerciseIndex++;
        console.log($scope.enabledExerciseIndex);
      };
  });

})();