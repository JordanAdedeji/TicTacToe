let tictactoeTEST;

window.addEventListener('load', function(){
  console.log('hello!!!!!!!')

  tictactoeTEST = new Tictactoe();

  console.log(tictactoeTEST.bin)
  console.log(tictactoeTEST.bin['b3'])
});
function TableCreate(){
 boardgame = this
 var body = document.body;
 var gameSection = document.getElementById('section-game');
 this.table = document.createElement('table');
 this.table.setAttribute("id", "gametable");
 var tr1 = table.insertRow();
 var tr2 = table.insertRow();
 var tr3 = table.insertRow();
 this.a1 = tr1.insertCell();
 this.a2 = tr2.insertCell();
 this.a3 = tr3.insertCell();
 this.b1 = tr1.insertCell();
 this.b2 = tr2.insertCell();
 this.b3 = tr3.insertCell();
 this.c1 = tr1.insertCell();
 this.c2 = tr2.insertCell();
 this.c3 = tr3.insertCell();
 this.a1.setAttribute("id", "a1");
 this.a2.setAttribute("id", "a2");
 this.a3.setAttribute("id", "a3");
 this.b1.setAttribute("id", "b1");
 this.b2.setAttribute("id", "b2");
 this.b3.setAttribute("id", "b3");
 this.c1.setAttribute("id", "c1");
 this.c2.setAttribute("id", "c2");
 this.c3.setAttribute("id", "c3");
 gameSection.appendChild(table);
}
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
      console.log("hello")
      this.inputPl2 = document.getElementById("player2name").value;
      console.log(tic);
      tic.takeinput()
    })

    this.clickIDs();
  },

  takeinput: function(){
    document.getElementById('pl1Name').innerHTML = input.inputPl1
    document.getElementById('pl2Name').innerHTML = input.inputPl2
  },

  search: function(gridArray){
    let outcome;
  if (gridArray['a1']){
    if (gridArray['a1']===gridArray['b1']&&gridArray['a1']===gridArray['c1']){
      return ((gridArray['a1']=="X")? outcome = 'winner1': outcome = 'winner2');
    }
    else if (gridArray['a1']===gridArray['a2']&&gridArray['a1']===gridArray['a3']){
      return ((gridArray['a1']=="X")? outcome = 'winner1' : outcome = 'winner2');
    }
    else if (gridArray['a1']===gridArray['b2']&&gridArray['a1']===gridArray['c3']){
      return ((gridArray['a1']=="X")? outcome = 'winner1': outcome = 'winner2');
    }
  }
  else if (gridArray['c1']){
    if (gridArray['c1']===gridArray['b2']&&gridArray['c1']===gridArray['a3']){
      return ((gridArray['c1']=="X")? outcome = 'winner1' : outcome = winner2);
    }
    else if (gridArray['c1']===gridArray['c2']&&gridArray['c1']===gridArray['c3']){
      return ((gridArray['c1']=="X")? outcome = 'winner1' : outcome = winner2);
    }
  }
  else if (gridArray['b1']){
      if (gridArray['b1']===gridArray['b2']&&gridArray['b1']===gridArray['b3']){
        return ((gridArray['b1']=="X")? outcome = 'winner1' : outcome = 'winner2');
      }
  }
  else if (gridArray['a2']){
    if (gridArray['a2']===gridArray['b2']&&gridArray['a2']===gridArray['c2']){
      return ((gridArray['a2']=="X")? outcome = 'winner1' : outcome = 'winner2');
    }
  }
  else if (gridArray['a3']){
    if (gridArray['a3']===gridArray['b3']&&gridArray['a3']===gridArray['c3']){
      return ((gridArray['a3']=="X")? outcome = 'winner1' : outcome = 'winner2');
    }
  }
},

  clickIDs: function(){
    var game = this;
    game.cellIds.forEach(function(cell){
      cell.addEventListener('click', function(){
          if (game.player1){
            if (cell.innerHTML == ""){
              cell.innerHTML="<img src='assets/img/xico.png'>";
              if (game.bin[cell.id] == null ){
                game.bin[cell.id] = "X";
                console.log(game.bin)
              }
              game.player1=false;
              }
            }
          else{
            if (cell.innerHTML == ""){
              cell.innerHTML="<img src='assets/img/oico.png'>";
              game.player1=true;
              if (game.bin[cell.id] == null){
                game.bin[cell.id] = "O";
            }
          }
        }
         document.getElementById('winner').innerHTML = game.search(game.bin)
      })
    })
  },

getInputValue: function(){
  var inputPl1 = document.getElementById("player1name").value;
  var inputPl2 = document.getElementById("player2name").value;
}

}
