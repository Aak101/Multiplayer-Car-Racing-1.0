var canvas, backgroundImage;
var distance = 0;
var gameState = 0;
var playerCount,allPlayers;

var database;
var car1,car2,car3,car4;
var form, player, game;
var cars;

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  if (playerCount === 4){

    game.update(1)
    
  }
  if (gameState === 1 ){

    game.play();
  }
}

