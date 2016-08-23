"use strict";

var EventExerciseModel = function () {
    this.fromJSON = function (json) {
        this.id = json.id;
        this.name = json.name;
        this.metrics = json.metrics;
        this.load = json.load;
        this.isExercise = json.isExercise;
        this.eventType = json.eventType;
        this.color = new EventModel().nameToColor(json.eventType);
        return this;
    }
};
