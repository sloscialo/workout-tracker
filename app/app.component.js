System.register(['angular2/core', 'angular2/router', './workout.service', './authentication.service', './workouts.component', './dashboard.component', './login.component', './exercise-catalog', './utilities'], function(exports_1, context_1) {
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
    var core_1, router_1, workout_service_1, authentication_service_1, workouts_component_1, dashboard_component_1, login_component_1, exercise_catalog_1, utilities_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (workout_service_1_1) {
                workout_service_1 = workout_service_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (workouts_component_1_1) {
                workouts_component_1 = workouts_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (exercise_catalog_1_1) {
                exercise_catalog_1 = exercise_catalog_1_1;
            },
            function (utilities_1_1) {
                utilities_1 = utilities_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_authService, _router) {
                    this._authService = _authService;
                    this._router = _router;
                    this.title = 'Workout Tracker';
                }
                AppComponent.prototype.onLogout = function () {
                    var _this = this;
                    this._authService.logout()
                        .then(function () { return _this._router.navigate(['Login']); });
                };
                AppComponent.prototype.disableLogout = function () {
                    return utilities_1.isLoggedIn();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'workout-tracker',
                        templateUrl: 'views/main.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            workout_service_1.WorkoutService,
                            authentication_service_1.AuthenticationService,
                            exercise_catalog_1.ExerciseCatalog
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: "/",
                            redirectTo: ['Dashboard'],
                            useAsDefault: true
                        },
                        {
                            path: '/login',
                            name: 'Login',
                            component: login_component_1.LoginComponent
                        },
                        {
                            path: '/workouts',
                            name: 'Workouts',
                            component: workouts_component_1.WorkoutsComponent
                        },
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map