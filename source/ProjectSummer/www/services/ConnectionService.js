"use strict";

// MOCKED
var ConnectionService = function () {

    this.getExerciseMetricsById = function (id) {
        var model;

        if (id === 0) {
            model = new ExerciseMetricsModel(0, 'set');
        } else if (id === 1) {
            model = new ExerciseMetricsModel(1, 'time');
        }

        return model;
    };

    this.getAllExerciseMetrics = function () {
        var models = [
            this.getExerciseMetricsById(0),
            this.getExerciseMetricsById(1)
        ];

        return models;
    };

    this.getExerciseById = function(id) {
        var model;

        switch (id) {
            case 0:
                model = new ExerciseModel(id, 'Running', this.getExerciseMetricsById(1), 30);
                break;
            case 1:
                model = new ExerciseModel(id, 'Jumping Jacks', this.getExerciseMetricsById(0), 30);
                break;
            case 2:
                model = new ExerciseModel(id, 'Push ups', this.getExerciseMetricsById(0), 10);
                break;
            case 3:
                model = new ExerciseModel(id, 'Plank', this.getExerciseMetricsById(1), 15);
                break;
        }

        return model;
    }

    this.getAllExercises = function () {
        var models = [];

        for (var i = 0; i < 3; i++) {
            models.push(this.getExerciseById(i));
        }

        return models;
    }
    
};