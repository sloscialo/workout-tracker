import {Difficulty, WorkoutRoutine, Exercise, ExerciseInfo, ExerciseCategory} from './workout-routine';
import {Set} from './workout-routine';

var empty: Array<Exercise> = [];

export var WORKOUTS: WorkoutRoutine[] = [
  { "id": 1, "name": "M&F - Full Body", "exercises" : empty },
  { "id": 2, "name": "M&F - Upper Body", "exercises" : empty },
  { "id": 3, "name": "M&F - Lower Body", "exercises" : empty },
  { "id": 4, "name": "M&F - Push", "exercises" : empty },
  { "id": 5, "name": "M&F - Pull", "exercises" : empty },
  { "id": 6, "name": "M&F - Legs", "exercises" : empty },
  { "id": 7, "name": "M&F - Chest, Triceps, Calves", "exercises" : empty },
  { "id": 8, "name": "M&F - Legs & Abs", "exercises" : empty },
  { "id": 9, "name": "M&F - Shoulders & Calves", "exercises" : empty },
  { "id": 10, "name": "M&F - Back, Biceps & Abs", "exercises" : empty },
];

export var EXERCISES: ExerciseInfo[] = [
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
  { "id": 12, "name": "Dumbbell Bench Press", "category": ExerciseCategory.Chest, "isPerSide": false },
  { "id": 13, "name": "Leg Press", "category": ExerciseCategory.Legs, "isPerSide": false },
  { "id": 14, "name": "Lying Leg Curl", "category": ExerciseCategory.Legs, "isPerSide": false },
  { "id": 15, "name": "Standing Calf Raise", "category": ExerciseCategory.Legs, "isPerSide": false },
];

// Build Sample Workout Routine
var fullBodyExercises: number[] = [12, 4, 5, 13, 14, 10, 7, 15, 11]
var upperBodyExercises: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

CreateWorkout(1, fullBodyExercises, [8, 10, 12]);
CreateWorkout(2, upperBodyExercises, [10, 12, 15]);

function CreateWorkout(routineId: number, exercises: number[], reps: number[])
{
  var routine: Array<Exercise> = [];
  var index = 0;
  
  exercises.forEach(id => {
    var exercise: Exercise = new Exercise();
    
    exercise.id = ++index;
    exercise.exerciseInfoId = id;
    exercise.sets = [];
    
    var setCount = 0;
    reps.forEach(rep => {   
      var weight = Math.floor((Math.random() * 100) + 10);    
      var set: Set = { "id": ++setCount, "reps": rep, "weight": weight, "difficulty": Difficulty.Perfect, "comment": ""};
      exercise.sets.push(set);
    });
    
    routine.push(exercise);
  });
  
  var wr = WORKOUTS.find(x => x.id === routineId);
  if (wr === null || wr === undefined)
  {
    throw "Cannot find workout routine specified.";
  }
  
  wr.exercises = routine;
}

