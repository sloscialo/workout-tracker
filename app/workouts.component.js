System.register(['angular2/core', './workout-detail.component', './workout.service'], function(exports_1, context_1) {
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
    var core_1, workout_detail_component_1, workout_service_1;
    var WorkoutsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (workout_detail_component_1_1) {
                workout_detail_component_1 = workout_detail_component_1_1;
            },
            function (workout_service_1_1) {
                workout_service_1 = workout_service_1_1;
            }],
        execute: function() {
            WorkoutsComponent = (function () {
                function WorkoutsComponent(_workoutService) {
                    this._workoutService = _workoutService;
                    this.title = 'Workouts';
                }
                WorkoutsComponent.prototype.ngOnInit = function () {
                    this.getWorkouts();
                };
                WorkoutsComponent.prototype.onSelect = function (routine) {
                    this.selectedWorkout = routine;
                };
                WorkoutsComponent.prototype.getWorkouts = function () {
                    var _this = this;
                    this._workoutService.getWorkouts().then(function (workouts) { return _this.workouts = workouts; });
                };
                WorkoutsComponent = __decorate([
                    core_1.Component({
                        selector: 'workouts',
                        template: "\n        <h2>{{title}}</h2>\n        \n        <ul class=\"workouts\">\n            <li *ngFor=\"#routine of workouts\" (click)=\"onSelect(routine)\" [class.selected]=\"routine === selectedWorkout\">        \n                <span class=\"badge\">{{routine.id}}</span> <span class=\"text\">{{routine.name}}</span>\n            </li>\n        </ul>      \n        \n        <workout-detail [workout]='selectedWorkout'></workout-detail> \n        ",
                        directives: [workout_detail_component_1.WorkoutDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [workout_service_1.WorkoutService])
                ], WorkoutsComponent);
                return WorkoutsComponent;
            }());
            exports_1("WorkoutsComponent", WorkoutsComponent);
        }
    }
});
//# sourceMappingURL=workouts.component.js.map