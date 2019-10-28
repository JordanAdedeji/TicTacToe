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
 this.a2 = tr1.insertCell();
 this.a3 = tr1.insertCell();
 this.b1 = tr2.insertCell();
 this.b2 = tr2.insertCell();
 this.b3 = tr2.insertCell();
 this.c1 = tr3.insertCell();
 this.c2 = tr3.insertCell();
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
