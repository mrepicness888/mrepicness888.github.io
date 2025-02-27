const quizData = [
    {
      question: "I'm going to slay you some songs and you have to guess them correctly, we'll start easy. What song is this?",
      audio: "music/Stay-with-me.mp3",
      options: ["Plastic Love", "Stay with me", "Pretty Women", "Fragile"],
      answer: "Stay with me"
    },
    {
      question: "I'm gonna throw you off and keep switching genres, keep up. What song is this?",
      audio: "music/LukaLukaNightfever.mp3",
      options: ["Romeo and Cinedella", "Stay with me", "Luka Luka Night Fever", "The Lost Ones Weeping"],
      answer: "Luka Luka Night Fever"
    },
    {
      question: "Actually lets stick with this genre shall we. What song is this?",
      audio: "music/Romeo&Cinderella.mp3",
      options: ["Romeo and Cinedella", "The Dissapearace of Miku", "Luka Luka Night Fever", "The Lost Ones Weeping"],
      answer: "Romeo and Cinedella"
    },
    {
      question: "Actually lets stick with this genre shall we 2. What song is this?",
      audio: "music/The_Lost_Ones_Weeping.mp3",
      options: ["Romeo and Cinedella", "The Dissapearace of Miku", "Luka Luka Night Fever", "The Lost Ones Weeping"],
      answer: "The Lost Ones Weeping"
    },
    {
      question: "Back to Citypop. What song is this?",
      audio: "music/Fragile.mp3",
      options: ["Plastic Love", "Stay with me", "Ride On Time", "Fragile"],
      answer: "Fragile"
    },
    {
      question: "Back to Citypop. What song is this?",
      audio: "music/plastico2.mp3",
      options: ["Plastic Love", "Stay with me", "Ride On Time", "Fragile"],
      answer: "Plastic Love"
    },
    {
      question: "Now to pop. What song is this?",
      audio: "music/Idol.mp3",
      options: ["Ride on Time", "Monster", "Racing into the Night", "Idol"],
      answer: "Idol"
    },
    {
      question: "Now to pop. What song is this?",
      audio: "music/Keane_-_Somewhere_Only_We_Know_CeeNaija.com_.mp3",
      options: ["Umberella", "Lovely", "Somewhere Only We Know", "Just the Two of Us"],
      answer: "Somewhere Only We Know"
    },
    {
      question: "Hard Questions now. What song is this?",
      audio: "music/TheonlythingIknowforreal.mp3",
      options: ["Bury The Light", "It has to be this Way", "The Only Thing I Know For Real", "Six trillion years and overnight story"],
      answer: "The Only Thing I Know For Real"
    }, 
    {
      question: "Another Hard one. What song is this?",
      audio: "music/Overnight.mp3",
      options: ["Bury The Light", "It has to be this Way", "The Only Thing I Know For Real", "Six trillion years and overnight story"],
      answer: "Six trillion years and overnight story"
    }, 
    {
      question: "Another Hard one. What song is this?",
      audio: "music/Overnight.mp3",
      options: ["Bury The Light", "It has to be this Way", "The Only Thing I Know For Real", "Six trillion years and overnight story"],
      answer: "Six trillion years and overnight story"
    }, 
    {
      question: "Another Hard one. What song is this?",
      audio: "music/wrongnote.mp3",
      options: ["Chopin - Etude Op. 25 No. 5", "Liszt - Hungarian Rhapsody No.  2", "Chopin - Fantaisie-Impromptu (Op. 66)", "Chopin - Ballade No. 1 in G Minor"],
      answer: "Chopin - Etude Op. 25 No. 5"
    }, 
    {
      question: "Another Hard one. What song is this?",
      audio: "music/tiny.mp3",
      options: ["Bad Apple", "Tiny Little Adiantum", "Night of Nights", " Cirno's Perfect Math Class"],
      answer: "Tiny Little Adiantum"
    }, 
    {
      question: "Another Hard one. What song is this?",
      audio: "music/night.mp3",
      options: ["Bad Apple", "Tiny Little Adiantum", "Night of Nights", " Cirno's Perfect Math Class"],
      answer: "Night of Nights"
    },
    {
      question: "Another Hard one. What song is this?",
      audio: "music/virus.mp3",
      options: ["Beethoven Virus", "Beethoven - Moonlight Sonata", "Liszt - La Campanella", "KING"],
      answer: "Beethoven Virus"
    }, 
    // Add more questions here...
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const audioElement = document.getElementById("audio");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    audioElement.innerHTML = `<audio controls src=${question.audio}> </audio>`

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
      quiz.innerHTML = `<p>Congrats! The Last part of the code is "Mokal"</p>`//password here
    }
    else{
      quiz.innerHTML = `<p>You must not know me that well, you got some wrong, try again</p>`
    }
  }
  
  showQuestion();