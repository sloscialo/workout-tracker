System.register(["./workout-routine"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var workout_routine_1;
    return {
        setters:[
            function (workout_routine_1_1) {
                workout_routine_1 = workout_routine_1_1;
            }],
        execute: function() {
            describe('On a new Exercise, ', function () {
                it('the Sets are not undefined.', function () {
                    var e = new workout_routine_1.Exercise();
                    expect(e.sets).not.toEqual(undefined);
                });
                it('the length of Sets is 0.', function () {
                    var e = new workout_routine_1.Exercise();
                    expect(e.sets.length).toEqual(0);
                });
                it('add three sets, and the length of Sets should be 3.', function () {
                    var e = new workout_routine_1.Exercise();
                    var sets = [
                        { "id": 1, "reps": 10, "weight": 100, "difficulty": workout_routine_1.Difficulty.Perfect, "comment": "" },
                        { "id": 2, "reps": 10, "weight": 100, "difficulty": workout_routine_1.Difficulty.Perfect, "comment": "" },
                        { "id": 3, "reps": 10, "weight": 100, "difficulty": workout_routine_1.Difficulty.Perfect, "comment": "" },
                    ];
                    sets.forEach(function (s) {
                        e.sets.push(s);
                    });
                    expect(e.sets.length).toEqual(sets.length);
                });
                it('add three sets with 100 lbs each, and the total weight should be 300.', function () {
                    var e = new workout_routine_1.Exercise();
                    var sets = [
                        { "id": 1, "reps": 10, "weight": 100, "difficulty": workout_routine_1.Difficulty.Perfect, "comment": "" },
                        { "id": 2, "reps": 10, "weight": 100, "difficulty": workout_routine_1.Difficulty.Perfect, "comment": "" },
                        { "id": 3, "reps": 10, "weight": 100, "difficulty": workout_routine_1.Difficulty.Perfect, "comment": "" },
                    ];
                    var total = 0;
                    sets.forEach(function (s) {
                        e.sets.push(s);
                        total += s.weight;
                    });
                    expect(e.getTotalWeight()).toEqual(total);
                });
            });
        }
    }
});
//# sourceMappingURL=workout-routine.spec.js.map