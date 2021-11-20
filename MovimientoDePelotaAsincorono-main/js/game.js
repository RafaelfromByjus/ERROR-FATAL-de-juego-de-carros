class game {
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){gameState = data.val()});

    }
    update(state){
        database.ref("/").update({gameState: state});   
    }
    async start(){
        if(gameState === 0){
            player1 = new player();
            
            var playerCountRef = await database.ref('playerCount').once("value");

            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player1.getCount();
            }
            form1 = new form();
            form1.display();
        }
        //if(gameState === 1){
            car1 = createSprite(100,200, 50, 50);
            car2 = createSprite(300,200, 50, 50);
            car3 = createSprite(500,200, 50, 50);
            car4 = createSprite(700,200, 50, 50);

            cars = [ car1, car2, car3, car4];
        //}
        
    }
    play(){
        form1.hide();
        textSize(30);
        text("Start the Game", 120, 100);
        player.getPlayerInfo();

        if(allPlayers !== undefined){
            var Index = 0;
            var x = 0;
            var y;

           // var displayPosition = 130;
            for(var plr in allPlayers){
                Index = Index +1;
                x = x +200;
                y = displayHeight - allPlayers[plr].distance;
                cars [Index -1].x = x;
                cars [Index -1].y = y;

                if(Index === player1.Index){
                    cars [Index -1].shapeColor = "red"
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars [Index -1].y
                }
               //if(plr === "player" + player1.index)
                //fill("red");

                //else 
                //fill("blue");

                //displayPosition += 20;
                //textSize(17);
                //text(allPlayers[plr].name +": " + allPlayers[plr].distance, 120, displayPosition)

                if(keyIsDown(UP_ARROW) && player1.Index !== null){
                    player1.distance += 50;
                    player1.update();
                }
                drawSprites();
            }
        }
    }

}