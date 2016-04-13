System.register(['angular2/core', 'angular2/router', './authentication.service', './utilities'], function(exports_1, context_1) {
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
    var core_1, router_1, authentication_service_1, utilities_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (utilities_1_1) {
                utilities_1 = utilities_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_authService, _router) {
                    this._authService = _authService;
                    this._router = _router;
                }
                LoginComponent.prototype.login = function () {
                    var _this = this;
                    if (this.isInvalid(this.userName) || this.isInvalid(this.userPassword)) {
                        // Throw login error.
                        this.setError("Must enter a user name and password.");
                        return;
                    }
                    this.setError(null);
                    this._authService.login(this.userName, this.userPassword)
                        .then(function (user) {
                        _this._authService.setToken(user);
                        sessionStorage.setItem(utilities_1.Constants.USER, JSON.stringify(user));
                        _this._router.navigate(['Dashboard']);
                    })
                        .catch(function (e) {
                        _this._authService.removeToken();
                        _this.setError("There was an error: " + e);
                    });
                };
                LoginComponent.prototype.setError = function (message) {
                    this.error = message;
                };
                LoginComponent.prototype.isInvalid = function (o) {
                    return o === null || o === undefined;
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: "login",
                        template: "\n      <div class=\"col-sm-12 col-md-5\">\n        <label for=\"userName\">User name:</label>\n        <input type=\"text\" class=\"form-control\" id=\"userName\" [(ngModel)]=\"userName\" placeholder=\"User name\" />\n        \n        <br/>\n        \n        <label for=\"userPassword\">Password:</label>\n        <input type=\"password\" class=\"form-control\" id=\"userPassword\" [(ngModel)]=\"userPassword\" placeholder=\"Password\" />\n        \n        <hr/>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"login()\">Login</button>\n        \n        <h2 *ngIf=\"token\">{{token}}</h2>\n        <h5 style=\"color: red\" *ngIf=\"error\">{{error}}</h5>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, router_1.Router])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map