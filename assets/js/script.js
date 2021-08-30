var elQuestion = document.getElementById("question");
var elCount = document.getElementById("timer-count");
var elAnswers = document.getElementById("answers");
var startBtn = document.querySelector(".start-button");
var correctAns = document.querySelector(".correct");
var wrongAns = document.querySelector(".wrong");
var scoreName = document.querySelector(".names-col");
var scoreNum = document.querySelector(".scores-col");
var nameEl = document.createElement("h2");
var scoreEl = document.createElement("h2");
var questionCount = 0;
var timerCount;
var correctCount = 0;
var wrongCount = 0;

var questionsArr = [
  { question: "What is the index number of the first item of an array?",
    answers: [
        "1",
        "0",
        "2",
      ],
      correctAnswer: "0",
    },
      { question: "What type of container is used to hold an array?",
    answers: [
        "Parantheses",
        "Curly Braces",
        "Square Brackets",
      ],
      correctAnswer: "Square Brackets",
    },
      { question: "What style of case is used in JavaScript?",
      answers: [
        "UPPERCASE",
        "lowercase",
        "camelCase",
      ],
      correctAnswer: "camelCase",
    },
      { question: "question 4",
      answers: [
        "dan",
        "dap",
        "dab",
      ],
      correctAnswer: "dan",
    }
];

function startGame() {
  timerCount = 10;
  
  console.log("go!");
  var interval = setInterval(function(){
    timerCount --;
    startBtn.disabled = true;
    // Changing plural of seconds in timer
    if (timerCount > 1){
      elCount.textContent = timerCount + " Seconds Left";
    } else if (timerCount === 1){
      elCount.textContent = timerCount + " Second Left";
    } else{
      elCount.textContent = "Time's Up!";
      clearInterval(interval);
      startBtn.textContent = "Try again?";
      startBtn.disabled = false;
      questionCount = 0;
      endGame();
    }
  }, 1000);
  displayQuestion();
};

// Start Button activating game
startBtn.addEventListener("click", startGame);

function displayQuestion(){
  var currentQuestion = questionsArr[questionCount];
  var question = currentQuestion.question;
  var answers = currentQuestion.answers
  // set question text to current question
  elQuestion.textContent = question;
  // loop through answer to create buttons
  for (let i=0; i < answers.length; i++){
    var answerBtn = document.createElement("button");
    answerBtn.textContent = answers[i];
    elAnswers.appendChild(answerBtn);
    console.log("answer");
  }
  //at the end of questions - end game
  // if (questionCount > 4){
  //   ;
  // }
};

function endGame (){
  console.log("It's over!");
  //store quiz score
  localStorage.setItem("correct", correctCount);
  //add prompt to record initials + store initials
  var highScoreName = prompt("You got " + correctCount + " correct! Enter your initials for the High Score Board!");  
  localStorage.setItem("name", highScoreName);
};
//clicking a button in the answer element
elAnswers.addEventListener("click", function(event){
  event.stopPropagation();
  var answer = elAnswers.querySelector("button");
  //get text from selected button
  var answerClick = answer.getText;
  console.log(answerClick);
  //check if right or wrong answer
  if (answerClick === questionsArr.correctAnswer){
    correctCount ++;
    correctAns.textContent = correctCount;
    console.log("correct!");
  } else {
    wrongCount ++;
    wrongAns.textContent = wrongCount;
    console.log("wrong :/");
  };
  //clear out previous buttons
  elAnswers.innerHTML = "";
  console.log("bye buttons");
  // go to next question
  questionCount++;
  displayQuestion();
});

nameEl.textContent = localStorage.getItem("name");
scoreEl.textContent = localStorage.getItem("correct");

nameEl.appendChild(nameEl);
scoreEl.appendChild(scoreEl);