import {Injectable} from 'angular2/core';
import {WORKOUTS} from './mock-data';
import {EXERCISES} from './mock-data';

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