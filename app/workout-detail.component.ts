import { Component, OnInit } from 'angular2/core';
import { WorkoutRoutine, Exercise, ExerciseInfo, Set } from './workout-routine';
import { WorkoutService } from './workout.service';
import { ExerciseCatalog } from './exercise-catalog';

@Component({
  selector: 'workout-detail',
  inputs: ['workout'],
  template: `
    <div *ngIf="workout">
        <h2><strong>{{workout.name}}</strong> details!</h2>
        <div><label>id: </label>{{workout.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="workout.name" placeholder="Workout Name" />
        </div>
        <div *ngIf="workout.exercises">
          <h3>Exercises</h3>
          <div *ngFor="#exercise of workout.exercises">
            <h4>{{exercise.id}}. {{getExerciseName(exercise.exerciseInfoId)}}</h4>
            <div *ngFor="#set of exercise.sets">
              <div>Set #{{set.id}}</div>
              <div><label>Reps: </label><input [(ngModel)]="set.reps" placeholder="Reps" /></div>
              <div><label>Weight: </label><input [(ngModel)]="set.weight" placeholder="Weight" /></div>
              <div><label>Comment: </label><input [(ngModel)]="set.comment" placeholder="Comments" /></div>
            </div>
          </div>
        </div>
    </div>
  `
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
