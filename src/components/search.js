
function search(gridArray) {
  let outcome;
  if (gridArray['a1']){
    if (gridArray['a1']===gridArray['b1']&&gridArray['a1']===gridArray['c1']){
      newswitch('A1C1')
      return ((gridArray['a1']=="X")? outcome = 'Player One Wins!': outcome = 'Player Two Wins!');
    }
    else if (gridArray['a1']===gridArray['a2']&&gridArray['a1']===gridArray['a3']){
      newswitch('A1A3')
      return ((gridArray['a1']=="X")? outcome = 'Player One Wins!' : outcome = 'Player Two Wins!');
    }
    else if (gridArray['a1']===gridArray['b2']&&gridArray['a1']===gridArray['c3']){
      newswitch('A1C3')
      return ((gridArray['a1']=="X")? outcome = 'Player One Wins!': outcome = 'Player Two Wins!');
    }
  }
  if (gridArray['c1']){
    if (gridArray['c1']===gridArray['b2']&&gridArray['c1']===gridArray['a3']){
      newswitch('A3C1')
      return ((gridArray['c1']=="X")? outcome = 'Player One Wins!' : outcome = 'Player Two Wins!');
    }
    else if (gridArray['c1']===gridArray['c2']&&gridArray['c1']===gridArray['c3']){
      newswitch('C1C3')
      return ((gridArray['c1']=="X")? outcome = 'Player One Wins!' : outcome = 'Player Two Wins!');
    }
  }
  if (gridArray['b1']){
      if (gridArray['b1']===gridArray['b2']&&gridArray['b1']===gridArray['b3']){
        newswitch('B1B3')
        return ((gridArray['b1']=="X")? outcome = 'Player One Wins!' : outcome = 'Player Two Wins!');
      }
  }
  if (gridArray['a2']){
    if (gridArray['a2']===gridArray['b2']&&gridArray['a2']===gridArray['c2']){
      newswitch('A2C2')
      return ((gridArray['a2']=="X")? outcome = 'Player One Wins!' : outcome = 'Player Two Wins!');
    }
  }
  if (gridArray['a3']){
    if (gridArray['a3']===gridArray['b3']&&gridArray['a3']===gridArray['c3']){
      newswitch('A3C3')
      return ((gridArray['a3']=="X")? outcome = 'Player One Wins!' : outcome = 'Player Two Wins!');
    }
  }
}
