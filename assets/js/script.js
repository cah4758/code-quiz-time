var elQuestion = document.getElementById("question");
var elCount = document.getElementById("timer-count");
var elAnswers = document.getElementById("answers");
var startBtn = document.querySelector(".start-button");
var correctAns = document.querySelector(".correct");
var wrongAns = document.querySelector(".wrong");
var timerCount;
var correctCount;
var wrongCount;
var questionsArr = [
  { question: "question 1",
    answers: [
      { a: "12",
        b: "13",
        c: "14",
      }],
      correctAnswer: "a",
      question: "question 2",
    answers: [
      { a: "12",
        b: "13",
        c: "14",
      }],
      correctAnswer: "b",
      question: "question 3",
      answers: [
        { a: "12",
          b: "13",
          c: "14",
        }],
    correctAnswer: "c",
      question: "question 4",
    answers: [
      { a: "12",
        b: "13",
        c: "14",
      }],
      correctAnswer: "d",
    },
];

function startGame() {
  timerCount = 5;
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
      endGame();
    }
    // displayQuestion();

  }, 1000);
};

// Start Button activating game
startBtn.addEventListener("click", startGame);


function displayQuestion(){
  var currentQuestion = questionsArr[currentQuestionIndex];
  var questions = currentQuestion.question;
  var answers = currentQuestion.answers
  // set question text to current question
  // clear out previous buttons
  // loop through answer to create buttons
  // for (i=0, i>answers.length, i++){

  // }
}

function endGame (){
  console.log("It's over!");
};



elAnswers.addEventListener("click", function(event){
  var answer = event.target.getAttribute
  if(answer) {
    // record answer

    // go to next question

  }
})
