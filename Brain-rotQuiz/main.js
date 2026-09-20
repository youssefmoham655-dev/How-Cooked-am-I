
questionsData = [
    {
        Question : "Who is this character?",
        image : "Brain-rotQuiz\imgs\image.png",
        options :["Tralalero Tralala", "Bomba Crocodilo", "Jaws Nike", "Blue SPeedster"],
        correctAnswer : "Tralalero Tralala"
    },

    {
        Question: "What sound does the tree monkey make?",
        image: "imgs/imagecopy8.png",
        options: ["Tung Tung", "Brr Brr Patapim", "Tralalero", "Meow"],
        correctAnswer: "Brr Brr Patapim"
    },
    {
        Question: "What does this creature drop?",
        image: "imgs/imagecopy8.png",
        options:["Bombs", "Coffee ", "Shoes", "Bananas"],
        correctAnswer:"Bananas",
    },
        {
        Question: "What sound does this make?",
        image: "imgs/imagecopy4.png",
        options:["Tung Tung", "Tralalero", "Brr Brr",  "Lirili" ],
        correctAnswer:"Tung Tung",
    },
        {
        Question: "Who is this character?",
        image: "imgs/imagecopy6.png",
        options:["Meow-Meow Fishy" , "Bombardiro Crocodilo", "Trippi Troppi", "Catlanta"],
        correctAnswer:"Trippi Troppi",
    },
        {
        Question: "What is the Cappuccino Assassino?",
        image: "imgs/imagecopy9.png",
        options:[" A barista who burns your milk", "A killer creature", "An espresso that gives you anxiety", "A type of Italian brainrot dance"],
        correctAnswer:"A killer creature",
    },
        {
        Question: "who is this character ?",
        image: "imgs/image4.png",
        options:["Bombardiro Crocodilo", "Lirili Larila", "Lirili Larila", "Tralalero Tralala"],
        correctAnswer:"Bombardiro Crocodilo",
    },
        {
        Question: "who is this character ?",
        image: "imgs/imagecopy7.png",
        options:["Bombardiro Crocodilo", "Lirili Larila", "Lirili Larila", "Tralalero Tralala"],
        correctAnswer:"Lirili Larila",
    }
]
//question , images, options , correct answer. done✅
// currentQuestion variable 
//write a loadQuestion function (updatas the html file , grab the current question, change the radio options)
//function that caculates the resulate ! 
// the result page that got al the data 

img = document.querySelector("img");
label1 = document.getElementById("label1");
label2 = document.getElementById("label2");
label3 = document.getElementById("label3");
label4 = document.getElementById("label4");
questionPlaceHolder = document.querySelector("h1");
hint = document.getElementById("hint");
subQuestion = document.querySelector("h3");

let selected = document.querySelector('input[name="answer"]:checked');

let questionNum = 0 ;
let currentScore = 0;
updataQuestion()

function updataQuestion(){
    questionData = questionsData[questionNum];
    currentQuestion = questionData.Question;
    currentImage = questionData.image;
    img.src = currentImage;
    questionPlaceHolder.texrContent = currentQuestion;
    label1.texrContent = questionData.options[0];
    label2.texrContent = questionData.options[1];
    label3.texrContent = questionData.options[2];
    label4.texrContent = questionData.options[3]
}

function updateScore(){
   questionNum =+1; 
   if 
}






 