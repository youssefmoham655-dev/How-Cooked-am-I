const full_page = document.getElementById("page") // this for changing background color
const no = document.getElementById("no")
const yes = document.getElementById("yes")
const question = document.getElementById("question")
const result_area = document.getElementById("result")
const question_area = document.getElementById("question-area")

const questions = [
    "Have you opened your laptop and immediately forgotten why?",
    "Did you say “I’ll do it later” today?",
    "Have you watched a “5 minute” video that mysteriously lasted 47 minutes?",
    "Is your Downloads folder a war crime?",
    "Have you made a productivity system instead of being productive?",
    "Did you open your assignment, stare at it, then close it?",
    "Have you checked your phone while actively holding your phone?",
    "Do you currently have 17 tabs open?",
    "Have you told yourself “tomorrow I lock in” more than once?",
    "Have you renamed a file instead of actually working on it?"
]

const images_array = [
    "assets/1.png",
    "assets/2.png",
    "assets/3.png",
    "assets/4.png",
    "assets/5.png",
    "assets/6.png",
    "assets/7.png",
    "assets/8.png",
    "assets/9.png",
    "assets/10.png",
    "assets/11.png"
]
let current_index = 0
let answers =[]


function showquestion() {
    if (current_index < questions.length) {
        question.textContent = questions[current_index]
        full_page.style.backgroundImage = `url('${images_array[current_index % images_array.length]}')`
        } else {
        question_area.style.display = "none"
        result_area.style.display = "flex"
        result_area.innerHTML = "<h1>hello</h1>"
    }
}

yes.addEventListener('click', () => {
    answers.push("yes")
    current_index++
    showquestion()
})
no.addEventListener('click', () => {
    answers.push("no")
    current_index++
    showquestion()
})
showquestion()