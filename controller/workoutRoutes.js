const express = require("express");
const db = require("../models");
const path = require("path");

const router = express.Router();
 
router.get("/api/workouts", (req, res)=>{
    db.workouts.find().then((foundWorkout) => {
        res.json(foundWorkout);
        console.log(foundWorkout);
    })})


//delete method: last workout () 

//get - workoutinrange()

// update - addExercise ()

// create: - createExercise()

router.post("api/workouts", (req, res) => {
    db.workouts.create().then((newWorkout) => {
        res.json(newWorkout);
});
});








module.exports = router;