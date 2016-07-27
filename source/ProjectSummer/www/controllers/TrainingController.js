(function(){
  "use strict";

  var app = angular.module('ProjectSummerApp');

  app.controller('TrainingController', function($scope) {
      $scope.initController = function () {
        var connectionService = new ConnectionService();

        var exerciseSet = connectionService.getExerciseSetById(0);
        exerciseSet.exercises.push(connectionService.getExerciseSetById(0));
        
        var exerciseSetService = new ExerciseSetService();
        var exerciseList = exerciseSetService.getExerciseList(exerciseSet);
        $scope.exerciseList = exerciseList;

        var index = 0;
        $scope.exerciseList.forEach(function(el) {
          el.view_id = index;
          index++;
        }, this);
        
        $scope.enabledExerciseId = 0;        
      };

      $scope.buttonDoneClick = function () {
        $scope.enabledExerciseId++;
      };
  });

})();