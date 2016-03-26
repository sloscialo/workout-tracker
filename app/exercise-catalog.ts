import { Injectable } from 'angular2/core';
import { WorkoutService } from './workout.service';
import { ExerciseInfo } from './workout-routine';

@Injectable()
export class ExerciseCatalog
{
  exerciseCatalog: ExerciseInfo[] = [];
    
  constructor(private _workoutService: WorkoutService) { }
   
  getExerciseName(id: number) {
    if (this.exerciseCatalog.length === 0)
    {
      this.getExerciseCatalog();
    }
    
    var exercise = this.exerciseCatalog.find(o => o.id == id);
    if (exercise == null) return "";
    
    return exercise.name;
  }
  
  private getExerciseCatalog()  {
    this._workoutService.getExerciseCatalog()
        .then(exercises => this.exerciseCatalog = exercises);
  }
}