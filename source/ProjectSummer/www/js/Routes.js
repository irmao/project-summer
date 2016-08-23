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
        .state('NavigationSaveState', {
            abstract    : true,
            templateUrl : 'templates/NavigationBarSaveTemplate.html',
            controller  : 'NavigationBarSaveController'
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
            url: '/Training/{exerciseSetId}',
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
        })
        .state('AboutState', {
            url: '/About',
            templateUrl : 'pages/AboutPage.html',
            parent      : 'NavigationBackState',
            data        : {
                pageTitle : 'About'
            }
        })
        .state('CalendarCellState', {
            url: '/CallendarCell/{cellDate}',
            templateUrl : 'pages/CallendarCellPage.html',
            controller  : 'CallendarCellController',
            parent      : 'NavigationSaveState'
        });
        
      $urlRouterProvider.otherwise('/');
  });

})();