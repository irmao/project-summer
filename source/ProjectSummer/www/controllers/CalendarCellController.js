(function(){
  "use strict";

  var app = angular.module('ProjectSummerApp.controllers');

  app.controller('CallendarCellController', function($scope, StateService, EventService) {
      $scope.initController = function () {
        var today = new Date();
        today.setHours(0,0,0,0);

        var localTimezone = today.toTimeString().substr(8);
        var cellDate = new Date(StateService.getStateParams()['cellDate'] + localTimezone);

        var eventExerciseList = StateService.getStateParams()['eventExerciseList'];

        if (cellDate) {
          var today = new Date();
          today.setHours(0,0,0,0);
          $scope.inThePast = (cellDate < today);
          $scope.cellDate = cellDate;

          if (eventExerciseList) {
            $scope.eventExerciseList = eventExerciseList;
            
          } else {
            loadEventExercises(cellDate);
          }
          
        }
      }

      $scope.isInThePast = function () {
        return $scope.inThePast;
      }

      $scope.insertPlannedExercise = function() {
        EventService.insertExerciseSetEvent(EventModel.PLANNED, 1, $scope.cellDate, 12, 1);
        StateService.goToState('HomeState');
      }

      $scope.insertGoal = function () {
        EventService.insertExerciseSetEvent(EventModel.GOAL, 1, $scope.cellDate, 12, 1);
        StateService.goToState('HomeState');
      }

      function loadEventExercises(cellDate) {
        $scope.promise = EventService.getExercisesByEventDateAndUserId(cellDate, 1);

        var successCallback = function (response) {
          var data = response.data;
          
          var exercises = [];
          for (var i in data) {
            exercises.push(new EventExerciseModel().fromJSON(data[i]));
          }
          
          $scope.eventExerciseList = exercises;          
        } 

        var errorCallback = function (response) {
          console.log('Error: ', response);
        }

        $scope.promise.then(successCallback, errorCallback);
      }
  });

})();