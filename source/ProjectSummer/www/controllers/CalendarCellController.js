(function(){
  "use strict";

  var app = angular.module('ProjectSummerApp.controllers');

  app.controller('CallendarCellController', function($scope, StateService, EventService) {
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
        }
      };

      $scope.isInThePast = function () {
        return $scope.inThePast;
      }

      function loadEventExercises(cellDate) {
        var dateAsString = cellDate.getFullYear() + '-' + ("0" + (cellDate.getMonth() + 1)).slice(-2) 
          + '-' + cellDate.getDate();
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