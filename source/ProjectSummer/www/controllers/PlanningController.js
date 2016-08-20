(function(){
  "use strict";

  var app = angular.module('ProjectSummerApp.controllers');

  app.$inject = ['$scope', 'StateService'];

  app.controller('PlanningController', function($scope, StateService) {
      /**
       * Initializes the controller
       */
      $scope.initController = function (params) {
        $scope.pageTitle = "My Planning";
      }

      $scope.buttonClick = function(route) {
        StateService.goToState(route);
      }
  });

})();