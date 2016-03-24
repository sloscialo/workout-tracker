System.register(['angular2/core', './workout.service'], function(exports_1, context_1) {
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
    var core_1, workout_service_1;
    var WorkoutDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (workout_service_1_1) {
                workout_service_1 = workout_service_1_1;
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
                WorkoutDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'workout-detail',
                        inputs: ['workout'],
                        template: "\n    <div *ngIf=\"workout\">\n        <h2><strong>{{workout.name}}</strong> details!</h2>\n        <div><label>id: </label>{{workout.id}}</div>\n        <div>\n            <label>name: </label>\n            <input [(ngModel)]=\"workout.name\" placeholder=\"Workout Name\" />\n        </div>\n        <div *ngIf=\"workout.exercises\">\n          <h3>Exercises</h3>\n          <div *ngFor=\"#exercise of workout.exercises\">\n            <h4>{{exercise.id}}. {{getExerciseName(exercise.exerciseInfoId)}}</h4>\n            <div *ngFor=\"#set of exercise.sets\">\n              <div>Set #{{set.id}}</div>\n              <div><label>Reps: </label><input [(ngModel)]=\"set.reps\" placeholder=\"Reps\" /></div>\n              <div><label>Weight: </label><input [(ngModel)]=\"set.weight\" placeholder=\"Weight\" /></div>\n              <div><label>Comment: </label><input [(ngModel)]=\"set.comment\" placeholder=\"Comments\" /></div>\n            </div>\n          </div>\n        </div>\n    </div>\n  "
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