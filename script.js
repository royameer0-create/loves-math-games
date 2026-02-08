// Simple math quiz logic

const startScreen = document.getElementById("startScreen");
const questionScreen = document.getElementById("questionScreen");
const finalScreen = document.getElementById("finalScreen");

const startBtn = document.getElementById("startBtn");
const submitBtn = document.getElementById("submitBtn");

const questionText = document.getElementById("questionText");
const answerInput = document.getElementById("answerInput");
const feedback = document.getElementById("feedback");

let currentQuestion = 0;
const totalQuestions = 5;
let correctAnswer = 0;

// Generate a random math question
function generateQuestion() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  const operators = ["+", "-", "×"];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  let question = "";
  if (operator === "+") {
    correctAnswer = a + b;
    question = `${a} + ${b} = ?`;
  } else if (operator === "-") {
    correctAnswer = a - b;
    question = `${a} - ${b} = ?`;
  } else {
    correctAnswer = a * b;
    question = `${a} × ${b} = ?`;
  }

  questionText.textContent = question;
}

// Start game
startBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  questionScreen.classList.remove("hidden");
  generateQuestion();
});

// Submit answer
submitBtn.addEventListener("click", () => {
  const userAnswer = Number(answerInput.value);

  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! 💖 You’re doing amazing!";
    feedback.style.color = "#ff6fae";
  } else {
    feedback.textContent = "It’s okay 💕 Try again, you’re still cute.";
    feedback.style.color = "#c6a7ff";
  }

  answerInput.value = "";
  currentQuestion++;

  setTimeout(() => {
    feedback.textContent = "";
    if (currentQuestion < totalQuestions) {
      generateQuestion();
    } else {
      questionScreen.classList.add("hidden");
      finalScreen.classList.remove("hidden");
    }
  }, 1200);
});