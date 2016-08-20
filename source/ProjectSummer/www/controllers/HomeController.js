(function(){
  "use strict";

  var app = angular.module('ProjectSummerApp.controllers');

  app.$inject = ['$scope', 'StateService'];

  app.controller('HomeController', function($scope, StateService) {
      $scope.initController = function () {        
      };

      $scope.buttonEODClick = function () {
        StateService.goToState('TrainingState');
      };

      $scope.buttonPlanningClick = function () {
        StateService.goToState('PlanningState');
      };

      $scope.buttonUnplannedClick = function () {
        StateService.goToState('UnplannedTrainingState');
      };
  });

})();