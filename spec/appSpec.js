
describe('Tictactoe', function () {

  it('Test bin is empty by default', function() {
    expect(tictactoe.bin).toEqual({})
  });

  it('Player one is X', function() {
    tictactoe.player1 = true
    $("#a1").click();
    expect(tictactoe.bin['a1']).toEqual('X')
    tictactoe.bin = {}
  });

  it('Player two is O', function() {
    tictactoe.player1 = true
    $("#b2").click();
    $("#b3").click();
    expect(tictactoe.bin['b3']).toEqual('O')
    tictactoe.bin = {}
  });

  it('c1 cell is clicked', function() {
    tictactoe.player1 = true
    spyEvent = spyOnEvent("#c1", 'click');
    $("#c1").click();
    expect('click').toHaveBeenTriggeredOn("#c1");
    expect(spyEvent).toHaveBeenTriggered();
    tictactoe.bin = {}
  });

  it('c2 cell is clicked', function() {
    tictactoe.player1 = true
    spyEvent = spyOnEvent("#c2", 'click');
    $("#c2").click();
    expect('click').toHaveBeenTriggeredOn("#c2");
    expect(spyEvent).toHaveBeenTriggered();
    tictactoe.bin = {}
  });


});
