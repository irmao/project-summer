(function(){
  "use strict";

  var app = angular.module('ProjectSummerApp.controllers');

  app.controller('CallendarCellController', function($scope, StateService, EventService, CalendarService) {
      $scope.initController = function () {
        var today = new Date();
        today.setHours(0,0,0,0);

        var localTimezone = today.toTimeString().substr(8);
        var cellDate = new Date(StateService.getStateParams()['cellDate'] + localTimezone);

        if (cellDate) {
          var today = new Date();
          today.setHours(0,0,0,0);
          $scope.inThePast = (cellDate < today);
          loadEventExercises(cellDate);
          $scope.cellDate = cellDate;
        }
      };

      $scope.isInThePast = function () {
        return $scope.inThePast;
      }

      $scope.insertDefaultExercise = function() {
        var cellDate = CalendarService.formatDate($scope.cellDate);
        EventService.insertExerciseSetEvent(EventModel.PLANNED, 1, cellDate, 12, 1);
        StateService.goToState('HomeState');
      }

      function loadEventExercises(cellDate) {
        var dateAsString = CalendarService.formatDate(cellDate);
        $scope.promise = EventService.getExercisesByEventDateAndUserId(dateAsString, 1);

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