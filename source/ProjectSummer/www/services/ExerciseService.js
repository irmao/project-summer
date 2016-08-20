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
          return ConnectionService.executeServerRequest('/exercise.php?findAllExercises=1');
        },

        /**
         * Returns a promise of getting a list of exercises given the exercise set id 
         */
        getExercisesByExerciseSetId: function(id) {
          return ConnectionService.executeServerRequest('/exercise.php?findExercisesByExerciseSetId='+id);
        },

        /**
         * Returns o promise of getting a list with all exercise sets
         */
        getAllExerciseSets: function() {
          return ConnectionService.executeServerRequest('/exercise.php?findAllExerciseSets=1');
        }
      };
  });

})();
