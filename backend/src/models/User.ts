export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  workoutPlans: string[]; //workout plan IDs
}
