"use strict";

var ExerciseSetService = function () {
  
    this.getExerciseList = function (exerciseSetOrExercise) {
      if (exerciseSetOrExercise.isExercise === undefined) {
        return undefined;
      }

      if (exerciseSetOrExercise.isExercise) {
        return [exerciseSetOrExercise];
      }

      var exercises = [];
      exerciseSetOrExercise.exercises.forEach(function(ex) {
        exercises = exercises.concat(this.getExerciseList(ex));
      }, this);

      return exercises;
    }
}