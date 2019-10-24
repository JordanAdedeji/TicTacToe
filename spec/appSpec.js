
describe('Tictactoe', function () {

  var tic;

  // beforeEach(function() {
  //   tic = new Tictactoe();
  // });

  it('Test bin is empty by default', function() {
    expect(tictactoeTEST.bin).toEqual({})
  });

  it('Player one is X', function() {
    $("#b3").click();
    console.log(tictactoeTEST.bin)
    expect(tictactoeTEST.bin['b3']).toEqual('X')
  });
});
