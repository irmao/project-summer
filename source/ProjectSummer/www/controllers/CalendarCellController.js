(function(){
  "use strict";

  var app = angular.module('ProjectSummerApp.controllers');

  app.controller('CallendarCellController', function($scope, StateService, EventService, $mdDialog, ExerciseService) {
      $scope.initController = function () {
        var today = new Date();
        today.setHours(0,0,0,0);

        var localTimezone = today.toTimeString().substr(8);
        var cellDate = new Date(StateService.getStateParams()['cellDate'] + localTimezone);

        var eventExerciseList = StateService.getStateParams()['eventExerciseList'];

        if (cellDate) {
          var today = new Date();
          today.setHours(0,0,0,0);
          $scope.inThePast = (cellDate < today);
          $scope.cellDate = cellDate;

          if (eventExerciseList) {
            $scope.eventExerciseList = eventExerciseList;
            
          } else {
            loadEventExercises(cellDate);
          }
          
        }

        loadExerciseSets();
      }

      $scope.getAllExerciseSets = function() {
        return $scope.allExercises;
      }

      $scope.isInThePast = function () {
        return $scope.inThePast;
      }

      $scope.insertButtonClick = function() {
        if ($scope.selectedExerciseTypeInsert === undefined || $scope.selectedExerciseSet === undefined) {
          return;
        }

        EventService.insertExerciseSetEvent($scope.selectedExerciseTypeInsert, 1, $scope.cellDate, 
          $scope.selectedExerciseSet, 1);
        StateService.goToState('HomeState');
      }

      $scope.clearButtonClick = function(ev) {
        if ($scope.selectedExerciseTypeClear === undefined) {
          return;
        }

        showModal(ev, function(response) {
          if (response === 'yes') {
            EventService.deleteEventExercises($scope.selectedExerciseTypeClear, 1, $scope.cellDate);
            StateService.goToState('HomeState');
          }
        }, modalHandleCancel);
      }

      function modalHandleCancel() {
      }

      function loadExerciseSets() {
        var promise = ExerciseService.getAllExerciseSets();

        var successCallback = function (response) {
          var data = response.data;
          
          var models = [];
          for (var i in data) {
            models.push(new ExerciseModel().fromJSON(data[i]));
          }

          $scope.allExercises = models;
        } 

        var errorCallback = function (response) {
          console.log('Error: ', response);
        }

        promise.then(successCallback, errorCallback);
      }

      function loadEventExercises(cellDate) {
        $scope.promise = EventService.getExercisesByEventDateAndUserId(cellDate, 1);

        var successCallback = function (response) {
          var data = response.data;
          
          var exercises = [];
          for (var i in data) {
            exercises.push(new EventExerciseModel().fromJSON(data[i]));
          }
          
          $scope.eventExerciseList = exercises;          
        } 

        var errorCallback = function (response) {
          console.log('Error: ', response);
        }

        $scope.promise.then(successCallback, errorCallback);
      }

      function showModal(ev, handleResponseCallback, cancelCallback) {
          $mdDialog.show({
              controller: 'DeleteModalController',
              templateUrl: 'templates/DeleteModalTemplate.html',
              parent: angular.element(document.body),
              targetEvent: ev,
              clickOutsideToClose:true,
              fullscreen: false
        })
        .then(function(response) {
            handleResponseCallback(response);
        }, function() {
            cancelCallback();
        });
      };
  });

})();