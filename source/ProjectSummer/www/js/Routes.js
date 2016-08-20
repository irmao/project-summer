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
        .state('PlanningState', {
            url: '/Planning',
            templateUrl : 'pages/PlanningPage.html',
            controller  : 'PlanningController',
            parent      : 'NavigationBackState',
            data        : {
                pageTitle : 'My Planning'
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
        })
        .state('UnplannedTrainingState', {
            url: '/UnplannedTraining',
            templateUrl : 'pages/UnplannedTrainingPage.html',
            controller  : 'UnplannedTrainingController',
            parent      : 'NavigationBackState',
            data        : {
                pageTitle : 'Unplanned Training'
            }
        });
      
      $urlRouterProvider.otherwise('/');
  });

})();