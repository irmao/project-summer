"use strict";

var ExerciseModel = function (exId, exName, exMetrics, exLoad) {
    this.id = exId;
    this.name = exName;
    this.metrics = exMetrics;
    this.load = exLoad;
    this.isExercise = true;
};