const numberOfQuestions = document.getElementById("nofoquestion");
const questionItSelf = document.getElementById("questionitself");
const ans1 = document.getElementById("ans1");
const ans2 = document.getElementById("ans2");
const ans3 = document.getElementById("ans3");
const ans4 = document.getElementById("ans4");
const nextButton = document.getElementById("nextbutton");
const reason = document.getElementById("reason");

let currentQuestionId = 1;
nextButton.style.display = "none";

let sequence = 1
let questions = [
    {
        id: 1,
        question: "A farmer has 17 sheep. All but 9 run away. How many sheep remain?",
        options: [8, 9, 17, 0],
        correctAnswer: 1, // i knew that it won't work cuz i should use index
        reason: "The trap is the phrase all but 9."
    },
    {
        id: 2,
        question: "You have one match. You enter a dark room containing a candle, a lamp, and a fireplace. What do you light first?",
        options: ["The candle", "The lamp", "The fireplace", "The match"],
        correctAnswer: 3,
        reason: "The trap is that you should understand that you should use match to see the room in dark"
    },
    {
        id: 3,
        question: "A plane crashes exactly on the border between Egypt and Sudan. Where do they bury the survivors?",
        options: ["Egypt", "Sudan", "On the border", "They don't"],
        correctAnswer: 3,
        reason: "The survivors are alive."
    },
    {
        id: 4,
        question: "A bat and a ball cost $1.10 together. The bat costs $1 more than the ball. How much does the ball cost?",
        options: ["$0.05", "$0.10", "$0.15", "$0.50"],
        correctAnswer: 0,
        reason: "The ball is $0.05 and the bat is $1.05, which adds up to $1.10."
    },
    {
        id: 5,
        question: "What's next?\n 1, 11, 21, 1211, 111221, ?",
        options: ["312211", "111321", "211221", "123456"],
        correctAnswer: 0,
        reason: "This is the (look-and-say) sequence."
    },
    {
        id: 6,
        question: "Before Mount Everest was discovered, what was the highest mountain in the world?",
        options: ["A) Mount Everest", "B) K2", "C) Mount Kilimanjaro", "D) Mount Everest wasn't discovered yet"],
        correctAnswer: 0,
        reason: "It was still the highest mountain even before people discovered it."
    },
    {
        id: 7,
        question: "You have 3 apples and you take away 2. How many apples do you have?",
        options: ["A) 1", "B) 2", "C) 3", "D) 0"],
        correctAnswer: 1,
        reason: "You took 2 apples, so you have those 2."
    },
    {
        id: 8,
        question: "A rooster lays an egg on top of a roof. Which way does the egg roll?",
        options: ["A) Left", "B) Right", "C) Down the roof", "D) Roosters don't lay eggs"],
        correctAnswer: 3,
        reason: "D) Roosters don't lay eggs"
    },
    {
        id: 9,
        question: "You're running a race. You pass the person in 2nd place. What place are you in?",
        options: ["A) 1st", "B) 2nd", "C) 3rd", "D) Last"],
        correctAnswer: 1,
        reason: "You take the position of the person you passed."
    },
    {
        id: 10,
        question: "Which of these objects is most likely to win an argument with a microwave?",
        options: ["A) A spoon", "B) Tuesday", "C) A sufficiently confident potato", "D) The microwave itself"],
        correctAnswer: 2,
        reason: "Most resonable answer"
    },
];
let userchoise = []
const choices = [ans1, ans2, ans3, ans4]
choices.forEach((choiceElement, index) => {
    choiceElement.addEventListener("click", () => {
        userchoise.push(index);
        const currentQuestion = questions.find(
            questions => questions.id === currentQuestionId
        )
        nextButton.style.display = "block"
        reason.textContent = currentQuestion.reason;
        if (index === currentQuestion.correctAnswer) {
            choiceElement.style.backgroundColor = "green";
        } else {
            choiceElement.style.backgroundColor = "red";
            choices[currentQuestion.correctAnswer].style.backgroundColor = "green";
        }
        choices.forEach(choice => {
            choice.style.pointerEvents = "none";
        });
    })
})
function showQuestion(questionsId) {
    const question = questions.find(({id}) => id === questionsId);
    if(!question) return;
    questionItSelf.textContent = question.question;
    [ans1, ans2, ans3, ans4].forEach((answerElement, index) => {
        answerElement.textContent = question.options[index];
    });
    numberOfQuestions.textContent = sequence;
}
nextButton.addEventListener("click", () => {
    currentQuestionId++;
    sequence++;
    showQuestion(currentQuestionId);
    choices.forEach(choice => {
        choice.style.backgroundColor = "";
        choice.style.pointerEvents = "auto";
    });
    nextButton.style.display = "none";
    reason.textContent = "";
    showQuestion(currentQuestionId);
});
showQuestion(currentQuestionId);