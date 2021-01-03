const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    excercises: [{
        type: {
            type: String,
            trim: true,
            require: "Type is required"
        },
        name: {
            type: String,
            trim: true,
            require: "Name is required"
        },
        duration: {
            type: Number
        },
        weight: {
            type: Number
        },
        reps: {
          type: Number  
        },
        sets: {
            type: Number
        }

    }]
 
});

const workout = mongoose.model("workouts", workoutsSchema);

module.exports = workouts;