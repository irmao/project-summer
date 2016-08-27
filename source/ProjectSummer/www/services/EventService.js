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
          return ConnectionService.executeServerRequest('/event.php?findAllEventsByUserId=1&userId='+userId);
        },

        /**
         * Returns a promise of getting a list with all exercises registered by a given user id that are
         * inside an event which is happening in a given day 
         */
        getExercisesByEventDateAndUserId: function(eventDate, userId) {
          var addr = '/event.php?findExercisesByEventDateAndUserId=1&eventDate='+eventDate+'&userId='+userId;
          return ConnectionService.executeServerRequest(addr);
        },

        insertExerciseSetEvent : function(eventTypeId, userId, eventDate, exerciseSetId, exerciseSetLoad) {
          var addr = '/event.php?insertExerciseSetEvent=1&eventTypeId='+eventTypeId
            +'&userId='+userId+'&eventDate='+eventDate+'&exerciseSetId='+exerciseSetId
            +'&exerciseSetLoad='+exerciseSetLoad;

          return ConnectionService.executeServerRequest(addr);
        }
      };
  });

})();
