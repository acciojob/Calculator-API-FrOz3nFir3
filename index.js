// Add the Calculator APIs

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname))
app.use(express.json())

app.get('/', (req, res) => {
  res.send("Hello world!");
});


app.post("/add", (req, res)=>{
  const {num1, num2} = req.body;

  let status = "success"
  let message = "The sum of given two numbers"
  let result = num1 + num2;

  if(typeof num1 == "string" || typeof num2 == "string"){
    status = 'error';
    message = 'Invalid data types';
  } else if(result > 1000000 || num1 > 1000000 || num2 > 1000000){
    status = "error";
    message ="Overflow";
  }else if(result < -1000000 || num1 < -1000000 || num2 < -1000000){
    status = 'error';
    message = 'Underflow';
  }

  res.json({status, message, result})
})
app.post("/sub", (req, res)=>{
  const {num1, num2} = req.body;

  let status = "success"
  let message = "The difference of given two numbers"
  let result = num1 - num2;

  if(typeof num1 == "string" || typeof num2 == "string"){
    status = 'error';
    message = 'Invalid data types';
  } else if(result > 1000000 || num1 > 1000000 || num2 > 1000000){
    status = "error";
    message ="Overflow";
  }else if(result < -1000000 || num1 < -1000000 || num2 < -1000000){
    status = 'error';
    message = 'Underflow';
  }

  res.json({status, message, result})
})
app.post("/multiply", (req, res)=>{
  const {num1, num2} = req.body;

  let status = "success"
  let message = "The product of given two numbers"
  let result = num1 * num2;

  if(typeof num1 == "string" || typeof num2 == "string"){
    status = 'error';
    message = 'Invalid data types';
  } else if(result > 1000000 || num1 > 1000000 || num2 > 1000000){
    status = "error";
    message ="Overflow";
  }else if(result < -1000000 || num1 < -1000000 || num2 < -1000000){
    status = 'error';
    message = 'Underflow';
  }
  res.json({status, message, result})
})
app.post("/divide", (req, res)=>{
  const {num1, num2} = req.body;

  let status = "success"
  let message = "The division of given two numbers"
  let result = num1 / num2;

  if (num2 == 0){
    status = 'error';
    message = 'Cannot divide by zero'
  }else if(typeof num1 == "string" || typeof num2 == "string"){
    status = 'error';
    message = 'Invalid data types';
  } else if(result > 1000000 || num1 > 1000000 || num2 > 1000000){
    status = "error";
    message ="Overflow";
  }else if(result < -1000000 || num1 < -1000000 || num2 < -1000000){
    status = 'error';
    message = 'Underflow';
  }

  res.json({status, message, result})
})
//your code here
module.exports = app;
