import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {WorkoutRoutine} from './workout-routine';
import {WorkoutDetailComponent} from './workout-detail.component';
import {WorkoutService} from './workout.service';

@Component({
    selector: 'workouts',
    template: `
        <h2>{{title}}</h2>
        
        <ul class="workouts">
            <li *ngFor="#routine of workouts" (click)="onSelect(routine)" [class.selected]="routine === selectedWorkout">        
                <span class="badge">{{routine.id}}</span> <span class="text">{{routine.name}}</span>
            </li>
        </ul>      
        
        <workout-detail [workout]='selectedWorkout'></workout-detail> 
        `,
     directives: [WorkoutDetailComponent]
})
export class WorkoutsComponent implements OnInit { 
  constructor(private _workoutService: WorkoutService) { }
  
  public title = 'Workouts';
  
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

