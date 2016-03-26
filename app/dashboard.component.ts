import { Component, OnInit } from 'angular2/core';
import { WorkoutRoutine } from './workout-routine';
import { WorkoutService } from './workout.service';
import { ExerciseCatalog } from './exercise-catalog';
import * as _ from 'lodash';

@Component({
  selector: 'dashboard',
  templateUrl: 'views/dashboard.html'
})
export class DashboardComponent implements OnInit {
  topExercises: TopExercise[];
  topExercise: TopExercise;
  totalWeight: number;
  
  constructor(private _workoutService: WorkoutService, private _exerciseCatalog: ExerciseCatalog) { }
  
  ngOnInit() {
    this._workoutService.getWorkouts()
        .then(o => {
          this._computeTopExercises(o);
        })
  }
  
  gotoDetail() {
    
  }
  
  getExerciseName(id: number) {
    return this._exerciseCatalog.getExerciseName(id);  
  }
  
  _computeTopExercises(workouts: WorkoutRoutine[]) {
    var tops: TopExercise[] = [];
    
    workouts.forEach(w => {
      w.exercises.forEach(e => {
        // calculate total weight lifted.
        var total = e.getTotalWeight();
        var x =_.find(tops, o => { o.id === e.exerciseInfoId })
        if (x === undefined || x === null)
        {
          var exercise: TopExercise = { id: e.exerciseInfoId, totalWeight: e.getTotalWeight() }
          tops.push(exercise);
        }
        else
        {
          var weight = e.getTotalWeight();
          if (x.totalWeight < weight)
          {
            x.totalWeight = weight;
          }
        }
      })
    });
    
    var sorted = tops.sort((a,b) => { return b.totalWeight - a.totalWeight })
                     .slice(0, 5);
    
    this.topExercises = sorted;
    this.totalWeight = tops.map(x => x.totalWeight)
                           .reduce((x,y) => { return x + y });
  }
}

export class TopExercise
{
  id: number;
  totalWeight: number;
}