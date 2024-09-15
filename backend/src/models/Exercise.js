export interface Exercise {
    id: string;
    name: string;
    sets: number;
    reps?: number;
    duration?: number; //Optional duration in seconds (for exercises like planks)
    createdAd: Date;
}