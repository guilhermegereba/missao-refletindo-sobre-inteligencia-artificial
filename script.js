const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const quizQuestions = [
    {
        question: "1. Qual tag HTML é usada para criar um parágrafo?",
        answers: {
            a: "<h1>",
            b: "<p>",
            c: "<div>"
        },
        correctAnswer: "b"
    },
    {
        question: "2. Qual comando exibe mensagens no console no JavaScript?",
        answers: {
            a: "print()",
            b: "echo()",
            c: "console.log()"
        },
        correctAnswer: "c"
    },
    {
        question: "3. Qual símbolo é usado para comentários em CSS?",
        answers: {
            a: "//",
            b: "/* */",
            c: "#"
        },
        correctAnswer: "b"
    },
    {
        question: "4. Qual atributo define um link no HTML?",
        answers: {
            a: "src",
            b: "href",
            c: "link"
        },
        correctAnswer: "b"
    },
    {
        question: "5. No JavaScript, qual tipo de dado representa texto?",
        answers: {
            a: "String",
            b: "Number",
            c: "Boolean"
        },
        correctAnswer: "a"
    },
    {
        question: "6. Qual comando CSS muda a cor do texto?",
        answers: {
            a: "background-color",
            b: "text-color",
            c: "color"
        },
        correctAnswer: "c"
    },
    {
        question: "7. Qual estrutura repete um bloco de código várias vezes?",
        answers: {
            a: "if",
            b: "for",
            c: "switch"
        },
        correctAnswer: "b"
    },
    {
        question: "8. Em HTML, qual elemento é usado para imagens?",
        answers: {
            a: "<image>",
            b: "<img>",
            c: "<pic>"
        },
        correctAnswer: "b"
    },
    {
        question: "9. Em JavaScript, qual operador é usado para atribuição?",
        answers: {
            a: "=",
            b: "==",
            c: "==="
        },
        correctAnswer: "a"
    },
    {
        question: "10. Qual tag HTML cria um título principal?",
        answers: {
            a: "<h1>",
            b: "<head>",
            c: "<title>"
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
