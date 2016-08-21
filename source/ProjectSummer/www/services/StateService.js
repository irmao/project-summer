(function(){
  "use strict";
 
  var app = angular.module('ProjectSummerApp.services');

  /**
   * Service responsible for change states, that is, navigating through pages
   */
  app.service('StateService', function($state, $stateParams) {
    return {
      /**
        * Goes to the given state
        */
        goToState : function (newState, params) {
          $state.go(newState, params, {reload: true});
        },

        getCurrentStateData : function() {
          return $state.current.data;
        },

        getStateParams : function() {
          return $stateParams;
        }
    };      
  });

})();
