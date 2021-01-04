const express = require("express");
const db = require("../models");
const path = require("path");

const router = express.Router();

// router.get('/', function(req, res){
//     res.render('index.html');
// });

// VIEW ROUTES

 
router.get("/api/workouts", (req, res)=>{
    db.workouts.find().then((foundWorkout) => {
        res.json(foundWorkout);
        console.log(foundWorkout);
    })})









module.exports = router;