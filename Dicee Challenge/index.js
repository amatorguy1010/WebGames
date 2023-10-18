var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var player1 =prompt("Enter your name :");
var player2 =prompt("Enter your name :");

if(randomNumber1===1){
   var image1 = document.querySelector(".img1");
   image1.setAttribute("src","images/dice1.png");
}
 if(randomNumber1===2){
    var image1 = document.querySelector(".img1");
    image1.setAttribute("src","images/dice2.png");
 }
 if(randomNumber1===3){
    var image1 = document.querySelector(".img1");
    image1.setAttribute("src","images/dice3.png");
}
 if(randomNumber1===4){
    var image1 = document.querySelector(".img1");
    image1.setAttribute("src","images/dice4.png");
}
 if(randomNumber1===5){
    var image1 = document.querySelector(".img1");
    image1.setAttribute("src","images/dice5.png");
}
 if(randomNumber1===6){
    var image1 = document.querySelector(".img1");
    image1.setAttribute("src","images/dice6.png");
 }

 if(randomNumber2===1){
    var image1 = document.querySelector(".img2");
    image1.setAttribute("src","images/dice1.png");
 }
  if(randomNumber2===2){
     var image1 = document.querySelector(".img2");
     image1.setAttribute("src","images/dice2.png");
  }
  if(randomNumber2===3){
     var image1 = document.querySelector(".img2");
     image1.setAttribute("src","images/dice3.png");
 }
  if(randomNumber2===4){
     var image1 = document.querySelector(".img2");
     image1.setAttribute("src","images/dice4.png");
 }
  if(randomNumber2===5){
     var image1 = document.querySelector(".img2");
     image1.setAttribute("src","images/dice5.png");
 }
  if(randomNumber2===6){
     var image1 = document.querySelector(".img2");
     image1.setAttribute("src","images/dice6.png");
  }

 if(randomNumber1 > randomNumber2)
 {
    var player1Win = document.querySelector("h1");
    player1Win.innerHTML = player1+ " Won!";
 }
 else if (randomNumber1 === randomNumber2)
    {
        document.querySelector("h1").innerHTML = "Draw!";
    }
    else{
        document.querySelector("h1").innerHTML = player2+ " Won!";
    }

 