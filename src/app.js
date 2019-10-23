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

});



function Tictactoe() {
  this.moves = new Array(9);
  this.cellIds = [a1,a2,a3,b1,b2,b3,c1,c2,c3];
  this.display="X";
  this.player1=true;
}

Tictactoe.prototype= {
  _setup: function(){

  },

  display: function(){
      console.log('display');
      return 'O';
  },

  clickIDs: function(){

  this.cellIds.forEach(function(cell){
    let player1=this.player1;
      cell.addEventListener('click', function(){
        if (player1){
        cell.innerHTML='X';
        player1=false;
      }else{
        cell.innerHTML='O';
        player1=true;
      }
      })
    })
  }
}
