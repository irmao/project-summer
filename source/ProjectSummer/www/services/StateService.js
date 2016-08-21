(function(){
  "use strict";
 
  var app = angular.module('ProjectSummerApp.services');

  /**
   * Service responsible for state changes, that is, navigating through pages
   */
  app.service('StateService', function($state, $stateParams) {
    return {
      /**
        * Goes to the given state
        */
        goToState : function (newState, params) {
          $state.go(newState, params, {reload: true});
        },

        /**
         * Gets the data of the current state
         */
        getCurrentStateData : function() {
          return $state.current.data;
        },

        /**
         * Gets the state params
         */
        getStateParams : function() {
          return $stateParams;
        }
    };      
  });

})();
