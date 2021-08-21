var readLineSync = require("readline-sync");
var userName = readLineSync.question("Hi there! what is your name?");
console.log("Welcome " + userName + " to 'do you know Anupam'");
var score = 0;

function game(question, answer) {
    var userAnswer = readLineSync.question(question);
    if (userAnswer === answer) {
        console.log("You are right!");
        score = score + 1;
    } else {
        console.log("you are wrong!");
    }
    console.log("score is: ", score);
    console.log("------------------");
}

var questions = [{
        question: "which city do i live in?",
        answer: "dehradun"
    },
    {
        question: "what is my favorite color?",
        answer: "blue",

    },
    {
        question: "what is my leisure time?",
        answer: "excercise",

    },
    {
        question: "what is my favorite food?",
        answer: "pizza",

    },
    {
        question: "what is my favorite music genre?",
        answer: "hiphop",

    }
]

for (i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    game(currentQuestion.question, currentQuestion.answer);
}
console.log("Awesome! Your Total Score is: ", score);