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
    var DashboardComponent, TopExercise;
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
            DashboardComponent = (function () {
                function DashboardComponent(_workoutService, _exerciseCatalog) {
                    this._workoutService = _workoutService;
                    this._exerciseCatalog = _exerciseCatalog;
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._workoutService.getWorkouts()
                        .then(function (o) {
                        _this.computeTopExercises(o);
                    });
                };
                DashboardComponent.prototype.gotoDetail = function () {
                };
                DashboardComponent.prototype.getExerciseName = function (id) {
                    return this._exerciseCatalog.getExerciseName(id);
                };
                DashboardComponent.prototype.computeTopExercises = function (workouts) {
                    var tops = [];
                    workouts.forEach(function (w) {
                        w.exercises.forEach(function (e) {
                            // calculate total weight lifted.
                            var total = e.getTotalWeight();
                            var x = tops.find(function (o) { return o.id === e.exerciseInfoId; });
                            if (x === undefined || x === null) {
                                var exercise = { id: e.exerciseInfoId, totalWeight: e.getTotalWeight() };
                                tops.push(exercise);
                            }
                            else {
                                var weight = e.getTotalWeight();
                                if (x.totalWeight < weight) {
                                    x.totalWeight = weight;
                                }
                            }
                        });
                    });
                    var sorted = tops.sort(function (a, b) { return b.totalWeight - a.totalWeight; })
                        .slice(0, 5);
                    this.topExercises = sorted;
                    this.totalWeight = tops.map(function (x) { return x.totalWeight; })
                        .reduce(function (x, y) { return x + y; });
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'dashboard',
                        templateUrl: 'views/dashboard.html'
                    }), 
                    __metadata('design:paramtypes', [workout_service_1.WorkoutService, exercise_catalog_1.ExerciseCatalog])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
            TopExercise = (function () {
                function TopExercise() {
                }
                return TopExercise;
            }());
            exports_1("TopExercise", TopExercise);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map