const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  //number is used because post method sends data as a string so it gets concatenated rather than addition
  var number1 = Number(req.body.num1);
  var number2 = Number(req.body.num2);
  var result = number1 + number2;
  res.send("the sum is " + result);
});

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  //parseFloat is used because post method sends data as a string so to make it as a float
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = Math.round(weight / (height * height));

  res.send("Your BMI is " + bmi + ".");
});
app.listen(8000, function () {
  console.log("server running on port http://localhost:8000");
});
