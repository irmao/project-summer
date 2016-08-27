(function(){
  "use strict";
 
  var app = angular.module('ProjectSummerApp.services');

  app.$inject = ['ConnectionService'];
  
  /**
   * Service responsible for making requests to the server regarding the Events features
   */
  app.service('EventService', function(ConnectionService) {
      /**
       * Takes a JS date variable and returns a string in the format 'yyyy-mm-dd' 
       */
      function formatDate(date) {
        return date.getFullYear() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) 
            + '-' + date.getDate();
      };

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
          var dateAsString = formatDate(eventDate);
          var addr = '/event.php?findExercisesByEventDateAndUserId=1&eventDate='+dateAsString+'&userId='+userId;
          return ConnectionService.executeServerRequest(addr);
        },

        /**
         * Returns a promise of getting a list with all exercises registered by a given user id that are
         * inside an event which is happening in a given day 
         */
        getExercisesByEventDateUserIdAndEventTypeId: function(eventDate, userId, eventTypeId) {
          var dateAsString = formatDate(eventDate);
          var addr = '/event.php?findExercisesByEventDateUserIdAndEventTypeId=1&eventDate='+dateAsString+'&userId='
            +userId+'&eventTypeId='+eventTypeId;
          return ConnectionService.executeServerRequest(addr);
        },

        insertExerciseSetEvent: function(eventTypeId, userId, eventDate, exerciseSetId, exerciseSetLoad) {
          var dateAsString = formatDate(eventDate);
          var addr = '/event.php?insertExerciseSetEvent=1&eventTypeId='+eventTypeId
            +'&userId='+userId+'&eventDate='+dateAsString+'&exerciseSetId='+exerciseSetId
            +'&exerciseSetLoad='+exerciseSetLoad;
          return ConnectionService.executeServerRequest(addr);
        },

        insertExerciseEventList: function(eventTypeId, userId, eventDate, exerciseIdList, exerciseLoadList) {
          var dateAsString = formatDate(eventDate);
          var addr = '/event.php?insertExerciseEventList=1&eventTypeId='+eventTypeId
            +'&userId='+userId+'&eventDate='+dateAsString+'&exerciseIdList='+exerciseIdList
            +'&exerciseLoadList='+exerciseLoadList;
          return ConnectionService.executeServerRequest(addr);
        }
      };
  });

})();
