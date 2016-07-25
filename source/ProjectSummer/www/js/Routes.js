(function(){
  "use strict";

  var app = angular.module('ProjectSummerApp');

  app.config(function($routeProvider) {
      $routeProvider
        .when('/ManageExercise', {
            templateUrl : 'pages/ManageExercisePage.html',
            controller  : 'ManageExerciseController'
        })
        .otherwise({
            redirectTo: '/ManageExercise'
        });
  });

})();