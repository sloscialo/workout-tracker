export enum ExerciseCategory {
    Chest = 1,
    Back,
    Legs,
    Arms,
    Abs,
    Shoulders
}

// Represents a workout routine made up of different exercises.
export interface WorkoutRoutine {
  id: number;
  name: string;
  exercises: IExercise[];
}

// Represents one exercise performed over multiple sets.
export interface IExercise {
  id: number;
  exerciseInfoId: number;
  sets: Set[];
  
  getTotalWeight(): number;  
}

export class Exercise implements IExercise{
  id: number;
  exerciseInfoId: number;
  sets: Set[];
  
  getTotalWeight() : number {
    var sum = this.sets
                  .map(s => s.weight)
                  .reduce((p,c) => { return p + c;});
    return sum;
  }
}

// Represents information about a particular exercise.
export interface ExerciseInfo {
  id: number;
  name: string;
  category: ExerciseCategory;
  isPerSide: boolean;
}

// Represents one set for a particular exercise.
export interface Set
{
  id: number;
  reps: number;
  weight: number;
  comment: string;
}