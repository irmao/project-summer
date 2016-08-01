(function(){
  "use strict";

  var app = angular.module('ProjectSummerApp');

  app.config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('HomeState', {
            url         : '/',
            templateUrl : 'pages/HomePage.html',
            controller  : 'HomeController'
        })
        .state('NavigationBackState', {
            abstract    : true,
            templateUrl : 'templates/NavigationBarBackTemplate.html',
            controller  : 'NavigationBarBackController'
        })
        .state('ManageExerciseState', {
            url: '/ManageExercise',
            templateUrl : 'pages/ManageExercisePage.html',
            controller  : 'ManageExerciseController',
            parent      : 'NavigationBackState',
            data        : {
                pageTitle : 'Manage Exercises'
            }
        })
        .state('TrainingState', {
            url: '/Training',
            templateUrl : 'pages/TrainingPage.html',
            controller  : 'TrainingController',
            parent      : 'NavigationBackState',
            data        : {
                pageTitle : 'Training'
            }
        });
      
      $urlRouterProvider.otherwise('/');
  });

})();