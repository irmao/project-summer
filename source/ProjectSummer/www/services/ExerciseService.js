(function(){
  "use strict";
 
  var app = angular.module('ProjectSummerApp.services');

  app.$inject = ['ConnectionService'];
  
  /**
   * Service responsible for making requests to the server regarding the Exercises features
   */
  app.service('ExerciseService', function(ConnectionService) {
      return {
        /**
         * Returns a promise of getting a list with all exercises
         */
        getAllExercises: function() {
          return ConnectionService.executeServerRequest('/exercise.php?all=1');
        },

        /**
         * Returns a promise of getting a list of exercises given the exercise set id 
         */
        getExerciseSetById: function(id) {
          return ConnectionService.executeServerRequest('/exercise.php?setById='+id);
        }
      };
  });

})();
