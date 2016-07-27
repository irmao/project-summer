(function(){
  "use strict";

  var app = angular.module('ProjectSummerApp');

  app.config(function($routeProvider) {
      $routeProvider
        .when('/ManageExercise', {
            templateUrl : 'pages/ManageExercisePage.html',
            controller  : 'ManageExerciseController'
        })
        .when('/Training', {
            templateUrl : 'pages/TrainingPage.html',
            controller  : 'TrainingController'
        })
        .otherwise({
            redirectTo: '/ManageExercise'
        });
  });

})();