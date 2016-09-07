(function(){
  "use strict";

  angular.module('ProjectSummerApp', ['ui.router', 'ProjectSummerApp.controllers']);
  angular.module('ProjectSummerApp.controllers', ['ngMaterial', 'ProjectSummerApp.services']);
  angular.module('ProjectSummerApp.services', []);
})();