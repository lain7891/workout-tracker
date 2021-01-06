const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutsSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
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

    }],
    totalDuration: {
        type: Number,
        default: 0
    }
 
});

const Workouts = mongoose.model("Workouts", WorkoutsSchema);

module.exports = Workouts;