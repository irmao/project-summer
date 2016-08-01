(function(){
  "use strict";

  var app = angular.module('ProjectSummerApp');

  app.controller('NavigationBarBackController', function($scope, $state) {
      $scope.pageTitle = $state.current.data.pageTitle; 

      $scope.navigateBack = function () {
          $state.go('HomeState');
      }
  });

})();