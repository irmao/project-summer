(function(){
  "use strict";

  var app = angular.module('ProjectSummerApp.controllers');

  app.controller('TrainingController', function($scope, ExerciseService, StateService, EventService) {
      $scope.initController = function () {
        $scope.exerciseListLoaded = false;
        loadExercises(StateService.getStateParams()['exerciseSetId']);
      };

      $scope.buttonDoneClick = function () {
        $scope.enabledExerciseId++;
      };

      $scope.buttonSaveClick = function () {
        saveExercises();
        StateService.goToState('HomeState');
      }

      $scope.isExerciseListLoaded = function () {
        return $scope.exerciseListLoaded;
      };

      function saveExercises () {
        var exerciseIdList = [];
        var exerciseLoadList = [];

        for (var i in $scope.exerciseList) {
          exerciseIdList.push($scope.exerciseList[i].id);
          exerciseLoadList.push($scope.exerciseList[i].load);
        }
        EventService.insertExerciseEventList(EventModel.DONE, 1, new Date(), exerciseIdList, exerciseLoadList);
      }

      /**
       * Loads the exercises from the database and adds them to the scope
       */
      function loadExercises (exerciseSetId) {
        // load by exercise set id, if one is given
        if (exerciseSetId) {
          $scope.promise = ExerciseService.getExercisesByExerciseSetId(exerciseSetId);
        } else {
          // load 
          $scope.promise = EventService.getExercisesByEventDateUserIdAndEventTypeId(new Date(), 1, EventModel.PLANNED);
        }

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
        
          if ($scope.exerciseList.length > 0) {
            $scope.exerciseListLoaded = true;
          }
          
          $scope.enabledExerciseId = 0; 
        } 

        var errorCallback = function (response) {
          console.log('Error: ', response);
        }

        $scope.promise.then(successCallback, errorCallback);
      }
  });

})();