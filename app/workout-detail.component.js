System.register(['angular2/core', './workout.service', './exercise-catalog'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, workout_service_1, exercise_catalog_1;
    var WorkoutDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (workout_service_1_1) {
                workout_service_1 = workout_service_1_1;
            },
            function (exercise_catalog_1_1) {
                exercise_catalog_1 = exercise_catalog_1_1;
            }],
        execute: function() {
            WorkoutDetailComponent = (function () {
                function WorkoutDetailComponent(_workoutService, _exerciseCatalog) {
                    this._workoutService = _workoutService;
                    this._exerciseCatalog = _exerciseCatalog;
                }
                WorkoutDetailComponent.prototype.getExerciseName = function (id) {
                    return this._exerciseCatalog.getExerciseName(id);
                };
                WorkoutDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'workout-detail',
                        inputs: ['workout'],
                        templateUrl: 'views/details.html'
                    }), 
                    __metadata('design:paramtypes', [workout_service_1.WorkoutService, exercise_catalog_1.ExerciseCatalog])
                ], WorkoutDetailComponent);
                return WorkoutDetailComponent;
            }());
            exports_1("WorkoutDetailComponent", WorkoutDetailComponent);
        }
    }
});
//# sourceMappingURL=workout-detail.component.js.map