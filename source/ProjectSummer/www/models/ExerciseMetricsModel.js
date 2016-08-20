"use strict";

var ExerciseMetricsModel = function (exId, exType, exUnit) {
    this.id = exId;
    this.type = exType;
    this.unit = exUnit;

    this.fromJSON = function (json) {
        this.id = json.id;
        this.type = json.type;
        this.unit = json.unit;

        return this;
    }
};

ExerciseMetricsModel.TIME = 1;
ExerciseMetricsModel.SET = 2;
ExerciseMetricsModel.DISTANCE = 3;
