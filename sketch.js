var database;
var form,game,player,gameState = 0,playerCount = 0;
var allPlayerInfo;
var car1,car2,car3 ,car4;
var carImg1,carImg2,carImg3 ,carImg4,trackImg;
var carsList;

function preload(){
    carImg1 = loadImage("image/car1.png")
    carImg2 = loadImage("image/car2.png")
    carImg3 = loadImage("image/car3.png")
    carImg4 = loadImage("image/car4.png")
    trackImg = loadImage("image/track.jpg")
}

function setup(){
    createCanvas(displayWidth - 20,displayHeight - 20);
   
    database = firebase.database()//initilised firebase real time database
    game = new GamePlay()
    game.getGameState()
    game.startGame()

}

function draw(){
    background("white");
     if(playerCount === 4){
         gameState = 1;
         game.writeGameState(1)
        // console.log("B")
     }
     if(gameState === 1){
         game.playGame()
         form.hideForm()
         //console.log("A")

     }
     if(gameState === 2){
         game.endGame()
     }
     drawSprites();
}


