var randomIndex1 = Math.random();
randomIndex1 = randomIndex1*6;
randomIndex1 = Math.floor(randomIndex1);

var randomIndex2 = Math.random();
randomIndex2 = randomIndex2*6;
randomIndex2 = Math.floor(randomIndex2);

var images = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"]

var source1 = "images/"+images[randomIndex1];
var source2 = "images/"+images[randomIndex2];

document.querySelectorAll("td img")[0].setAttribute("src", source1);
document.querySelectorAll("td img")[1].setAttribute("src", source2);

if(randomIndex1>randomIndex2){
    document.querySelector("h1").textContent="Player 1 Wins!";
}
else if(randomIndex2>randomIndex1){
    document.querySelector("h1").textContent="Player 2 Wins!";
}
else{
    document.querySelector("h1").textContent="It's a draw!";
}