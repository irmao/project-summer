(function(){
  "use strict";

  var app = angular.module('ProjectSummerApp.controllers');

  app.controller('HomeController', function($scope, StateService, CalendarService) {
      $scope.initController = function () {
        CalendarService.createCalendar('calendar');
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
  });

})();