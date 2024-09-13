export interface WorkoutPlan {
  id: string;
  userId: string;
  title: string;
  description?: string; //Optional
  days: {
    [day: string]: string[]; //Exercises by day, array of Exercise IDs
  };
  createdAt: Date;
  updatedAt: Date;
}
