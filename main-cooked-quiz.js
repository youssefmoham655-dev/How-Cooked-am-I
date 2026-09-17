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
let amount = ""
let amount2 = ""


function showquestion() {
    if (current_index < questions.length) {
        question.textContent = questions[current_index]
        full_page.style.backgroundImage = `url('${images_array[current_index % images_array.length]}')`
        } else {
        question_area.style.display = "none"
        result_area.style.display = "flex"

        const numberOfYesCount = answers.filter(answer => answer == "yes").length

        const precentage = Math.round((numberOfYesCount / questions.length) * 100)

        if (precentage <= 15) {
            amount = "You are Freshly Baked"
            amount2 = "You are suspiciously functional."
        } else if (precentage <= 35) {
            amount = "Slightly Toasted"
            amount2 = "There are minor signs of academic damage."
        } else if (precentage <= 55){
            amount = "Getting Crispy 🔥"
            amount2 = "Your productivity has begun leaving the chat."
        } else if (precentage <= 75) {
            amount = "Deep Fried 🍟"
            amount2 = "You are no longer procrastinating, you have entered a lifestyle."
        } else if (precentage <= 75) {
            amount = "Charcoal"
            amount2 = "At this point you're opening your laptop purely for emotional support."
        } else if (precentage <= 100) {
            amount = "Nuclear ☢️"
            amount2 = ""
        } else {
            amount = "Nuclear ☢️"
            amount2 = "Absolute system failure."
        }
        result_area.innerHTML = `
            <h3 id="report">YOUR COOKED REPORT</h3>
            <h5>Cookedness: ${precentage}%</h5>
            <h5>Academic damage: ${amount}</h5>
            <button id="accept" onclick="window.location.href='index.html'">I ACCEPT MY FATE</button>
        `
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