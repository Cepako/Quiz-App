let questions = [
  {
    question: 'Which is largest animal in the world?',
    answers: ['Shark', 'Blue Whale', 'Elephant', 'Giraffe'],
    correctAnswer: 1,
  },
  {
    question: 'What is the highest peak in the world?',
    answers: ['Mont Blanc', 'K2', 'Mount Everest', 'Aconcagua'],
    correctAnswer: 2,
  },
  {
    question: 'Which ocean is the largest?',
    answers: ['Atlantic', 'Indian', 'Pacific', 'Arctic'],
    correctAnswer: 2,
  },
  {
    question: 'Which city is the capital of France?',
    answers: ['Lyon', 'Marseille', 'Paris', 'Nice'],
    correctAnswer: 2,
  },
  {
    question: 'How many planets are in the Solar System?',
    answers: ['7', '8', '9', '10'],
    correctAnswer: 1,
  },
  {
    question: 'Who wrote "Romeo and Juliet"?',
    answers: [
      'Charles Dickens',
      'William Shakespeare',
      'Leo Tolstoy',
      'Mark Twain',
    ],
    correctAnswer: 1,
  },
  {
    question: 'Which country is the largest by area?',
    answers: ['China', 'United States', 'Canada', 'Russia'],
    correctAnswer: 3,
  },
  {
    question: 'Which language is the most widely spoken in the world?',
    answers: ['English', 'Spanish', 'Chinese', 'Hindi'],
    correctAnswer: 2,
  },
  {
    question: 'Which river is the longest in the world?',
    answers: ['Nile', 'Amazon', 'Yangtze', 'Mississippi'],
    correctAnswer: 0,
  },
  {
    question: 'Which of these structures was built first?',
    answers: [
      'Great Wall of China',
      ' Pyramids of Giza',
      'Colosseum',
      'Taj Mahal',
    ],
    correctAnswer: 1,
  },
];

const liButtons = document.querySelectorAll('.answers__element');
const question = document.querySelector('.question');
const buttonNext = document.querySelector('footer button');

let questionNumber = 1;

function isCorrect(i, q) {
  if (i === questions[q].correctAnswer) liButtons[i].classList.add('correct');
  else {
    liButtons[questions[q].correctAnswer].classList.add('correct');
    liButtons[i].classList.add('incorrect');
  }
  liButtons.forEach((button) => {
    button.style.pointerEvents = 'none';
  });
  buttonNext.classList.add('active');
  questions.splice(q, 1);
  questionNumber++;
}
function randomQuestion(l) {
  let index = Math.floor(Math.random() * l);
  return index;
}

function initQuestion() {
  let questionIndex = randomQuestion(questions.length);
  console.log(questionIndex);
  question.textContent = `${questionNumber}. ${questions[questionIndex].question}`;
  liButtons.forEach((button, i) => {
    button.textContent = questions[questionIndex].answers[i];
    button.addEventListener('click', () => isCorrect(i, questionIndex));
  });
}
initQuestion();
