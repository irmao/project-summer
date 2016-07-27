(function(){
  "use strict";

  var app = angular.module('ProjectSummerApp');

  app.controller('TrainingController', function($scope) {
      $scope.initController = function () {
        var connectionService = new ConnectionService();
        var exerciseSetService = new ExerciseSetService();

        $scope.exerciseList = exerciseSetService.getExerciseList(connectionService.getExerciseSetById(0));

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