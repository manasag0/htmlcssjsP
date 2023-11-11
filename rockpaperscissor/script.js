const buttons = document.querySelectorAll("button")
const resultEl = document.getElementById('result')
const playerScoreEl = document.getElementById('user-score');
const computeSocreEl = document.getElementById('computer-score');


let playerScore = 0;
let computerScore = 0;


//buttons evet listen function 
//computer random choice function
// player selection



buttons.forEach((button)=>{
  button.addEventListener('click', ()=>{
    const result = playRound(button.id,compurePlay());
    resultEl.textContent = result;
  })
})
// computer random play

function compurePlay(){
    const choices = ['rock','paper','scissors'];
    const randomCoice = Math.floor(Math.random()*choices.length);
    return choices[randomCoice]
}

function playRound(playerSelection, computerSelection){
    if(playerSelection===computerSelection){
        document.body.innerHTML = '<h1>It\'s a tie!</h1>'
        setTimeout(function(){
            //resetPage function
            resetPage();
        },1000);
    }else if
        ((playerSelection ==="rock" && computerSelection==="scissors") ||
        (playerSelection === "paper"&& computerSelection==="rock") ||
        (playerSelection==="scissors" && computerSelection=="paper")) {
            playerScore++
            playerScoreEl.textContent = playerScore;
            return "You win";
        }else{
            computerScore++
            computeSocreEl.textContent=computerScore;
            return 'Computer wins';
        }
    
}

function resetPage(){
    document.location.reload();
}
