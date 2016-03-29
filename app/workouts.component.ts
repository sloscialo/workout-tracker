import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {WorkoutRoutine} from './workout-routine';
import {WorkoutDetailComponent} from './workout-detail.component';
import {WorkoutService} from './workout.service';

@Component({
  selector: 'workouts',
  templateUrl: 'views/workouts.html',
  directives: [WorkoutDetailComponent]
})
export class WorkoutsComponent implements OnInit { 
  constructor(private _workoutService: WorkoutService) { }
  
  public title = 'Workout Routines';
  
  workouts: WorkoutRoutine[];
  routine: WorkoutRoutine;
  selectedWorkout: WorkoutRoutine;
  
  ngOnInit() {
    this.getWorkouts();
  }
  
  onSelect(routine: WorkoutRoutine) {
      this.selectedWorkout = routine;
  }
  
  getWorkouts() {
    this._workoutService.getWorkouts()
        .then(workouts => this.workouts = workouts);
  }
}

