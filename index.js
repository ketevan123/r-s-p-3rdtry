
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');


let computerScore = 1;
let playerScore = 1;

const rockIcon = "rock-icon";
const paperIcon = "paper-icon";
const scissorsIcon = "scissors-icon";

const randomClasses = [rockIcon, paperIcon, scissorsIcon];
const text = document.getElementById('demo');
const text2 = document.getElementById('demo2');

const tie = ()=>{
    text.innerHTML = "It's a Tie ! ";
    text.style.color = 'orange';
    text2.innerHTML = text.innerHTML;
    text2.style.color = 'orange';
}

const win = ()=>{
    text.innerHTML = "It's a Win ! ";
    text.style.color = 'rgb(1, 146, 1)';
    text2.innerHTML = text.innerHTML;
    text2.style.color = 'rgb(1, 146, 1)';
}

const lose = ()=>{
    text.innerHTML = "You Lost ! ";
    text.style.color = 'red';
    text2.innerHTML = text.innerHTML;
    text2.style.color = 'red';
}

const game = () =>{
    buttons.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
           let clickedBtn = e.target.className;
           showIcon.className = clickedBtn;
           let randomNum = Math.floor(Math.random() * randomClasses.length);
           computerShowIcon.className = randomClasses[randomNum];

           if(showIcon.className === computerShowIcon.className){
               pScore.innerHTML = pScore.innerHTML;
               cScore.innerHTML = cScore.innerHTML;
               tie();
           }

           else if(showIcon.className === rockIcon && computerShowIcon.className === scissorsIcon){
               pScore.innerHTML = playerScore;
               playerScore++;
               win();
           }else if(showIcon.className === rockIcon && computerShowIcon.className === paperIcon){
               cScore.innerHTML = computerScore;
               computerScore++;
               lose();
           }else if(showIcon.className === paperIcon && computerShowIcon.className === scissorsIcon){
               cScore.innerHTML = computerScore;
               computerScore++;
               lose();
           }else if(showIcon.className === paperIcon && computerShowIcon.className === rockIcon){
               pScore.innerHTML = playerScore;
               playerScore++;
               win();
           }else if(showIcon.className === scissorsIcon && computerShowIcon.className === rockIcon){
               cScore.innerHTML = computerScore;
               computerScore++;
               lose();
           }else if(showIcon.className === scissorsIcon && computerShowIcon.className === paperIcon){
               pScore.innerHTML = playerScore;
               playerScore++;
               win();
           }
        });
    });
}
game();