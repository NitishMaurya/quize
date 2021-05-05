class Quiz{

    constructor(){}
    
    //reads GameState value from database
    getState(){
        database.ref('gameState').on("value",(data)=>{gameState= data.val()} )
        console.log(gameState)
    }
        //write GameState value into database
    update(state){
        database.ref("/").update({gameState:state})
    }
    async start(){
        if(gameState===0){
        contestant = new Contestant();
        //player.getCount();
        var playerCountRef = await database.ref('contestantCount').once("value");
        if(playerCountRef.exists()){
          contestantCount = playerCountRef.val();
          contestant.getCount();
        }
        question = new Question();
        question.display();
        }
       
    }
play(){
        question.hide();
        textSize(30);
        background("lightblue");

        text("Result is as follows:", 300,100);
        Contestant.getPlayerInfo();//allPLayers is filled up here.allPLayers,allPlayers is an array
        if(allContestants!==undefined){
            /*
            var yposition = displayHeight/2;
            //plr is the index, 0,1,2,,3,4..
            for(var plr in allPlayers){
                if(plr===player.index){//player1/player2/player3/player4
                    fill("red")
                }
                else{
                    fill("black")
                }
            yposition = yposition+50;
            textSize(30);
            text(allPlayers[plr].name + allPlayers[plr].distance, displayWidth/2-100, yposition)
            }
            */

            var ans = 230;
            for(var plr in allContestants){
              var correctAns ='2';
              if(correctAns ===allContestants[plr].answer){
                  fill("green")
              }
              else{
                fill("red")
              }
              ans = ans +30;
              text(allContestants[plr].name + allContestants[plr].answer, 250,ans)
            }
            drawSprites();

        }
    
      
    }

}