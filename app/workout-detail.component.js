System.register(['angular2/core', './workout.service', "./groupFilter", 'lodash'], function(exports_1, context_1) {
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
    var core_1, workout_service_1, groupFilter_1, _;
    var WorkoutDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (workout_service_1_1) {
                workout_service_1 = workout_service_1_1;
            },
            function (groupFilter_1_1) {
                groupFilter_1 = groupFilter_1_1;
            },
            function (_1) {
                _ = _1;
            }],
        execute: function() {
            WorkoutDetailComponent = (function () {
                function WorkoutDetailComponent(_workoutService) {
                    this._workoutService = _workoutService;
                }
                WorkoutDetailComponent.prototype.ngOnInit = function () {
                    this.getExerciseCatalog();
                };
                WorkoutDetailComponent.prototype.getExerciseCatalog = function () {
                    var _this = this;
                    this._workoutService.getExerciseCatalog().then(function (exercises) { return _this.exerciseCatalog = exercises; });
                };
                WorkoutDetailComponent.prototype.getExerciseName = function (id) {
                    var exercise = this.exerciseCatalog.find(function (o) { return o.id == id; });
                    if (exercise == null)
                        return "";
                    return exercise.name;
                };
                /*
                getSetsByGroup(sets: Set[]) : Observable<GroupedObservable<number, Set>> {
                  var g = Observable.fromArray(sets).groupBy(x => x.exerciseId, x => x);
                  
                  return g;
                }
                */
                WorkoutDetailComponent.prototype.getGroups = function (sets) {
                    var g = _.groupBy(sets, 'exerciseId');
                    return g;
                };
                WorkoutDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'workout-detail',
                        inputs: ['workout'],
                        pipes: [groupFilter_1.GroupByFilter],
                        template: "\n    <div *ngIf=\"workout\">\n        <h2><strong>{{workout.name}}</strong> details!</h2>\n        <div><label>id: </label>{{workout.id}}</div>\n        <div>\n            <label>name: </label>\n            <input [(ngModel)]=\"workout.name\" placeholder=\"Workout Name\" />\n        </div>\n        <div *ngIf=\"workout.exercises\">\n          <h3>Sets</h3>\n          <div *ngFor=\"#groups of getGroups(workout.exercises) | groupByFilter\">\n            <div>{{groups.key}} - {{getExerciseName(groups.key)}}</div>\n            <div *ngFor=\"#set of groups.value\" class='set'>\n              <div>Set #{{set.id}}</div>\n              <div><label>Reps:</label><input [(ngModel)]=\"set.reps\" placeholder=\"# reps\" /></div>\n              <div><label>Weight:</label><input [(ngModel)]=\"set.weight\" placeholder=\"weight\" /></div>\n              <hr/>\n            </div>\n          </div>\n        </div>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [workout_service_1.WorkoutService])
                ], WorkoutDetailComponent);
                return WorkoutDetailComponent;
            }());
            exports_1("WorkoutDetailComponent", WorkoutDetailComponent);
        }
    }
});
//# sourceMappingURL=workout-detail.component.js.map