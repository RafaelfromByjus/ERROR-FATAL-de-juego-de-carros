class form {
    constructor(){
        this.input = createInput("Nombre del Jugador");
        this.button = createButton("PLAY");
        this.welcome = createElement("h3");
        this.button2 = createButton("RESET");
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.welcome.hide();

    }
    display(){
        var title = createElement("h2");
        title.html("Racing");
        title.position(130, 0);

       
        this.input.position(130, 60);

        
        this.button.position(250, 200);
        this.button2.position(250, 250);
        

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
        
           

            player1.name = this.input.value();

            playerCount +=1;
            player1.index = playerCount
            player1.update();
            player1.updateCount(playerCount);

            this.welcome.html("Hola! " + player1.name);
            this.welcome.position(250, 200);
        })
        

        this.button2.mousePressed(()=>{
            player1.updateCount(0);

            game1.update(0);

            player1.getPlayerInfo(0);
        })
    }
}