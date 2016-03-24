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
  exercises: Exercise[];
}

// Represents one exercise performed over multiple sets.
export interface Exercise {
  id: number;
  exerciseInfoId: number;
  sets: Set[];  
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