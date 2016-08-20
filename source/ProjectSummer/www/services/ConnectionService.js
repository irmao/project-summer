(function(){
  "use strict";
 
  var app = angular.module('ProjectSummerApp');

  app.factory('ConnectionService', function($http) {
      return {
        /**
         * Returns a promise of a list with all exercises
         */
        getAllExercises: function() {
          return executeServerRequest('/exercise.php?all=1');
        }
      };
      
      /**
       * Executes a JSONP request
       */
      function executeServerRequest(url) {
        var hostaddr = 'http://localhost';
        var fulladdr = hostaddr + url + '&callback=JSON_CALLBACK';
        return $http.jsonp(fulladdr);
      }
  });

})();
