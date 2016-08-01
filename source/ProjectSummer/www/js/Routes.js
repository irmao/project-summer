(function(){
  "use strict";

  var app = angular.module('ProjectSummerApp');

  app.config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('NavigationBackState', {
            abstract    : true,
            templateUrl : 'templates/navbar_back_template.html',
            controller  : function ($scope, $state) {
                $scope.pageTitle = $state.current.data.pageTitle; 
            }
        })
        .state('ManageExerciseState', {
            url: '/ManageExercise',
            templateUrl : 'pages/ManageExercisePage.html',
            controller  : 'ManageExerciseController',
            parent      : 'NavigationBackState',
            data        : {
                pageTitle :  "Manage Exercises"
            }
        })
        .state('TrainingState', {
            url: '/Training',
            templateUrl : 'pages/TrainingPage.html',
            controller  : 'TrainingController'
        });
      
      $urlRouterProvider.otherwise('/ManageExercise');
  });

})();