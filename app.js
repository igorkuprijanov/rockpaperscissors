let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user_score");
const compScore_span = document.getElementById("computer_score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result > p");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");
let topdrawer = document.getElementById('topdrawer');
let bottomdrawer = document.getElementById('bottomdrawer');
let computerimage = document.getElementById('computerimage');
let playerimage = document.getElementById("playerimage");
let animationTxt = document.getElementById('resultTxt');
let animatedResult = document.getElementById('resultanimation');

let imgtop = document.createElement('img');
let imgbottom = document.createElement('img');

function getCompChoice(){
    const choices = ["r", "p", "s"];
    const compNum = Math.floor(Math.random()*3);
    return choices[compNum];
}

function word(letter){
    if (letter === "r"){
        return "Rock";
    } else if (letter === "p") {
        return "Paper";
    } else{
        return "Scissors";
    }
    }
animationTxt.style.display = 'none';

function win(userChoice, compChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result.innerHTML = word(userChoice) + " beats " + word(compChoice) + ". You win!";
    
    animationTxt.innerHTML = "YOU WIN!";
    animationTxt.style.display = 'block';
 animatedResult.classList.remove("animate__bounceOut");
 animatedResult.classList.add('animate__bounce');
    
    let count = 0;
     setTimeout(timer, 1000);
       
    var timer = setInterval(winanimation, 500); 
     
    function winanimation(){
        bottomdrawer.style.background = '#f50a2d';
        setTimeout(changeback, 300);
        function changeback(){
            bottomdrawer.style.background = 'red';
            count++;
        }
          if(count == 3){
            clearInterval(timer)
        }
    }
    
}

function lose(userChoice, compChoice){
    compScore++;
    compScore_span.innerHTML = compScore;
    result.innerHTML = word(userChoice) + " loses to " + word(compChoice) + ". You lose!";
    
    animationTxt.innerHTML = "COMP WINS!";
    animationTxt.style.display = 'block';
 animatedResult.classList.remove("animate__bounceOut");
 animatedResult.classList.add('animate__bounce');
    
    let count = 0;
    setTimeout(timer, 1000);
    
    var timer = setInterval(loseanimation, 500);
    
    function loseanimation(){
        topdrawer.style.background = '#2c9d42';
        setTimeout(changeback, 300);
        function changeback(){
            topdrawer.style.background = "green";
            count++;
        }
        if(count == 3){
            clearInterval(timer);
        }
    }
}

function draw(userChoice, compChoice){
    result.innerHTML = "Its a draw!";
    animationTxt.innerHTML = "A DRAW!";
    animationTxt.style.display = 'block';
 animatedResult.classList.remove("animate__bounceOut");
 animatedResult.classList.add('animate__bounce');
}

function game(userChoice){
     drawers();
    const compChoice = getCompChoice(); 
    switch(userChoice + compChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;
            
    }
    if (compChoice == "r"){
        imgtop.src = './rock1.png';
        computerimage.append(imgtop);
    }else if(compChoice == "p"){
        imgtop.src = './paper1.png';
        computerimage.append(imgtop);
    }else if(compChoice == "s"){
        imgtop.src = './scissors1.png';
        computerimage.append(imgtop);
    }
    
    if (userChoice == "r"){
        imgbottom.src = './rock1.png';
        playerimage.append(imgbottom);
    }else if(userChoice == "p"){
        imgbottom.src = './paper1.png';
        playerimage.append(imgbottom);
    }else if(userChoice == "s"){
        imgbottom.src = './scissors1.png';
        playerimage.append(imgbottom);
    }
    
        let pos = 0;
        let posC = screen.width - 300;
        let move = setInterval(moveframe, 1);
        function moveframe(){
            playerimage.style.display  = 'block';
            computerimage.style.display = 'block';
            
        if(pos == 480){
            clearInterval(move);
            setTimeout(goOut, 2000);
        }else{
            pos = pos + 4;
            posC = posC - 4;
            playerimage.style.left = pos + "px";
            computerimage.style.left = posC + "px";
        }  
        }
    let outPos = 480;
    let outPosC = 480;
    function goOut(){
    let OutMove = setInterval(moveOut, 1);
    function moveOut(){
        if(outPos == -200){
            clearInterval(OutMove);
            playerimage.style.display  = 'none';
            computerimage.style.display = 'none';
            animatedResult.classList.remove("animate__bounce");
 animatedResult.classList.add("animate__bounceOut");
        }else{
            outPos = outPos  - 4;
            outPosC = outPosC + 4;
            playerimage.style.left
             = outPos +'px';
            computerimage.style.left = outPosC + 'px';
        }
    }
    }
}



function drawers(){
    var positionTop = -screen.height/2;
    var positionBot = screen.height - 60;
    var id = setInterval(frame, 1);
    function frame(){
        if(positionTop == 0){
            clearInterval(id)
            setTimeout(drawersBack, 3000);
        }else{
            bottomdrawer.style.display = 'block';
            topdrawer.style.display = 'block';
            positionTop = positionTop + 2.5;
            positionBot = positionBot - 2.5;
            topdrawer.style.top = positionTop + "px";
            bottomdrawer.style.top = positionBot + 'px';
        }
    }
}

function drawersBack(){
    var posTop = 0;
    var posBot = 360;
    var id = setInterval(frame, 1);
     
    function frame(){
        if(posTop == -screen.height/2){
            clearInterval(id);
             bottomdrawer.style.display = 'none';
            topdrawer.style.display = 'none';
        }else{
            bottomdrawer.style.display = 'block';
            topdrawer.style.display = 'block';
            posTop = posTop - 2.5;
            posBot = posBot + 2.5;
            bottomdrawer.style.top = posBot + 'px';
            topdrawer.style.top = posTop + 'px';
            
        }
    }
}

function main (){
rock.addEventListener("click", () => game("r"));
paper.addEventListener("click", () => game("p"));
scissors.addEventListener("click", () => game("s"));
}
main();