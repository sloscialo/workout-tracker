System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ExerciseCategory, Difficulty, User, Exercise;
    return {
        setters:[],
        execute: function() {
            (function (ExerciseCategory) {
                ExerciseCategory[ExerciseCategory["Chest"] = 1] = "Chest";
                ExerciseCategory[ExerciseCategory["Back"] = 2] = "Back";
                ExerciseCategory[ExerciseCategory["Legs"] = 3] = "Legs";
                ExerciseCategory[ExerciseCategory["Arms"] = 4] = "Arms";
                ExerciseCategory[ExerciseCategory["Abs"] = 5] = "Abs";
                ExerciseCategory[ExerciseCategory["Shoulders"] = 6] = "Shoulders";
            })(ExerciseCategory || (ExerciseCategory = {}));
            exports_1("ExerciseCategory", ExerciseCategory);
            (function (Difficulty) {
                Difficulty[Difficulty["TooHeavy"] = 1] = "TooHeavy";
                Difficulty[Difficulty["Heavy"] = 2] = "Heavy";
                Difficulty[Difficulty["Good"] = 3] = "Good";
                Difficulty[Difficulty["Perfect"] = 4] = "Perfect";
                Difficulty[Difficulty["Light"] = 5] = "Light";
                Difficulty[Difficulty["TooLight"] = 6] = "TooLight";
            })(Difficulty || (Difficulty = {}));
            exports_1("Difficulty", Difficulty);
            User = (function () {
                function User() {
                }
                User.prototype.toFullName = function () {
                    return this.firstName + " " + this.lastName;
                };
                User.deserialize = function (value) {
                    var o = JSON.parse(value);
                    var u = new User();
                    u.firstName = o.firstName;
                    u.id = o.id;
                    u.lastName = o.lastName;
                    u.passwordHash = o.passwordHash;
                    u.userId = o.userId;
                    return u;
                };
                return User;
            }());
            exports_1("User", User);
            Exercise = (function () {
                function Exercise() {
                    this.sets = new Array();
                }
                Exercise.prototype.getTotalWeight = function () {
                    var sum = this.sets
                        .map(function (s) { return s.weight; })
                        .reduce(function (p, c) { return p + c; });
                    return sum;
                };
                return Exercise;
            }());
            exports_1("Exercise", Exercise);
        }
    }
});
//# sourceMappingURL=workout-routine.js.map