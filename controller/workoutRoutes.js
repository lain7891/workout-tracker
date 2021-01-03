const express = require("express");
const db = require("../models");
const path = require("path");

const router = express.Router();

// router.get('/', function(req, res){
//     res.render('index.html');
// });

// VIEW ROUTES

router.get("/index", (req,res)=> {
    res.sendFile(path.join(__dirname, "/public/index.html"))
});

router.get("/stats", (req,res)=> {
    res.sendFile(path.join(__dirname, "/public/stats.html"))
});

router.get("/exercise", (req,res)=> {
    res.sendFile(path.join(__dirname, "/public/exercise.html"))
});

router.get("/api/workout", (req, res)=>{
    res.json(workouts)
})



module.exports = router;