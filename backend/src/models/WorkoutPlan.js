/**
 * @typedef {Object} WorkoutPlan
 * @property {string} id - The unique identifier for the workout plan.
 * @property {string} userId - The unique identifier for the user associated with the workout plan.
 * @property {string} title - The title of the workout plan.
 * @property {string} [description] - A description of the workout plan (optional).
 * @property {Object.<string, string[]>} days - Exercises by day, where the key is the day (e.g., 'Monday') and the value is an array of Exercise IDs.
 * @property {Date} createdAt - The date when the workout plan was created.
 * @property {Date} updatedAt - The date when the workout plan was last updated.
 */
