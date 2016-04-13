System.register(['angular2/core', './mock-users', './utilities'], function(exports_1, context_1) {
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
    var core_1, mock_users_1, utilities_1;
    var AuthenticationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_users_1_1) {
                mock_users_1 = mock_users_1_1;
            },
            function (utilities_1_1) {
                utilities_1 = utilities_1_1;
            }],
        execute: function() {
            AuthenticationService = (function () {
                function AuthenticationService() {
                }
                AuthenticationService.prototype.login = function (userName, password) {
                    // TODO: Replace with call to service.
                    var user = mock_users_1.USERS.find(function (u) { return u.passwordHash === utilities_1.createHashCode(password).toString(16); });
                    if (user === null || user === undefined) {
                        return Promise.reject("User not found, or password incorrect.");
                    }
                    return Promise.resolve(user);
                };
                AuthenticationService.prototype.logout = function () {
                    try {
                        this.removeToken();
                        return Promise.resolve(true);
                    }
                    catch (error) {
                        return Promise.reject("Could not log out: " + error.message);
                    }
                };
                AuthenticationService.prototype.getToken = function () {
                    return localStorage.getItem(utilities_1.Constants.TOKEN);
                };
                AuthenticationService.prototype.setToken = function (value) {
                    localStorage.setItem(utilities_1.Constants.TOKEN, value);
                };
                AuthenticationService.prototype.removeToken = function () {
                    localStorage.removeItem(utilities_1.Constants.TOKEN);
                };
                AuthenticationService.prototype.createToken = function (user) {
                    var hash = Date.now();
                    hash = (hash * 23) ^ utilities_1.createHashCode(user.userId);
                    hash = (hash * 23) ^ utilities_1.createHashCode(user.firstName);
                    hash = (hash * 23) ^ utilities_1.createHashCode(user.lastName);
                    hash = (hash * 23) ^ utilities_1.createHashCode(user.passwordHash);
                    return hash.toString(16);
                };
                AuthenticationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AuthenticationService);
                return AuthenticationService;
            }());
            exports_1("AuthenticationService", AuthenticationService);
        }
    }
});
//# sourceMappingURL=authentication.service.js.map