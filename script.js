const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const quizQuestions = [
    {
        question: "1. Qual é o nome do protagonista principal de Red Dead Redemption 2?",
        answers: {
            a: "John Marston",
            b: "Arthur Morgan",
            c: "Dutch van der Linde"
        },
        correctAnswer: "b"
    },
    {
        question: "2. Em que ano a história de RDR2 começa?",
        answers: {
            a: "1899",
            b: "1905",
            c: "1885"
        },
        correctAnswer: "a"
    },
    {
        question: "3. Qual é o nome do grupo criminoso ao qual Arthur pertence?",
        answers: {
            a: "Van der Linde Gang",
            b: "O'Driscoll Boys",
            c: "Murfree Brood"
        },
        correctAnswer: "a"
    },
    {
        question: "4. Quem é o líder da gangue de Arthur Morgan?",
        answers: {
            a: "Micah Bell",
            b: "Dutch van der Linde",
            c: "Bill Williamson"
        },
        correctAnswer: "b"
    },
    {
        question: "5. Qual doença Arthur contrai durante o jogo?",
        answers: {
            a: "Pneumonia",
            b: "Tuberculose",
            c: "Febre tifoide"
        },
        correctAnswer: "b"
    },
    {
        question: "6. Qual cidade fictícia do jogo é inspirada em Nova Orleans?",
        answers: {
            a: "Saint Denis",
            b: "Valentine",
            c: "Blackwater"
        },
        correctAnswer: "a"
    },
    {
        question: "7. Quem trai a gangue no final da história?",
        answers: {
            a: "Micah Bell",
            b: "Charles Smith",
            c: "Sadie Adler"
        },
        correctAnswer: "a"
    },
    {
        question: "8. Qual animal lendário pode ser caçado nas montanhas nevadas?",
        answers: {
            a: "Urso Grizzly Lendário",
            b: "Alce Lendário",
            c: "Pantera Lendária"
        },
        correctAnswer: "b"
    },
    {
        question: "9. Qual é o nome do cavalo padrão inicial de Arthur?",
        answers: {
            a: "Buell",
            b: "Kieran",
            c: "Jornada"
        },
        correctAnswer: "c"
    },
    {
        question: "10. Qual personagem se torna o protagonista após a morte de Arthur?",
        answers: {
            a: "John Marston",
            b: "Sadie Adler",
            c: "Javier Escuella"
        },
        correctAnswer: "a"
    }
];

function buildQuiz() {
    const output = [];
    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} : ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join('')} </div>`
        );
    });
    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = input[name=question${questionNumber}]:checked;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++;
            answerContainers[questionNumber].style.color = 'lightgreen';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    resultsContainer.innerHTML = Você acertou ${numCorrect} de ${quizQuestions.length} questões.;
}

buildQuiz();
submitButton.addEventListener('click', showResults);
