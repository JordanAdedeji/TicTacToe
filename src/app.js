let tictactoe;

window.addEventListener('load', function(){
  tictactoe = new Tictactoe();
});


function Tictactoe() {
 TableCreate();
 this.cellIds = [boardgame.a1,boardgame.a2,boardgame.a3,boardgame.b1,boardgame.b2,boardgame.b3,boardgame.c1,boardgame.c2,boardgame.c3];
 this.bin = {}
 this.updateDom();
 this.player1 = true;
}

Tictactoe.prototype= {

  updateDom: function(){
    this.clickIDs();
  },

  clickIDs: function(){
    var game = this;
    game.cellIds.forEach(function(cell){
      cell.addEventListener('click', function(){
          if (game.player1 === true){
            if (cell.innerHTML == ""){
              cell.innerHTML="<img src='public/xico.png'>";
              if (game.bin[cell.id] == null ){
                game.bin[cell.id] = "X";
              }
              game.player1=false;
              }
          }if (game.player1 === false){
            if (cell.innerHTML == ""){
              cell.innerHTML="<img src='public/oico.png'>";
              game.player1=true;
              if (game.bin[cell.id] == null){
                game.bin[cell.id] = "O";
             }
            }
          }
        if (search(game.bin) != undefined){
         document.getElementById('winner').innerHTML = search(game.bin)
         game.player1 = null
       }
      })
    })
    }
}
