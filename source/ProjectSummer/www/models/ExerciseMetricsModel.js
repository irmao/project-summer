"use strict";

var ExerciseMetricsModel = function (exId, exType, exUnit) {
    this.id = exId;
    this.type = exType;
    this.unit = exUnit;
};

ExerciseMetricsModel.SET = 0;
ExerciseMetricsModel.TIME = 1;
ExerciseMetricsModel.DISTANCE = 2;
