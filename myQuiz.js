var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Anu",
    score: 5,
  },

  {
    name: "Bella",
    score: 2,
  },
];

// array of objects
var questions = [
  {
    question: "Where do I live? ",
    answer: "Jamshedpur",
  },
  {
    question: "My favorite superhero series would be? ",
    answer: "Avengers",
  },
  {
    question: "Whats my favourite color? ",
    answer: "Black",
  },
  {
    question: "Who is my favourite k-pop boy group? ",
    answer: "BTS",
  },
  {
    question: "What is my favourite dish? ",
    answer: "Chicken Lollipop",
  },
];

function welcome() {
  var userName = readlineSync.question("Let's know your name... ");

  console.log(
    "Welcome " + userName + " Let's see how much better you know Anushree?"
  );
}

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    // branching
    console.log("right!");
    score = score + 1;
  } else {
    console.log("wrong!");
  }

  console.log("current score: ", score);
  console.log("-------------");
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log(
    "Check out the high scores, if you should be there ping me and I'll update it"
  );

  highScores.map((score) => console.log(score.name, " : ", score.score));
}

welcome();
game();
showScores();
