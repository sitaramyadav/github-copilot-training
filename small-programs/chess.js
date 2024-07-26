class ChessBoard {
    constructor() {
        this.board = this.createBoard();
    }

    createBoard() {
        const rows = ['1', '2', '3', '4', '5', '6', '7', '8'];
        const cols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        let board = [];
        for (let r of rows) {
            for (let c of cols) {
                board.push(c + r);
            }
        }
        return board;
    }

    getKingMoves(position) {
        const cols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
        const dy = [-1, 0, 1, -1, 1, -1, 0, 1];
        let moves = [];
        let x = cols.indexOf(position[0]);
        let y = parseInt(position[1]) - 1;
        for (let i = 0; i < 8; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if (nx >= 0 && nx < 8 && ny >= 0 && ny < 8) {
                moves.push(cols[nx] + (ny + 1));
            }
        }
        return moves;
    }
}

let chessBoard = new ChessBoard();
console.log(chessBoard.getKingMoves('D5')); // Outputs: [ 'C4', 'C5', 'C6', 'D4', 'D6', 'E4', 'E5', 'E6' ]