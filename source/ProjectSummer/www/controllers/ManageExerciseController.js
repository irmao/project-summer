(function(){
  "use strict";

  var app = angular.module('ProjectSummerApp.controllers');

  app.$inject = ['$scope', 'ExerciseService'];

  app.controller('ManageExerciseController', function($scope, ExerciseService) {
      /**
       * Initializes the controller
       */
      $scope.initController = function (params) {
        $scope.pageTitle = "Manage Exercises";
        $scope.selectedId = '';
        
        loadExercises();
      }
      
      /**
       * Changes the selected id to the id given as argument
       */
      $scope.changeSelectedId = function (id) {
        $scope.selectedId = id;
      };

      /**
       * Returns a list with all the exercises
       */
      $scope.getAllExercises = function () {
        return $scope.allExercises;
      }

      /**
       * Loads the exercises from the database and adds them to the scope
       */
      function loadExercises () {
        $scope.promise = ExerciseService.getAllExercises();

        var successCallback = function (response) {
          var data = response.data;
          
          var models = [];
          for (var i in data) {
            models.push(new ExerciseModel().fromJSON(data[i]));
          }

          $scope.allExercises = models;
        } 

        var errorCallback = function (response) {
          console.log('Error: ', response);
        }

        $scope.promise.then(successCallback, errorCallback);
      }
  });

})();