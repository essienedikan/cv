var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1)+ 1;

var randomDiceimage = "images/"+ "dice"+ randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDiceimage);

var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2)+ 1;

var randomDiceimage2 = "images/"+ "dice"+ randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceimage2);


if(randomDiceimage > randomDiceimage2){
   document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if (randomDiceimage2 > randomDiceimage){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}