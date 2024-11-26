const quizData = [
    {
      question: "What is the name of Mikeys brother?",
      options: ["Tiffany", "Alex", "Andon", "Fish Michael"],
      answer: "Andon"
    },
    {
      question: "How old is Michael?",
      options: ["18", "19", "20", "21"],
      answer: "20"
    },
    {
      question: "What’s my favorite season of the year?",
      options: ["Spring", "Summer", "Autumn", "Winter"],
      answer: "Autumn"
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