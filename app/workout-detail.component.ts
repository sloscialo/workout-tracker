import { Component, OnInit } from 'angular2/core';
import { WorkoutRoutine, Exercise, ExerciseInfo, Set } from './workout-routine';
import { WorkoutService } from './workout.service';
import { ExerciseCatalog } from './exercise-catalog';

@Component({
  selector: 'workout-detail',
  inputs: ['workout'],
  templateUrl: 'views/details.html'
})
export class WorkoutDetailComponent  { 
  constructor(private _workoutService: WorkoutService, private _exerciseCatalog: ExerciseCatalog) { }

  workout: WorkoutRoutine;
  exercise: Exercise;
  set: Set;
  
  getExerciseName(id: number) {
    return this._exerciseCatalog.getExerciseName(id);
  }
}
