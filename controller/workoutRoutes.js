const express = require("express");
const db = require("../models/workouts.js");
const path = require("path");

const router = require("express").Router();
 
router.get("/api/workouts", (req, res)=>{
    db.workouts.find({}).then(foundWorkout => {
        res.json(foundWorkout);
        console.log(foundWorkout);
    })})


//delete method: last workout () 

//get - workoutinrange()

// update - addExercise ()

// create: - createExercise()

router.post("api/workouts", (req, res) => {
    Workout.create({}).then((newWorkout) => {
        res.json(newWorkout);
});
});








module.exports = router;