let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");

 const  userScorePara = document.querySelector("#user_score");
 const compScorePara = document.querySelector("#comp_score");


const genCompChoice = ()=> {
    //rock, paper, scissors
    const options =["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random()* 3);
    return options[randidx];
}

const drawgame = ()=> {
    msg.innerText="Game drawn!";
    msg.style.backgroundColor = "#081b31";
    
}

const showWinner = (userwin, userChoice, compchoice) => {
     if(userwin){
        userScore++;
        userScorePara.innerText = userScore;

        msg.innerText = `You Win! Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
     } 
     else {
        compScore++;
        compScorePara.innerText = compScore;

        msg.innerText =`You Lose! ${compchoice} beats  your ${userChoice}`;
        msg.style.backgroundColor = "red";
     }
}

const playgame = (userChoice) =>{
    //Generating computer choice
  const compchoice = genCompChoice();

  if(userChoice ==  compchoice){
    //draw
    drawgame();
  } else {
    let userwin = true;
    if(userChoice === "rock"){
        // comp choice-> paper,scissor
        userwin = compchoice === "paper" ? false : true;
    } 
    else if(userChoice === "paper") {
       //comp choice-> rock, scissors
       userwin = compchoice === "scissors" ? false : true;
    }
    else {
        //comp choice-> rock, paper
       userwin = compchoice === "rock"? false: true;
    }
    showWinner(userwin, userChoice, compchoice);
  }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {

        const userChoice =  choice.getAttribute("id");
        
        playgame(userChoice);
    });
});   