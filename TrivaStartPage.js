const quizData = [
    {
      question: "What is the name of Mikeys brother?",
      options: ["Tiffany", "Andon", "Alex", "Fish Michael"],
      answer: "Andon"
    },
    {
      question: "How old is Michael?",
      options: ["18", "19", "20", "21"],
      answer: "20"
    },
    {
      question: "What’s my favorite season of the year?",
      options: ["Autumn", "Summer", "Spring", "Winter"],
      answer: "Autumn"
    },
    {
      question: "Which type of snack do I enjoy the most?",
      options: ["Chrips", "Chocolate", "Sweets", "Grace"],
      answer: "Grace"
    },
    {
      question: "Who is my first son?",
      options: ["Mango", "Chicken", "Osshiwatt", "Grace"],
      answer: "Mango"
    },
    {
      question: "What champions do I have most mastery point in on league?",
      options: ["Vel'koz", "Ekko", "Dr. Mundo", "Annie"],
      answer: "Ekko"
    },
    {
      question: "Which of these japanese foods do I enjoy the most?",
      options: ["Sushi", "Ramen", "Onigiri", "Yakitori"],
      answer: "Sushi"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Mars", "Earth"],
      answer: "Jupiter"
    },
    // Add more questions here...
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
    if (score == quizData.length){
      quiz.innerHTML = `<p>anti fragile</p>`//password here
    }
    else{
      quiz.innerHTML = `<p>You must not know me that well, you got some wrong, try again</p>`
    }
  }
  
  showQuestion();