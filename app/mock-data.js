System.register(['./workout-routine'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var workout_routine_1;
    var upperBody, upperBodyExercises, reps, index, WORKOUTS, EXERCISES;
    return {
        setters:[
            function (workout_routine_1_1) {
                workout_routine_1 = workout_routine_1_1;
            }],
        execute: function() {
            // Build UpperBody Workout Routine
            upperBody = [];
            upperBodyExercises = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
            reps = [10, 12, 15];
            index = 0;
            upperBodyExercises.forEach(function (id) {
                var exercise = { "id": ++index, "exerciseInfoId": id, "sets": [] };
                var setCount = 0;
                reps.forEach(function (rep) {
                    var set = { "id": ++setCount, "reps": rep, "weight": 0, "comment": "" };
                    exercise.sets.push(set);
                });
                upperBody.push(exercise);
            });
            exports_1("WORKOUTS", WORKOUTS = [
                { "id": 1, "name": "M&F - Full Body", "exercises": [] },
                { "id": 2, "name": "M&F - Upper Body", "exercises": upperBody },
                { "id": 3, "name": "M&F - Lower Body", "exercises": [] },
                { "id": 4, "name": "M&F - Push", "exercises": [] },
                { "id": 5, "name": "M&F - Pull", "exercises": [] },
                { "id": 6, "name": "M&F - Legs", "exercises": [] },
                { "id": 7, "name": "M&F - Chest, Triceps, Calves", "exercises": [] },
                { "id": 8, "name": "M&F - Legs & Abs", "exercises": [] },
                { "id": 9, "name": "M&F - Shoulders & Calves", "exercises": [] },
                { "id": 10, "name": "M&F - Back, Biceps & Abs", "exercises": [] },
            ]);
            exports_1("EXERCISES", EXERCISES = [
                { "id": 1, "name": "Barbell Bench Press", "category": workout_routine_1.ExerciseCategory.Chest, "isPerSide": false },
                { "id": 2, "name": "Flat Dumbbell Fly", "category": workout_routine_1.ExerciseCategory.Chest, "isPerSide": false },
                { "id": 3, "name": "Barbell Bent-Over Row", "category": workout_routine_1.ExerciseCategory.Back, "isPerSide": false },
                { "id": 4, "name": "Lat Pulldown", "category": workout_routine_1.ExerciseCategory.Back, "isPerSide": false },
                { "id": 5, "name": "Overhead Dumbbell Press", "category": workout_routine_1.ExerciseCategory.Shoulders, "isPerSide": false },
                { "id": 6, "name": "Dumbbell Lateral Raise", "category": workout_routine_1.ExerciseCategory.Shoulders, "isPerSide": false },
                { "id": 7, "name": "Barbell Biceps Curl", "category": workout_routine_1.ExerciseCategory.Arms, "isPerSide": false },
                { "id": 8, "name": "Machine Preacher Curl", "category": workout_routine_1.ExerciseCategory.Arms, "isPerSide": false },
                { "id": 9, "name": "Lying Ez-Bar Triceps Extension", "category": workout_routine_1.ExerciseCategory.Arms, "isPerSide": false },
                { "id": 10, "name": "Rope Pressdown", "category": workout_routine_1.ExerciseCategory.Arms, "isPerSide": false },
                { "id": 11, "name": "Crunch", "category": workout_routine_1.ExerciseCategory.Abs, "isPerSide": false },
            ]);
        }
    }
});
//# sourceMappingURL=mock-data.js.map