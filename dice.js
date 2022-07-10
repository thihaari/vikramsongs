var randomnNumber1=Math.floor(Math.random()*6+1);
var imageName="images/dice"+randomnNumber1+".png";
document.querySelector(".img1").setAttribute("src",imageName);

var randomnNumber2=Math.floor(Math.random()*6+1);
var imageName="images/dice"+randomnNumber2+".png";
document.querySelector(".img2").setAttribute("src",imageName);

 if (randomnNumber1>randomnNumber2) {
 	document.querySelector("h1").innerHTML = "player1 won game!"
 }

 else if (randomnNumber1<randomnNumber2) {
 	document.querySelector("h1").innerHTML = "player2 has the game !!"
 }
 else{
 	document.querySelector("h1").innerHTML="its draw!!!"
 }

 
