const express = require("express")
const db = require("../models");
const path = require("path");
const app = express();

const router = require("express").Router();
 
app.get("/api/workouts", (req, res)=>{
    db.Workout.find().then(foundWorkout => {
        res.json(foundWorkout);
        console.log(foundWorkout);
    })})





//delete method: last workout () 

//get - workoutinrange()

// update - addExercise ()

// create: - createExercise()

app.post("api/workouts", (req, res) => {
    Workout.create({}).then((newWorkout) => {
        res.json(newWorkout);
});
});








module.exports = router;