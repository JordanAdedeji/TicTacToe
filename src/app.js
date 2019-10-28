let tictactoe;

window.addEventListener('load', function(){
  tictactoe = new Tictactoe();
});


function Tictactoe() {
 TableCreate();
 this.cellIds = [boardgame.a1,boardgame.a2,boardgame.a3,boardgame.b1,boardgame.b2,boardgame.b3,boardgame.c1,boardgame.c2,boardgame.c3];
 this.bin = {}
 this.player1 = true;
 this.submit = document.getElementById("submitbutton");
 this.updateDom();
}

Tictactoe.prototype= {

  updateDom: function(){
    tic = this
    this.submit.addEventListener('click', function(){
      input = this
      this.inputPl1 = document.getElementById("player1name").value;
      this.inputPl2 = document.getElementById("player2name").value;
      tic.takeinput();
    })
    this.clickIDs();
  },
  takeinput: function(){
    names = this
    this.name1 = document.getElementById('pl1Name')
    this.name1.innerHTML = input.inputPl1

    this.name2= document.getElementById('pl2Name')
    this.name2.innerHTML = input.inputPl2

  },

  clickIDs: function(){
      console.log("5");
    var game = this;
    game.cellIds.forEach(function(cell){
      cell.addEventListener('click', function(){
          if (game.player1 === true){
            if (cell.innerHTML == ""){
              cell.innerHTML="<img src='assets/img/xico.png'>";
              if (game.bin[cell.id] == null ){
                game.bin[cell.id] = "X";
              }
              game.player1=false;
              }
          }if (game.player1 === false){
            if (cell.innerHTML == ""){
              cell.innerHTML="<img src='assets/img/oico.png'>";
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
