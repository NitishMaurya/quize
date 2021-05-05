var ball;
var database 
var position;
var form, player, game;
var playerCount;
var gameState=0;
var allPlayers;
var car1,car2,car3,car4,cars;
var contestantCount, quiz, question,contestant;

function setup(){
    createCanvas(1000,500);
    database=firebase.database();
    quiz = new Quiz();
  quiz.getState();
  quiz.start();
}

function draw(){
  background("pink")
    if(contestantCount === 1){
      quiz.update(1);//updateing gamestate
    }
    if(gameState === 1){
      clear();
      quiz.play();
    }
  
  }