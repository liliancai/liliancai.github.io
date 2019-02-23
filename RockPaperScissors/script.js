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
var result='';

// user click the ready button, then round from 0ornull to 1,score 0:0
function startTheGame(){
  document.getElementById('modal').style.display='none';
  document.querySelector('.round').innerHTML=`Round ${rounds}: Select Rock, Paper, or Scissors.`;
  document.querySelector('.yourScore').innerHTML=yourScore;
  document.querySelector('.computerScore').innerHTML=computerScore;
  gameStarted=1;  //for qUnit test if startTheGame executed or not
}


 function playTheGame(event){
   rounds++;
   document.querySelector('.round').innerHTML=`Round ${rounds}: Select Rock, Paper, or Scissors.`;

   var userGesture=event.target.id;
   var computerGesture="";
   var computerGestureFlag=Math.floor((Math.random()*3+1));

   switch (computerGestureFlag) {
    case 1:  // rock
      computerGesture="rock";
      if(computerGesture === userGesture){
        document.querySelector('#message').innerHTML="It's a draw!";
      }
      else if(userGesture === 'paper'){
        document.querySelector('#message').innerHTML=`Computer played ${computerGesture}, you played ${userGesture}, you won this round.`;
        yourScore++;
      }else{
        document.querySelector('#message').innerHTML=`Computer played ${computerGesture}, you played ${userGesture}, you lost this round.`;
        computerScore++;
      }
      break;

    case 2:
      computerGesture='paper';
      if(computerGesture === userGesture){
        document.querySelector('#message').innerHTML="It's a draw!";
      }
      else if(userGesture === 'scissors'){
        document.querySelector('#message').innerHTML=`Computer played ${computerGesture}, you played ${userGesture}, you won this round.`;
        yourScore++;
      }else{
        document.querySelector('#message').innerHTML=`Computer played ${computerGesture}, you played ${userGesture}, you lost this round.`;
        computerScore++;
      }
      break;

    case 3:
      computerGesture='scissors';
      if(computerGesture === userGesture){
        document.querySelector('#message').innerHTML="It's a draw!";
      }
      else if(userGesture === 'rock'){
        document.querySelector('#message').innerHTML=`Computer played ${computerGesture}, you played ${userGesture}, you won this round.`;
        yourScore++;
      }else{
        document.querySelector('#message').innerHTML=`Computer played ${computerGesture}, you played ${userGesture}, you lost this round.`;
        computerScore++;
      }
      break;
    default:
   }
   document.querySelector('.yourScore').innerHTML=yourScore;
   document.querySelector('.computerScore').innerHTML=computerScore;
   //if rounds more than 10, end game
   if(rounds >=10){
     if(yourScore === computerScore){
       result="it's a draw";
     }else if(yourScore >= computerScore){
       result="you won";
     }else{
       result="you lost";
     }
     gameEnded=1;
     document.querySelector('.modal-content>p').innerHTML=`Game over, ${result}, start again?`;
     document.getElementById('modal').style.display='block';
     document.querySelector('#message').innerHTML='';
     computerScore=0;
     yourScore=0;
     rounds=0;
   }
}

document.querySelector('#ready').addEventListener('click',()=> {
  startTheGame();
});


 document.querySelectorAll('.buttons').forEach(button =>{
   button.addEventListener('click',(event)=>{
        playTheGame(event);
  });
 });
// });


//1st one should press ready button and see round1 score 0:
