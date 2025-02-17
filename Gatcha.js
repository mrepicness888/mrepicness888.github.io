
async function randomImage(pulls) {

    const twostar = ["gatcha-images/2-star-fish-michael.jpg",
    "gatcha-images/2-star-real-fishmichael.png",
    "gatcha-images/2-star-mother-and-son.png",
    "gatcha-images/2-star-angy-grace.png"
    ]
    const threestar = ["gatcha-images/3-star-sleeping-grace.png",
      "gatcha-images/3-star-mikey-with-children.png",
      "gatcha-images/3-star-glasses-grace.png"
    ]
    const fourstar = ["gatcha-images/4-star-goofy-grace.jpg",
      "gatcha-images/4-star-gamer-chicken.png",
      "gatcha-images/4-star-heart-grace.png"
    ]
    const fivestar = ["gatcha-images/5-star-doggy-grace.png",
      "gatcha-images/5-star-sexy-grace.jpg",
      "gatcha-images/5-star-michael.png"
    ]


    document.getElementsByClassName("grid-container")[0].innerHTML='';
    var parentDIV = document.getElementsByClassName("grid-container")[0];
    var modal = document.getElementById("myModal");
    var win = false

    for(var i=0;i<pulls;i++){
        var stararray = []
        var starnum
        var star = Math.random()
        if (star <= 0.5){
          stararray = twostar
          starnum = 2
        }
        else if (star > 0.5 && star <= 0.8){
          stararray = threestar
          starnum = 3
        }
        else if (star > 0.8 && star <= 0.98){
          stararray = fourstar
          starnum = 4
        }
        else {
          stararray = fivestar
          starnum = 5
        }
        var number = Math.floor(Math.random()*stararray.length); 
        var tempDIV= document.createElement('div');
        modal.style.display = "block";
        tempDIV.setAttribute('class','grid-item');
        var modalStars = '<div class = stars>'

        for(var s=0;s<starnum;s++){
          modalStars += '<span style="font-size:300%;color:yellow;">&#9733;</span>'
        }
        if (number == 2 && stararray == fivestar){
          win = true
        }
        

        modalStars += '</div>'
        var innerHTML= '<div class= "pull">'+ modalStars + '<img src="' + stararray[number]+'" /></div>'
        document.getElementsByClassName("modal-image")[0].innerHTML=innerHTML;
        tempDIV.innerHTML=innerHTML;
        parentDIV.appendChild(tempDIV);
        await sleep(1500)
    }

    if (win) {
      alert("The second part of the code is 'Pie'")
    }
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
