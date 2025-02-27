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
      question: "How old is Grace? (For leagal reasons this is a joke and the answer is 44)",
      options: ["82", "66", "44", "69"],
      answer: "44"
    },
    {
      question: "What's my favorite season of the year?",
      options: ["Autumn", "Summer", "Spring", "Winter"],
      answer: "Autumn"
    },
    {
      question: "Who was my main in Valorant?",
      options: ["Reyna", "Cypher", "Deadlock", "Chamber"],
      answer: "Reyna"
    },
    {
      question: "Which type of snack do I enjoy the most?",
      options: ["Chrips", "Chocolate", "Sweets", "Grace"],
      answer: "Grace"
    },
    {
      question: "Who is my first son?",
      options: ["Mango", "Chicken", "Oshawott", "Grace"],
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
      question: "Where was my old house (the one I lived in before belvedere)?",
      options: ["Woolwich", "Croyden", "Abbey Wood", "Thamesmead"],
      answer: "Thamesmead"
    },
    {
      question: "What steam game do I have the most hours on?",
      options: ["Palworld", "Stellaris", "Black Desert Online", "Total War: Three Kingdoms"],
      answer: "Black Desert Online"
    },
    {
      question: "What was the first movie we watched (fully) together?  (Not Series)",
      options: ["Pretty Women", "Rounders", "The Bee Movie"],
      answer: "Rounders"
    },
    {
      question: "Hard Question: What the name of my badminton coach?",
      options: ["Kendric", "Kim", "Kevin", "Ken"],
      answer: "Kim"
    },
    {
      question: "What is my favorite condom type?",
      options: ["Thin feel", "Flavored", "Thick Feel", "Ribbed and Dotted"],
      answer: "Ribbed and Dotted"
    },
    {
      question: "Hard Question: What was the first anime I ever watched?",
      options: ["Highschool dxd", "The Royal Tutor", "Death Note", "Attack on Titan"],
      answer: "Death Note"
    },
    {
      question: "Hard Question: What was my RE GCSE grade?",
      options: ["5", "6", "7", "8"],
      answer: "7"
    },
    {
      question: "Hard Question: What was the first gatcha game I ever played?",
      options: ["Maplestory", "7 Deadly Sins", "Wethering Waves", "Dissidia Final Fantasy Opera Omnia"],
      answer: "Dissidia Final Fantasy Opera Omnia"
    },
    {
      question: "General knowledge time!!! What is the largest planet in our solar system?",
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
    } else {
      alert("wrong!!! Time to try again... From the beginning hehe")
      window.location.reload();
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
      quiz.innerHTML = `<p>Congrats! The First part of the code is "Cutie"</p>`//password here
    }
    else{
      quiz.innerHTML = `<p>You must not know me that well, you got some wrong, try again</p>`
    }
  }
  
  showQuestion();