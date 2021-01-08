const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const connection = mongoose.connection;

connection.on("connected", () => {
	console.log("Mongoose connected successfully!");
});

connection.on("error", (err) => {
	console.log("Mongoose connection error: " + err);
});

const PORT = process.env.PORT || 3002;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./public"));


// app.get('/', function(req, res){
//     res.render('index.html');
// });

// app.get('/', function(req, res){
//   console.log("Root Route")
//   res.json({ message: "hello world" });
// });
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workouts',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

const backEndRoutes = require("./controller/workoutRoutes.js");
const frontEndRoutes = require("./controller/viewRoutes.js");

app.use(backEndRoutes);
app.use(frontEndRoutes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  