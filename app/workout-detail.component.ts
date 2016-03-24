import {Component, OnInit} from 'angular2/core';
import {WorkoutRoutine, Exercise, Set} from './workout-routine';
//import {Observable} from 'rxjs/Rx';
//import {groupBy, GroupedObservable} from 'rxjs/operator/groupBy';
import {WorkoutService} from './workout.service';
import {GroupByFilter} from "./groupFilter";
import * as _ from 'lodash';

@Component({
  selector: 'workout-detail',
  inputs: ['workout'],
  pipes: [GroupByFilter],
  template: `
    <div *ngIf="workout">
        <h2><strong>{{workout.name}}</strong> details!</h2>
        <div><label>id: </label>{{workout.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="workout.name" placeholder="Workout Name" />
        </div>
        <div *ngIf="workout.exercises">
          <h3>Sets</h3>
          <div *ngFor="#groups of getGroups(workout.exercises) | groupByFilter">
            <div>{{groups.key}} - {{getExerciseName(groups.key)}}</div>
            <div *ngFor="#set of groups.value" class='set'>
              <div>Set #{{set.id}}</div>
              <div><label>Reps:</label><input [(ngModel)]="set.reps" placeholder="# reps" /></div>
              <div><label>Weight:</label><input [(ngModel)]="set.weight" placeholder="weight" /></div>
              <hr/>
            </div>
          </div>
        </div>
    </div>
  `
})
export class WorkoutDetailComponent implements OnInit { 
  constructor(private _workoutService: WorkoutService) { }

  exerciseCatalog: Exercise[];
  
  workout: WorkoutRoutine;
  custom: any;
  groups: any;
  set: Set;
  
  ngOnInit() {
    this.getExerciseCatalog();
  }
  
  getExerciseCatalog()  {
    this._workoutService.getExerciseCatalog().then(exercises => this.exerciseCatalog = exercises);
  }
  
  getExerciseName(id: number) {
    var exercise = this.exerciseCatalog.find(o => o.id == id);
    if (exercise == null) return "";
    
    return exercise.name;
  }
  /*
  getSetsByGroup(sets: Set[]) : Observable<GroupedObservable<number, Set>> {
    var g = Observable.fromArray(sets).groupBy(x => x.exerciseId, x => x);
    
    return g;
  }
  */
  
  getGroups(sets: Set[]) {
    var g = _.groupBy(sets, 'exerciseId');
    
    return g
  }
}
