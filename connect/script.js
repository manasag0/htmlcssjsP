const playRed = "R";
const playBlue = "B";
let currentPlayer = playRed;
let gameOver = false;
let board;

const rows = 6;
const columns = 7;

window.onload = function () {
    setGame();
};

function setGame() {
    board = Array.from({ length: rows }, () => Array(columns).fill(" "));

    const boardElement = document.getElementById('board');
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            tile.dataset.row = r;
            tile.dataset.column = c;
            tile.addEventListener('click', handleTileClick);
            boardElement.appendChild(tile);
        }
    }
}

function handleTileClick(event) {
    if (gameOver) return;

    const clickedRow = parseInt(event.target.dataset.row);
    const clickedColumn = parseInt(event.target.dataset.column);

    if (isValidMove(clickedRow, clickedColumn)) {
        makeMove(clickedRow, clickedColumn);
        if (checkForWinner(clickedRow, clickedColumn)) {
            displayWinner();
        } else {
            switchPlayer();
        }
    }
}

function isValidMove(row, column) {
    return board[row][column] === " ";
}

function makeMove(row, column) {
    board[row][column] = currentPlayer;
    updateBoard();
}

function updateBoard() {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach((tile) => {
        const row = parseInt(tile.dataset.row);
        const column = parseInt(tile.dataset.column);
        const value = board[row][column];
        tile.style.backgroundColor = value === playRed ? 'red' : value === playBlue ? 'blue' : 'white';
    });
}

function switchPlayer() {
    currentPlayer = currentPlayer === playRed ? playBlue : playRed;
}

function checkForWinner(row, column) {
    return (
        checkDirection(row, column, 1, 0) ||
        checkDirection(row, column, 0, 1) ||
        checkDirection(row, column, 1, 1) ||
        checkDirection(row, column, 1, -1)
    );
}

function checkDirection(row, column, rowDirection, colDirection) {
    const player = board[row][column];
    let count = 1;

    for (let i = 1; i < 4; i++) {
        const newRow = row + i * rowDirection;
        const newColumn = column + i * colDirection;

        if (isValidIndex(newRow, newColumn) && board[newRow][newColumn] === player) {
            count++;
        } else {
            break;
        }
    }

    for (let i = 1; i < 4; i++) {
        const newRow = row - i * rowDirection;
        const newColumn = column - i * colDirection;

        if (isValidIndex(newRow, newColumn) && board[newRow][newColumn] === player) {
            count++;
        } else {
            break;
        }
    }

    return count >= 4;
}

function isValidIndex(row, column) {
    return row >= 0 && row < rows && column >= 0 && column < columns;
}

function displayWinner() {
    const winnerElement = document.getElementById('winner');
    winnerElement.textContent = `Player ${currentPlayer === playRed ? 'Red' : 'Blue'} wins!`;
    gameOver = true;
}

function resetGame() {
    const winnerElement = document.getElementById('winner');
    winnerElement.textContent = '';
    currentPlayer = playRed;
    gameOver = false;
    board = Array.from({ length: rows }, () => Array(columns).fill(" "));
    updateBoard();
}
