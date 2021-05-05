class Contestant{
constructor(){
    this.name = null;
    this.answer = 0;
    this.rank = 0;
    this.index = null;
}
//reads playerCount value from database
getCount(){
database.ref('contestantCount').on("value",(data)=>{contestantCount= data.val()} )
console.log(contestantCount)
}
//write playerCount value into database
updateCount(count){
database.ref("/").update({contestantCount:count})
}
//update name and distance into database
update(){
var playerIndex = "players/player"+this.index;//players..player1/2/3/4
database.ref(playerIndex).set({
    name:this.name,
    answer:this.answer
})
}
//ONLY TO READ ALL INFO OF PLAYERS TOGETHER
static getPlayerInfo(){
    database.ref('players').on("value",(data)=>{allContestants= data.val()} )
}
}