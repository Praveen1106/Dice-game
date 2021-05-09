var rand1= (Math.floor(Math.random() * 6)+1);
var rand2= (Math.floor(Math.random() * 6)+1);

document.querySelectorAll(".new")[0].setAttribute("src" , "images/dice" + rand1 + ".png");
document.querySelectorAll(".new")[1].setAttribute("src" , "images/dice" + rand2 + ".png");



if(rand1 > rand2)
{
    document.querySelector("h1").innerText = "Player 1 won, hurray!";
}
else if(rand2 > rand1)
{
    document.querySelector("h1").innerText = "Player 2 won, hurray!";
}
else
{
    document.querySelector("h1").innerText = "Duh, its a draw! Go again.";
}

