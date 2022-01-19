const startBtn = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-box')
const questionElement = document.getElementById('question')
const answers

const shuffledQuestions, currentQuestionIndex

startBtn.addEventListener('click', start)

function start() {
    console.log('started')
    startBtn.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function nextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {

}

function pickAnswer() {

}

const questions = [
    {
        question: 'What does HTML stand for',
        answers: [
            { text: 'hypertext markup language', correct: true},
            { text: 'hightrack memory links', correct: false}
        ]

    }
]