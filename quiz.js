const startBtn = document.getElementById("startBtn");
const guideBox = document.getElementById("guideBox");
const exitQuiz = document.getElementById("exitQuiz");
const starQuiz = document.getElementById("startQuiz");

startBtn.addEventListener("click", function() {
    guideBox.style.opacity = 1;
    guideBox.style.pointerEvents = "auto";
  });

  exitQuiz.addEventListener("click", function(){
    guideBox.style.opacity = 0;
    guideBox.style.pointerEvents = "none";
    timerElement.style.opacity = 0;
    displayQuestionNumber.innerHTML = "Are You Ready"
    displayQuestion.innerHTML = "Welcome to the ultimate outdoor adventure! Test your wilderness knowledge with quizzes on camping, wildlife, stargazing, and survival. Whether you're a seasoned explorer or a curious beginner, our diverse quizzes will challenge and deepen your love for nature. Click \"Start Quiz\" to unleash your inner adventurer now! Happy exploring!"
    answerBtns.style.opacity = 0;
    answerBtns.style.pointerEvents = "none"
    nextBtn.style.opacity = 0;
    nextBtn.style.pointerEvents = "none"
    startBtn.style.opacity = 1;
    startBtn.style.pointerEvents = "auto"
    quizGuide.innerHTML = "Quiz Guide"
    pointOne.innerHTML = "1. You only have 60sec to answer all the questions."
    pointTwo.innerHTML = "2. Once you pick an answer you cannot change it."
    pointThree.innerHTML = "3. You cannot exit once you start."
    pointFour.innerHTML = "4. You will get points based on your performance."
    starQuiz.innerHTML = "Start"
  });

  const questions = [
    {
        question : "What is the largest mammal on Earth?",
        answers :[
            {answer : "Elephant"},
            {answer : "Blue Whale"},
            {answer : "Girafee"},
            {answer : "Polar Bear"},
        ],
        correct : 1
    },
    {
        question: "Which constellation contains the North Star (Polaris)?",
        answers: [
          { answer: "Orion"},
          { answer: "Ursa Major"},
          { answer: "Ursa Minor"},
          { answer: "Draco"}
        ],
        correct: 2
      },
      {
        question: "What do you call a temporary shelter made of natural materials, often used in survival situations?",
        answers: [
          { answer: "Tent"},
          { answer: "Igloo"},
          { answer: "Lean-to"},
          { answer: "Bivouac"}
        ],
        correct: 3
      },
      {
        question: "Which animal is known for its black and white stripes and is native to Africa?",
        answers: [
          { answer: "Cheetah"},
          { answer: "Zebra"},
          { answer: "Kangaroo"},
          { answer: "Panda"}
        ],
        correct: 0
      },
      {
        question: "What is the process of purifying water to make it safe for drinking in the wild called?",
        answers: [
          { answer: "Filtration"},
          { answer: "Condensation"},
          { answer: "Distillation"},
          { answer: "Water purification"}
        ],
        correct: 3
      },
      {
        question: "In camping, what is the term for spending the night outdoors without a tent or shelter?",
        answers: [
          { answer: "Glamping"},
          { answer: "Hammock camping"},
          { answer: "Bivouacking"},
          { answer: "Under the stars"}
        ],
        correct: 2
      },
      {
        question: "Which gas makes up the majority of the Earth's atmosphere?",
        answers: [
          { answer: "Oxygen"},
          { answer: "Nitrogen"},
          { answer: "Carbon dioxide"},
          { answer: "Hydrogen"}
        ],
        correct: 1
      },
      {
        question: "What nocturnal bird of prey is known for its silent flight and exceptional vision?",
        answers: [
          { answer: "Bald Eagle"},
          { answer: "Peregrine Falcon"},
          { answer: "Great Horned Owl"},
          { answer: "Red-tailed Hawk"}
        ],
        correct: 2
      },
      {
        question: "What is the phenomenon where the moon appears larger and brighter in the sky?",
        answers: [
          { answer: "Solar eclipse"},
          { answer: "Lunar eclipse"},
          { answer: "Supermoon"},
          { answer: "Blood moon"}
        ],
        correct: 2
      },
      {
        question: "What is the art of navigating using the stars and celestial bodies called?",
        answers: [
          { answer: "Geocaching"},
          { answer: "Orienteering"},
          { answer: "Astrology"},
          { answer: "Celestial navigation"}
        ],
        correct: 3
      },                                                      
  ]

  const displayQuestionNumber = document.getElementById("quizHead");
  const displayQuestion = document.getElementById("provoke");
  const timerElement = document.getElementById("timer");
  const answerBtns = document.querySelector("#answerBtn");
  const answerButtons = document.querySelectorAll(".answers")
  const next = document.getElementById("nextQuestion");
  const nextBtn = document.getElementById("next")
  let score = 0;
  let currentQuestionIndex = 0
  let timerInterval
  let timetaken;

  nextBtn.addEventListener("click", startQuiz)

  function startCountdown(timeLeft) {
    let timerElement = document.getElementById('timer');
  
    timerInterval = setInterval(updateTimer, 1000);
  
    function updateTimer() {
      timerElement.innerText = "Time left: " + timeLeft + "s";
  
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timerElement.innerHTML = "times up"
        endQuiz();
      }
      timetaken = 60 - timeLeft;
      timeLeft--;
    }
  }
  function resetQuiz(){
        score = 0;
        currentQuestionIndex = 0;
        timeLeft = 0;
  }

  starQuiz.addEventListener("click", function(){
    resetQuiz();
    startCountdown(60);
    guideBox.style.opacity = 0;
    guideBox.style.pointerEvents = "none";
    timerElement.style.opacity = 1;
    startBtn.style.opacity = 0;
    startBtn.style.pointerEvents = "none";
    nextBtn.style.pointerEvents = "none"
    startQuiz();
  })

   function startQuiz(){
    guideBox.style.opacity = 0;
    guideBox.style.pointerEvents = "none";
    answerBtns.style.pointerEvents = "none"
    answerBtns.style.opacity = 1;
    if (currentQuestionIndex < questions.length) {
        nextBtn.style.pointerEvents = "none"
        displayQuestionNumber.innerHTML = "Question (" + (currentQuestionIndex + 1) + "/10)" 
        next.style.opacity = 0;
        next.style.pointerEvents = "none";
        const questionData = questions[currentQuestionIndex];
        displayQuestion.innerHTML = questions[currentQuestionIndex].question;
        showQuestionAndAnswers(questionData);
        answerBtns.style.pointerEvents = "auto"
        nextBtn.style.opacity = 1;
        nextBtn.innerHTML = "Next Question"
        if(currentQuestionIndex === 10){
            nextBtn.innerHTML = "End Quiz"
        }
      } else {
        clearInterval(timerInterval);
        console.log(score);
        console.log("Quiz finished!");
        endQuiz();
      }
  }

  function showQuestionAndAnswers(questionData) {
    let correctAnswer = questionData.correct;
  
    function handleAnswerButtonClick(userAnswer) {
      answerButtons.forEach((btn, index) => {
        if (index === correctAnswer) {
          btn.classList.add("correct");
        } else {
          btn.classList.remove("selected", "correct");
        }
      });
  
      answerButtons[userAnswer].classList.add("selected");
      checkAnswer(userAnswer, correctAnswer);
      disableBtn();
      next.style.opacity = 1;
      next.style.pointerEvents = "auto";
      answerButtons.forEach((btn) => {
        btn.removeEventListener("click", btn.clickListener);
      });
    }
  
    for (let i = 0; i < answerButtons.length; i++) {
      let answerButton = answerButtons[i];
      answerButton.className = "answers";
      answerButton.innerHTML = questionData.answers[i].answer;
      enableBtn();
  
      answerButton.clickListener = handleAnswerButtonClick.bind(null, i);
  
      answerButton.addEventListener("click", answerButton.clickListener);
    }
      currentQuestionIndex++;
  }
  
  
  
  function checkAnswer(userAnswer, correctAnswerIndex) {
    if (userAnswer === correctAnswerIndex) {
        score += 1
        console.log(score)
    }
    nextBtn.style.pointerEvents = "auto"
  }
  
  function disableBtn() {
    answerButtons.forEach(answerButton => {
      answerButton.disabled = true;
    });
  }
  
  function enableBtn() {
    answerButtons.forEach(answerButton => {
      answerButton.disabled = false;
    });
  }

  const points = document.getElementById("pointsContainer");
  const quizGuide = document.getElementById("quizGuide")
  const pointOne = document.getElementById("point1")
  const pointTwo = document.getElementById("point2")
  const pointThree = document.getElementById("point3")
  const pointFour = document.getElementById("point4")
  function endQuiz(){
    if(score > 7){
        commentString = "Well Done"
    }else if(score > 4){
        commentString = "Not Bad Not Bad"
    }else{
        commentString = "You Can Do Way Better Than This"
    }
    answerButtons.forEach(answerButton => {
      answerButton.disabled = true;
    });
    nextBtn.style.pointerEvents = "none"
    guideBox.style.opacity = 1;
    guideBox.style.pointerEvents = "auto";
    pointOne.innerHTML= "YOUR SCORE: " + score + "/10"
    pointTwo.innerHTML = "Time Taken: " + timetaken + "s"
    pointThree.innerHTML = "Grade: " + score + "0%"
    pointFour.innerHTML = commentString;
    quizGuide.innerHTML = "Quiz Results"
    starQuiz.innerHTML = "Play Again"
  }