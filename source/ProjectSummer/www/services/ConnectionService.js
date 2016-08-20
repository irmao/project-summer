(function(){
  "use strict";
 
  var app = angular.module('ProjectSummerApp.services');

  /**
   * Service responsible for making HTTP requests to the backend
   */
  app.service('ConnectionService', function($http) {
    return {
      /**
       * Executes a JSONP request
       */
        executeServerRequest : function (url) {
        var hostaddr = 'http://localhost';
        //var hostaddr = 'http://project-summer.azurewebsites.net/server';
        var fulladdr = hostaddr + url + '&callback=JSON_CALLBACK';
        return $http.jsonp(fulladdr);
      }
    };      
  });

})();
