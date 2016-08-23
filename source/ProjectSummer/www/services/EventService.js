(function(){
  "use strict";
 
  var app = angular.module('ProjectSummerApp.services');

  app.$inject = ['ConnectionService'];
  
  /**
   * Service responsible for making requests to the server regarding the Events features
   */
  app.service('EventService', function(ConnectionService) {
      return {
        /**
         * Returns a promise of getting a list with all events related to an user id
         */
        getAllEventsByUserId: function(userId) {
          return ConnectionService.executeServerRequest('/event.php?findAllEventsByUserId='+userId);
        },

        /**
         * Returns a promise of getting a list with all exercises registered by a given user id that are
         * inside an event which is happening in a given day 
         */
        getExercisesByEventDateAndUserId: function(eventDate, userId) {
          var addr = '/event.php?findExercisesByEventDate='+eventDate+'&userId='+userId;
          console.log(addr);
          return ConnectionService.executeServerRequest(addr);
        }
      };
  });

})();
