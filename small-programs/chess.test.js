import ChessBoard from './ChessBoard'; // Add import statement for ChessBoard class

test('getKingMoves returns the correct moves for a given position', () => {
  const chessBoard = new ChessBoard();
  const moves = chessBoard.getKingMoves('D5');
  expect(moves).toEqual(['C4', 'C5', 'C6', 'D4', 'D6', 'E4', 'E5', 'E6']);
});

