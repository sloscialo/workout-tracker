System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Constants;
    function isLoggedIn() {
        return !!localStorage.getItem(Constants.TOKEN);
    }
    exports_1("isLoggedIn", isLoggedIn);
    function createHashCode(s) {
        return s.split("")
            .reduce(function (a, b) {
            a = ((a << 5) - a) + b.charCodeAt(0);
            return a & a;
        }, 0);
    }
    exports_1("createHashCode", createHashCode);
    return {
        setters:[],
        execute: function() {
            Constants = (function () {
                function Constants() {
                }
                Constants.TOKEN = "authToken";
                Constants.USER = "user";
                return Constants;
            }());
            exports_1("Constants", Constants);
        }
    }
});
//# sourceMappingURL=utilities.js.map