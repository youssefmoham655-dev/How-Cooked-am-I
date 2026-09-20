
questionsData = [
    {
        Question : "Who is this character?",
        image : "imgs/image copy.png",
        options :["Tralalero Tralala", "Bomba Crocodilo", "Jaws Nike", "Blue SPeedster"],
        correctAnswer : "Tralalero Tralala",
        hint : "Hint: He has 3 legs and refuses to take his Nikes off"
    },

    {
        Question: "What sound does the tree monkey make?",
        image: "imgs/imagecopy5.png",
        options: ["Tung Tung", "Brr Brr Patapim", "Tralalero", "Meow"],
        correctAnswer: "Brr Brr Patapim",
        hint : "🔊 Hint: It sounds like a machine gun going off"
    },
    {
        Question: "What does this creature drop?",
        image: "imgs/image copy 8.png",
        options:["Bombs", "Coffee ", "Shoes", "Bananas"],
        correctAnswer:"Bananas",
        hint :"🐵 Hint: It's his favourite snack"
    },
        {
        Question: "What sound does this make?",
        image: "imgs/image copy 4.png",
        options:["Tung Tung", "Tralalero", "Brr Brr",  "Lirili" ],
        correctAnswer:"Tung Tung",
        hint :"🥁 Hint: It's the sound of hitting things with wood"
    },
        {
        Question: "Who is this character?",
        image: "imgs/image copy 6.png",
        options:["Meow-Meow Fishy" , "Bombardiro Crocodilo", "Trippi Troppi", "Catlanta"],
        correctAnswer:"Trippi Troppi",
        hint : "Hint: It's half cat, half fish, 100% weird"
    },
        {
        Question: "What is the Cappuccino Assassino?",
        image: "imgs/image copy 9.png",
        options:[" A barista who burns your milk", "A killer creature", "An espresso that gives you anxiety", "A type of Italian brainrot dance"],
        correctAnswer:"A killer creature",
        hint : "⚔️ Hint: It's not your friendly barista"
    },
        {
        Question: "who is this character ?",
        image: "imgs/image4.png",
        options:["Bombardiro Crocodilo", "Lirili Larila", "Lirili Larila", "Tralalero Tralala"],
        correctAnswer:"Bombardiro Crocodilo",
        hint : "💣 Hint: It's a crocodile... but make it a bomber plane"
    },
        {
        Question: "who is this character ?",
        image: "imgs/image copy 7.png",
        options:["Bombardiro Crocodilo", "Lirili Larila", "Lirili Larila", "Tralalero Tralala"],
        correctAnswer:"Lirili Larila",
        hint : "Hint: It's an elephant that got lost in a cactus patch"
    }
]
//question , images, options , correct answer. done✅
// currentQuestion variable 
//write a loadQuestion function (updatas the html file , grab the current question, change the radio options)
//function that caculates the resulate ! 
// the result page that got al the data 
mainDiv = document.querySelector(".mainDiv");
resultDiv = document.getElementById("resultDiv")
img = document.querySelector("img");
label1 = document.getElementById("label1");
label2 = document.getElementById("label2");
label3 = document.getElementById("label3");
label4 = document.getElementById("label4");
questionPlaceHolder = document.querySelector("h1");
hint = document.getElementById("hint");
resultPlaceHolder = document.getElementById("ResultBullshit");
questionNumDisplay = document.getElementById("questionNum");

let selected = document.querySelector('input[name="answer"]:checked');

let questionNum = 0 ;
let currentScore = 0;


updataQuestion()

function updataQuestion(){

    let questionData = questionsData[questionNum];
    let currentQuestion = questionData.Question;
    let currentImage = questionData.image;
    currentQuestion = questionData.Question;
    currentImage = questionData.image;
    currentHint = questionData.hint;

    img.src = currentImage;
    questionPlaceHolder.textContent = currentQuestion;
    label1.textContent = questionData.options[0];
    label2.textContent = questionData.options[1];
    label3.textContent = questionData.options[2];
    label4.textContent = questionData.options[3];
    hint.textContent =  currentHint;

    questionNumDisplay.textContent = `Q ${questionNum + 1}`; 
    document.querySelectorAll('input[name = "answer"]').forEach(radio =>
    {
        radio.checked = false;

    })

}

function updataScore(){
   let selected = document.querySelector('input[name="answer"]:checked');
   
      if (selected === null) {
       alert("Pick an option first! 🦈");
       return;
   }
   let questionData = questionsData[questionNum];
   
   if (selected.value === questionData.correctAnswer ) {
    currentScore += 1;
   }

   questionNum +=  1; 

   if (questionNum < questionsData.length){
    questionNumDisplay.textContent = `Q ${questionNum + 1}`
    updataQuestion();
   }
   else{
    showResult()
   }
  
}

function caculateResult(){
    let precent = (currentScore / questionsData.length) * 100;
    let resutlBullshit = "";
    if(precent === 100){
        resutlBullshit = "🫠 100% BRAINROTTED - Your brain is completely fried! Welcome to the zoo!"
    }
    else if(precent > 75){
        resutlBullshit = "😵 Heavily Cooked - You watch way too much TikTok!"
    }
    else if( precent > 50){
        resutlBullshit = "🤔 Semi-Brainrotted - You're getting there..."

    }
    else {
        resutlBullshit = "🧠 Pure Brain - You're safe... for now. Touch some grass!"
    }
    return
}

function showResult(){
  resultDiv.classList.remove('hidden');
  mainDiv.classList.add('hidden');
  resultDiv.classList.add('mainDiv');
  let precent = (currentScore / questionsData.length) * 100;
  let resutlBullshit = "";
  if(precent === 100){
        resutlBullshit = "🫠 100% BRAINROTTED - Your brain is completely fried! Welcome to the zoo!"
    }
  else if(precent > 75){
        resutlBullshit = "😵 Heavily Cooked - You watch way too much TikTok!"
    }
  else if( precent > 50){
        resutlBullshit = "🤔 Semi-Brainrotted - You're getting there..."

    }
  else {
        resutlBullshit = "🧠 Pure Brain - You're safe... for now. Touch some grass!"
    }
  resultPlaceHolder.textContent = resutlBullshit;
}

function restart(){
    questionNum= 0;
    currentScore = 0;
    resultDiv.classList.add('hidden');
    mainDiv.classList.remove('hidden');
    updataQuestion();
}