var database;
var player1;
var form1;
var allPlayers;
var gameState = 0;
var playerCount = 0;
var game1;
var distance= 0;
var  cars, car1, car2, car3, car4;

function setup(){
    database = firebase.database();
    createCanvas(500,500);

    game1 = new game();
    game1.getState();
    game1.start();

}
function draw(){
    background("white");

    if(playerCount === 4){
        game1.update(1);
    }
    if(gameState === 1){
        clear();
        game1.play();
    }
}