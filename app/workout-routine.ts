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
  exercises: Set[];
}

// Represents one exercise performed over multiple sets.
export interface Workout {
  id: number;
  exerciseId: number;
  sets: Set[];  
}

// Represents a type of exercise.
export interface Exercise {
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