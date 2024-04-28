 function startGame() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;  //1-6

  var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

  var randomImageSource = "Images/" + randomDiceImage; //images/dice1.png / images/dice6.png

  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomImageSource);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImageSource2 = "Images/dice" + randomNumber2 + ".png";

  var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h2").innerHTML = "🏆 Player 1 Wins!";
    document.querySelector("h2").style.opacity = 1;
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h2").innerHTML = "Player 2 Wins! 🏆";
    document.querySelector("h2").style.opacity = 1;
  }
  else {
    document.querySelector("h2").innerHTML = "Draw!";
    document.querySelector("h2").style.opacity = 1;
  }
 }
 


