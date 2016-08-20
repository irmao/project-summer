(function(){
  "use strict";
 
  var app = angular.module('ProjectSummerApp.services');

  /**
   * Service responsible for change states, that is, navigating through pages
   */
  app.service('StateService', function($state) {
    return {
      /**
        * Goes to the given state
        */
        goToState : function (newState) {
          $state.go(newState, null, {reload: true});
        },

        getCurrentStateData : function() {
          return $state.current.data;
        }
    };      
  });

})();
