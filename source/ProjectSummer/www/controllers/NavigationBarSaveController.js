(function(){
  "use strict";

  var app = angular.module('ProjectSummerApp.controllers');

  app.$inject = ['$scope', 'StateService'];

  app.controller('NavigationBarSaveController', function($scope, StateService) {
      $scope.initController = function () {        
      }; 

      $scope.navigateBack = function () {
          StateService.goToState('HomeState');
      }

      $scope.save = function () {
          // saves and navigates back
          $scope.navigateBack();
      }
  });

})();