//event handlers
//randomlize rock paper or Scissors
//compare result return to table
//if 5 rounds trigger end of game


//button=getElementById('rock');
//get button, get table, get scissor;

var gameStarted=0;
//user click the ready button, then round from 0ornull to 1,score 0:0
function startTheGame(){
  document.getElementById('modal').style.display='none';
  gameStarted=1;
}

document.querySelector('#ready').addEventListener('click',()=> {
  console.log("Hi click ready go");
  startTheGame();
});




//1st one should press ready button and see round1 score 0:0
