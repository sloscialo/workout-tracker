import {Injectable} from 'angular2/core';
import {WORKOUTS, EXERCISES} from './mock-data';

@Injectable()
export class WorkoutService
{
  getWorkouts()
  {
    return Promise.resolve(WORKOUTS);
  }
  
  getExerciseCatalog()
  {
    return Promise.resolve(EXERCISES);
  }
}