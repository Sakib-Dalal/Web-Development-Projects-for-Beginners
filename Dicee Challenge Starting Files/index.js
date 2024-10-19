// document.querySelectorAll("img")[0].setAttribute("src", "images/dice2.png");

function randomInt(max) {
    var num = Math.random() * max;
    num = Math.floor(num);
    return num;
}

var dice1 = randomInt(6) + 1;
var dice2 = randomInt(6) + 1;

// var st = "dice1";
// console.log(st.split("")[st.length-1]);

var dices = document.querySelectorAll("img");
dices[0].setAttribute("src", "images/dice"+dice1+".png");
dices[1].setAttribute("src", "images/dice"+dice2+".png");

if (dice1 > dice2) {
    document.querySelector("h1").textContent = "⛳️ Player 1 Win";
} else if (dice1 < dice2) {
    document.querySelector("h1").textContent = "Player 2 Win ⛳️";
} else {
    document.querySelector("h1").textContent = "Draw";
}