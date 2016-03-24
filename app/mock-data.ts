import {WorkoutRoutine} from './workout-routine';
import {Exercise} from './workout-routine';
import {ExerciseCategory} from './workout-routine';
import {Set} from './workout-routine';

// Build UpperBody Workout Routine
var upperBody: Array<Set> = [];
var upperBodyExercises: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var reps: number[] = [10, 12, 15];

upperBodyExercises.forEach(id => {
  var index = 0;
  reps.forEach(rep => { 
    index++;
    var s: Set = { "exerciseId": id, "id": index, "reps": rep, "weight": 0 };
    upperBody.push(s);
  });
});

export var WORKOUTS: WorkoutRoutine[] = [
  { "id": 1, "name": "M&F - Full Body", "exercises" : [] },
  { "id": 2, "name": "M&F - Upper Body", "exercises" : upperBody },
  { "id": 3, "name": "M&F - Lower Body", "exercises" : [] },
  { "id": 4, "name": "M&F - Push", "exercises" : [] },
  { "id": 5, "name": "M&F - Pull", "exercises" : [] },
  { "id": 6, "name": "M&F - Legs", "exercises" : [] },
  { "id": 7, "name": "M&F - Chest, Triceps, Calves", "exercises" : [] },
  { "id": 8, "name": "M&F - Legs & Abs", "exercises" : [] },
  { "id": 9, "name": "M&F - Shoulders & Calves", "exercises" : [] },
  { "id": 10, "name": "M&F - Back, Biceps & Abs", "exercises" : [] },
];

export var EXERCISES: Exercise[] = [
  { "id": 1, "name": "Barbell Bench Press", "category": ExerciseCategory.Chest, "isPerSide": false },
  { "id": 2, "name": "Flat Dumbbell Fly", "category": ExerciseCategory.Chest, "isPerSide": false },
  { "id": 3, "name": "Barbell Bent-Over Row", "category": ExerciseCategory.Back, "isPerSide": false },
  { "id": 4, "name": "Lat Pulldown", "category": ExerciseCategory.Back, "isPerSide": false },
  { "id": 5, "name": "Overhead Dumbbell Press", "category": ExerciseCategory.Shoulders, "isPerSide": false },
  { "id": 6, "name": "Dumbbell Lateral Raise", "category": ExerciseCategory.Shoulders, "isPerSide": false },
  { "id": 7, "name": "Barbell Biceps Curl", "category": ExerciseCategory.Arms, "isPerSide": false },
  { "id": 8, "name": "Machine Preacher Curl", "category": ExerciseCategory.Arms, "isPerSide": false },
  { "id": 9, "name": "Lying Ez-Bar Triceps Extension", "category": ExerciseCategory.Arms, "isPerSide": false },
  { "id": 10, "name": "Rope Pressdown", "category": ExerciseCategory.Arms, "isPerSide": false },
  { "id": 11, "name": "Crunch", "category": ExerciseCategory.Abs, "isPerSide": false },    
];