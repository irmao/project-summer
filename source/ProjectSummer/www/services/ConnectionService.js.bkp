"use strict";

// MOCKED
var ConnectionService = function () {

    this.getExerciseMetricsById = function (id) {
        var model;

        if (id === 0) {
            model = new ExerciseMetricsModel(id, ExerciseMetricsModel.SET, '');
        } else if (id === 1) {
            model = new ExerciseMetricsModel(id, ExerciseMetricsModel.TIME, 's');
        } else if (id === 2) {
            model = new ExerciseMetricsModel(id, ExerciseMetricsModel.TIME, 'min');
        } else if (id === 3) {
            model = new ExerciseMetricsModel(id, ExerciseMetricsModel.DISTANCE, 'km');
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
                model = new ExerciseModel(id, 'Warm up', this.getExerciseMetricsById(2), 2);
                break;
            case 1:
                model = new ExerciseModel(id, 'Squats', this.getExerciseMetricsById(0), 20);
                break;
            case 2:
                model = new ExerciseModel(id, 'Push ups', this.getExerciseMetricsById(0), 10);
                break;
            case 3:
                model = new ExerciseModel(id, 'Walking lunges', this.getExerciseMetricsById(0), 20);
                break;
            case 4:
                model = new ExerciseModel(id, 'Dumbell rows', this.getExerciseMetricsById(0), 10);
                break;
            case 5:
                model = new ExerciseModel(id, 'Plank', this.getExerciseMetricsById(1), 15);
                break;
            case 6:
                model = new ExerciseModel(id, 'Jumping jacks', this.getExerciseMetricsById(0), 30);
                break;
            case 7:
                model = new ExerciseModel(id, 'Rest', this.getExerciseMetricsById(2), 1);
                break;
            case 8:
                model = new ExerciseModel(id, 'Strech', this.getExerciseMetricsById(2), 3);
                break;
            case 9:
                model = new ExerciseModel(id, 'Time running', this.getExerciseMetricsById(2), 30);
                break;
            case 10:
                model = new ExerciseModel(id, 'Distance running', this.getExerciseMetricsById(3), 2);
                break;
        }

        return model;
    }

    this.getAllExercises = function () {
        var models = [];

        for (var i = 0; i < 11; i++) {
            models.push(this.getExerciseById(i));
        }

        return models;
    }

    this.getExerciseSetById = function (id) {
        var exerciseList = [];
        for (var i = 0; i < 9; i++) {
            exerciseList.push(this.getExerciseById(i));
        }

        return new ExerciseSetModel(id, 'Default Exercises', exerciseList);
    }
    
};