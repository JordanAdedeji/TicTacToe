window.addEventListener('load', function(){
  let a1 = document.getElementById('a1');
  let b1 = document.getElementById('b1');
  let c1 = document.getElementById('c1');
  let a2 = document.getElementById('a2');
  let b2 = document.getElementById('b2');
  let c2 = document.getElementById('c2');
  let a3 = document.getElementById('a3');
  let b3 = document.getElementById('b3');
  let c3 = document.getElementById('c3');

  let tictactoe = new Tictactoe();
});

function Tictactoe() {
  this.moves = new Array(9);
  this.cellIds = [a1,a2,a3,b1,b2,b3,c1,c2,c3];
  this.display="X";
  this.bin = {}
  this._setup();
  this.updateDom();
}

Tictactoe.prototype= {

  _setup: function(){
  },

  updateDom: function(){
    this.clickIDs();
  },

  clickIDs: function(){
    let player1=true;
    let bin = {};
    var game = this;
    game.cellIds.forEach(function(cell){
      cell.addEventListener('click', function(){

          if (player1){
            cell.innerHTML="<img src='public/xico.png'>";
            let n = cell.id.toString();
            console.log(this)
            console.log(game)
            game.bin[n] = "X";
            console.log(game.bin);
            player1=false;
          }
          else{
            cell.innerHTML="<img src='public/oico.png'>";
            player1=true;
            let n = cell.id.toString();
            console.log(this)
            console.log(game)
            game.bin[n] = "O";
            console.log(game.bin);
            // console.log(bin);
          }
        })
      })
      // this.arr = function(){return bin}
      // console.log(this.arr);
    }

      // this.returnedArray = bin;}
}
    // console.log(this.returnedArray);
