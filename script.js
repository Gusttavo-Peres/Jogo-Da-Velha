let currentPlayer = 'X';
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function makeMove(row, col) {
    if (board[row][col] === '') {
        board[row][col] = currentPlayer;
        document.getElementById('message').innerText = '';
        renderBoard();
        if (checkWinner()) {
            document.getElementById('message').innerText = `${currentPlayer} venceu!`;
        } else if (checkDraw()) {
            document.getElementById('message').innerText = 'Empate!';
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function renderBoard() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            document.querySelector(`#board .row:nth-child(${i + 1}) .cell:nth-child(${j + 1})`).innerText = board[i][j];
        }
    }
}

function checkWinner() {
    // Verifica linhas, colunas e diagonais
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            return true;
        }
        if (board[0][i] !== '' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
            return true;
        }
    }
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        return true;
    }
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return true;
    }
    return false;
}

function checkDraw() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                return false;
            }
        }
    }
    return true;
}
