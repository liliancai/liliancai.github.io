//event handlers
//randomlize rock paper or Scissors
//compare result return to table
//if 5 rounds trigger end of game


//button=getElementById('rock');
//get button, get table, get scissor;

var yourScore=0;
var computerScore=0;
var rounds=0;

var gameStarted=0;
var gameEnded=0;

// user click the ready button, then round from 0ornull to 1,score 0:0
function startTheGame(){
  document.getElementById('modal').style.display='none';
  document.querySelector('.round').innerHTML=`Round ${rounds}: Select Rock, Paper, or Scissors.`;
  document.querySelector('.yourScore').innerHTML=yourScore;
  document.querySelector('.computerScore').innerHTML=computerScore;
  gameStarted=1;  //for qUnit test if startTheGame executed or not
}


 function playTheGame(){
   rounds++;
   document.querySelector('.round').innerHTML=`Round ${rounds}: Select Rock, Paper, or Scissors.`;



   //if rounds more than 10, end game
   if(rounds >=10){
     gameEnded=1;
     document.querySelector('.modal-content>p').innerHTML="Game over,start again?";
     document.getElementById('modal').style.display='block';
   }
}

document.querySelector('#ready').addEventListener('click',()=> {
  console.log("Hi click ready go");
  startTheGame();
});


 document.querySelectorAll('.buttons').forEach(button =>{
   button.addEventListener('click',()=>{
        playTheGame();
  });
 });
// });


//1st one should press ready button and see round1 score 0:
