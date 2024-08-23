let prePlay = document.getElementById("pre-play");
let play = document.getElementById("play");
let list = ["rock", "paper", "scissor"];
let human = 0;
let computer = 0;

function start(value) {
    
    if (value.innerHTML === "Play"){
        prePlay.innerHTML = "";
        play.innerHTML = "Start Again";

        displayChoice();
        document.getElementById("pointssep").innerHTML = " ------- ";
    }
    else if (value.innerHTML === "Start Again"){
        startAgain();
    }
    
}

function humanChoice(item) {

    document.getElementById("choiceHuman").innerHTML = "You Choosed";
    let human = document.getElementById("human");

    document.getElementById("humanchoose").src = item + "_hand.png";
    computerChoice(item);

}

function displayChoice() {

    let choice = document.getElementById("choice");
    let choiceHead = document.getElementById("select-choice")
    choiceHead.innerHTML = "Select your Choice";

    let paper = document.createElement("img");
    paper.src = "paper_hand.png";
    paper.setAttribute("onclick", "humanChoice('paper')");
    let rock = document.createElement("img");
    rock.src = "rock_hand.png";
    rock.setAttribute("onclick", "humanChoice('rock')");
    let scissor = document.createElement("img");
    scissor.src = "scissor_hand.png";
    scissor.setAttribute("onclick", "humanChoice('scissor')");

    choice.appendChild(rock);
    choice.appendChild(paper);
    choice.appendChild(scissor);
}


function computerChoice(humanchoose) {
    let index = 0 + Math.floor(Math.random() * 3);
    document.getElementById("choiceComputer").innerHTML = "Computer choosed"
    document.getElementById("computerChoose").src = list[index] + "_hand.png";


    if (humanchoose === list[index]){
        document.getElementById("showresult").innerHTML = "Tie";
    }

    else if (humanchoose === "scissor" && list[index] === "paper"){
        document.getElementById("showresult").innerHTML = "You Won";
        points("human");
    }

    else if (humanchoose === "paper" && list[index] === "rock"){
        document.getElementById("showresult").innerHTML = "You Won";
        points("human");
    }

    else if (humanchoose === "rock" && list[index] === "scissor"){
        document.getElementById("showresult").innerHTML = "You Won";
        points("human");
    }

    else {
        document.getElementById("showresult").innerHTML = "You Lost";
        points("computer");
    }

    return;

}

function startAgain() {
    human = 0;
    computer = 0;
    document.getElementById("humanpoints").innerHTML = 0;
    document.getElementById("computerpoints").innerHTML = 0;
    document.getElementById("pointssep").innerHTML = " ------- ";
    return;
}

function points(won) {
    if (won === "human"){
        human += 1;
    }
    else {
        computer += 1;
    }
    updatePoints();
}

function updatePoints(){
    document.getElementById("humanpoints").innerHTML = human;
    document.getElementById("computerpoints").innerHTML = computer;
}