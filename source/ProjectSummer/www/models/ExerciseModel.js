"use strict";

var ExerciseModel = function (exId, exName, exMetrics, exLoad) {
    this.id = exId;
    this.name = exName;
    this.metrics = exMetrics;
    this.load = exLoad;
    this.isExercise = true;

    this.fromJSON = function (json) {
        this.id = json.id;
        this.name = json.name;
        this.metrics = json.metrics;
        this.load = json.load;
        this.isExercise = json.isExercise;

        return this;
    }
};
