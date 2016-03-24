System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ExerciseCategory;
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
        }
    }
});
//# sourceMappingURL=workout-routine.js.map