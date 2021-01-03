const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
 
});

const workout = mongoose.model("workouts", workoutsSchema);

module.exports = workouts;