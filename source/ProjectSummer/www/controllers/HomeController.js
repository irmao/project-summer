(function(){
  "use strict";

  var app = angular.module('ProjectSummerApp.controllers');

  app.controller('HomeController', function($scope, StateService, CalendarService, EventService) {
      $scope.initController = function () {
        createCalendar();
        loadEvents();
      };

      $scope.buttonEODClick = function () {
        StateService.goToState('TrainingState', {exerciseSetId: 12});
      };

      $scope.buttonPlanningClick = function () {
        StateService.goToState('PlanningState');
      };

      $scope.buttonUnplannedClick = function () {
        StateService.goToState('UnplannedTrainingState');
      };

      $scope.buttonInfoClick = function () {
        StateService.goToState('AboutState');
      };

      function loadEvents() {
        $scope.promise = EventService.getAllEventsByUserId(1);

        var successCallback = function (response) {
          var data = response.data;
          
          var events = [];
          for (var i in data) {
            events.push(new EventModel().fromJSON(data[i]));
          }
          
          createCalendar(events);          
        } 

        var errorCallback = function (response) {
          console.log('Error: ', response);
        }

        $scope.promise.then(successCallback, errorCallback);
      }

      function createCalendar(events) {
        CalendarService.createCalendar('calendar', events, calendarCellClick);
      }

      function calendarCellClick(date, jsEvent, view) {
        StateService.goToState('CalendarCellState', {cellDate: date.format()});
      }
  });

})();