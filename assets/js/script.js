const question = document.getElementById("question");
const answers = Array.from(document.getElementsByClassName("answer"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "In Greek mythology, who led the Argonauts in search of the Golden Fleece?",
        answer1: "Jason",
        answer2: "Castor",
        answer3: "Odysseus",
        answer4: "Daedalus",
        answer: 1
    },
    {
        question: "Who was the King of Gods in Ancient Greek mythology?",
        answer1: "Hermes",
        answer2: "Poseidon",
        answer3: "Zeus",
        answer4: "Apollo",
        answer: 3
    },
    {
        question: "In Greek mythology, who is the god of wine?",
        answer1: "Dionysus",
        answer2: "Hephaestus",
        answer3: "Demeter",
        answer4: "Apollo",
        answer: 1
    }
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {

    if(availableQuestions.length == 0 || questionCounter >= MAX_QUESTIONS) {
        return window.location.assign("/end.html");
    };

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

answers.forEach( answer => {
    const number = answer.dataset['number'];
    answer.innerText = currentQuestion['answer' + number];
});

availableQuestions.splice(questionIndex, 1);

acceptingAnswers = true;
};

answers.forEach(answer => {
    answer.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedAnswer = e.target;
        const selectedCorrectAnswer = selectedAnswer.dataset["number"];
        getNewQuestion();
    });
});

startGame();