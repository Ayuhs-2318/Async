class Game{
    constructor(){
    }
getState(){
 var gamestateref=database.ref("gamesState")
 gamestateref.on("value",function(data){
     gameState=data.val()
 }) 
}
update(state){
  database.ref("/").update({
      gameState:state
  })  
}
async start(){
   if (gameState===0){
player=new Player()
var playercountref=await database.ref("playercount").once("value")
if (playercountref.exists()){
    playerCount=playercountref.val()
    player.getCount()
}

form=new Form ()
form.display()
   }
}
play(){
    form.hide()
    textsize("30")
    text("gamestart",120,100)
    Player.getPlayerInfo()
    if (allplayers!==undefined){ 
       var displayposition=130
       for (var plr in allplayers ){
           if (plr==="player"+player.index){
               fill("red")
           }
           else {
               fil("black")
           }
       
       displayposition+=20
       textSize(50)
    text(allplayers[plr].name+": "+allplayers[plr].distance,120,displayposition)
    }
}
if (keyDown("Up_Arrow")&&player.index!==null){
    player.distance+=50
    player.update()
}
}
}