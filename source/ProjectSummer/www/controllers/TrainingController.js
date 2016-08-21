(function(){
  "use strict";

  var app = angular.module('ProjectSummerApp.controllers');

  app.controller('TrainingController', function($scope, ExerciseService, StateService) {
      $scope.initController = function () {
        $scope.exerciseListLoaded = false;
        loadExercises(StateService.getStateParams()['exerciseSetId']);
      };

      $scope.buttonDoneClick = function () {
        $scope.enabledExerciseId++;
      };

      $scope.isExerciseListLoaded = function () {
        return $scope.exerciseListLoaded;
      };

      /**
       * Loads the exercises from the database and adds them to the scope
       */
      function loadExercises (exerciseSetId) {
        if (!exerciseSetId) {
          return;
        }

        $scope.promise = ExerciseService.getExercisesByExerciseSetId(exerciseSetId);

        var successCallback = function (response) {
          var data = response.data;
          
          var models = [];
          for (var i in data) {
            models.push(new ExerciseModel().fromJSON(data[i]));
          }

          $scope.exerciseList = models;
          
          var index = 0;
          $scope.exerciseList.forEach(function(el) {
            el.view_id = index;
            index++;
          }, this);
        
          $scope.exerciseListLoaded = true;
          $scope.enabledExerciseId = 0; 
        } 

        var errorCallback = function (response) {
          console.log('Error: ', response);
        }

        $scope.promise.then(successCallback, errorCallback);
      }
  });

})();