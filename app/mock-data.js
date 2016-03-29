System.register(['./workout-routine'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var workout_routine_1;
    var empty, WORKOUTS, EXERCISES, fullBodyExercises, upperBodyExercises;
    function CreateWorkout(routineId, exercises, reps) {
        var routine = [];
        exercises.forEach(function (id) {
            var exercise = new workout_routine_1.Exercise();
            var index = 0;
            exercise.id = ++index;
            exercise.exerciseInfoId = id;
            exercise.sets = [];
            var setCount = 0;
            reps.forEach(function (rep) {
                var weight = Math.floor((Math.random() * 100) + 10);
                var set = { "id": ++setCount, "reps": rep, "weight": weight, "comment": "" };
                exercise.sets.push(set);
            });
            routine.push(exercise);
        });
        var wr = WORKOUTS.find(function (x) { return x.id === routineId; });
        if (wr === null || wr === undefined) {
            throw "Cannot find workout routine specified.";
        }
        wr.exercises = routine;
    }
    return {
        setters:[
            function (workout_routine_1_1) {
                workout_routine_1 = workout_routine_1_1;
            }],
        execute: function() {
            empty = [];
            exports_1("WORKOUTS", WORKOUTS = [
                { "id": 1, "name": "M&F - Full Body", "exercises": empty },
                { "id": 2, "name": "M&F - Upper Body", "exercises": empty },
                { "id": 3, "name": "M&F - Lower Body", "exercises": empty },
                { "id": 4, "name": "M&F - Push", "exercises": empty },
                { "id": 5, "name": "M&F - Pull", "exercises": empty },
                { "id": 6, "name": "M&F - Legs", "exercises": empty },
                { "id": 7, "name": "M&F - Chest, Triceps, Calves", "exercises": empty },
                { "id": 8, "name": "M&F - Legs & Abs", "exercises": empty },
                { "id": 9, "name": "M&F - Shoulders & Calves", "exercises": empty },
                { "id": 10, "name": "M&F - Back, Biceps & Abs", "exercises": empty },
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
                { "id": 12, "name": "Dumbbell Bench Press", "category": workout_routine_1.ExerciseCategory.Chest, "isPerSide": false },
                { "id": 13, "name": "Leg Press", "category": workout_routine_1.ExerciseCategory.Legs, "isPerSide": false },
                { "id": 14, "name": "Lying Leg Curl", "category": workout_routine_1.ExerciseCategory.Legs, "isPerSide": false },
                { "id": 15, "name": "Standing Calf Raise", "category": workout_routine_1.ExerciseCategory.Legs, "isPerSide": false },
            ]);
            // Build Sample Workout Routine
            fullBodyExercises = [12, 4, 5, 13, 14, 10, 7, 15, 11];
            upperBodyExercises = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
            CreateWorkout(1, fullBodyExercises, [8, 10, 12]);
            CreateWorkout(2, upperBodyExercises, [10, 12, 15]);
        }
    }
});
//# sourceMappingURL=mock-data.js.map