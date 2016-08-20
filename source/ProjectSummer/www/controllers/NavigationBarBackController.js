(function(){
  "use strict";

  var app = angular.module('ProjectSummerApp.controllers');

  app.$inject = ['$scope', 'StateService'];

  app.controller('NavigationBarBackController', function($scope, StateService) {
      $scope.initController = function () {        
          $scope.pageTitle = StateService.getCurrentStateData().pageTitle;
      }; 

      $scope.navigateBack = function () {
          StateService.goToState('HomeState');
      }
  });

})();