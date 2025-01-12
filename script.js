const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: "Pacific Ocean"
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Earth", "Mars", "Venus", "Mercury"],
    correctAnswer: "Mercury"
  },
  {
    question: "Which of these elements is a noble gas?",
    options: ["Oxygen", "Nitrogen", "Neon", "Hydrogen"],
    correctAnswer: "Neon"
  },
  {
    question: "What is the capital of Japan?",
    options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
    correctAnswer: "Tokyo"
  },
  {
    question: "Which programming language is primarily used for web development?",
    options: ["Python", "Java", "JavaScript", "C++"],
    correctAnswer: "JavaScript"
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["Mark Twain", "William Shakespeare", "Charles Dickens", "Jane Austen"],
    correctAnswer: "William Shakespeare"
  },
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const nextButton = document.getElementById('next-btn');
  
  const currentQuestion = questions[currentQuestionIndex];
  
  questionElement.innerHTML = currentQuestion.question;
  optionsElement.innerHTML = '';
  
  currentQuestion.options.forEach(option => {
    const button = document.createElement('button');
    button.innerHTML = option;
    button.onclick = () => checkAnswer(option);
    optionsElement.appendChild(button);
  });

  nextButton.style.display = 'none'; // Hide next button initially
}

function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  const correctAnswer = currentQuestion.correctAnswer;
  
  if (selectedOption === correctAnswer) {
    score++;
  }

  const options = document.getElementById('options').children;
  Array.from(options).forEach(option => {
    option.disabled = true; // Disable all options after selection
    if (option.innerHTML === correctAnswer) {
      option.style.backgroundColor = 'green'; // Highlight correct answer
    }
    if (option.innerHTML === selectedOption && selectedOption !== correctAnswer) {
      option.style.backgroundColor = 'red'; // Highlight wrong answer
    }
  });

  document.getElementById('score').innerText = `Your score: ${score}`;
  document.getElementById('next-btn').style.display = 'inline-block';
}

function nextQuestion() {
  currentQuestionIndex++;
  
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    document.getElementById('score').innerText = `You finished the quiz! Final Score: ${score}`;
    document.getElementById('next-btn').style.display = 'none';
  }
}

// Initialize the quiz
window.onload = displayQuestion;
