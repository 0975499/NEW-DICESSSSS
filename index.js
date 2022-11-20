var A1 = Math.floor(Math.random()*6)+1;
var A2 = Math.floor(Math.random()*6)+1;

var Image1 = "images/dice" + A1 + ".png";
var Image2 = "images/dice" + A2 + ".png";

var imageArray1 = document.querySelectorAll("img")[0].setAttribute("src",Image1);

var imageArray2 = document.querySelectorAll("img")[1].setAttribute("src",Image2);

if (A1>A2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!"
}
else if (A1<A2) {
  document.querySelector("h1").innerHTML = "Player 2 wins!"
}
else {
  document.querySelector("h1").innerHTML = "TIE!"
}
