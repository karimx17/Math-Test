var firstRandom = Math.floor(Math.random()*10) +1;
var secondRandom = Math.floor(Math.random()*10);
var operators = ["+", "-", "*", "÷"];
var randomOperator = operators[Math.floor(Math.random()* operators.length)]

var firstNumber = document.body.querySelector(".firstNumber");
var secondNumber = document.body.querySelector(".secondNumebr");
var btn = document.body.querySelector("button");
var operation = document.body.querySelector(".operator")

operation.innerHTML = randomOperator;
firstNumber.innerHTML = firstRandom;
secondNumber.innerHTML = secondRandom;

var add = firstRandom + secondRandom;
var subtract = firstRandom - secondRandom;
var multiply = firstRandom * secondRandom;
var divide = firstRandom / secondRandom

btn.addEventListener("click",function(){
    var userInput = Number(document.body.querySelector(".user").value);
        if(add === userInput || subtract === userInput || multiply === userInput || divide === userInput){
            alert("Correct")
            window.location.reload()
        } else {
            alert("Incorrect, try again.")
            window.location.reload()
        }
})


