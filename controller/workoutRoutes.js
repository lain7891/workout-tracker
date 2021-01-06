const express = require("express")
const db = require("../models");
const path = require("path");
// const app = express();

const router = require("express").Router();
 
router.get("/api/workouts", (req, res)=>{
    db.Workout.find().then(foundWorkout => {
        res.json(foundWorkout);
        console.log(foundWorkout);
    })});

    router.put("/api/workouts/:id", (req, res)=>{
        db.Workout.findByIdAndUpdate(req.params.id, req.body).then(updateWorkout => {
            res.json(updateWorkout);
            console.log(updateWorkout);
        })})



//delete method: last workout () 

//get - workoutinrange()

// update - addExercise ()

// create: - createExercise()

router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create({body}).then((newWorkout) => {
        res.json(newWorkout);
        console.log(newWorkout)
}).catch(err =>{
res.json(err)
});
});








module.exports = router;