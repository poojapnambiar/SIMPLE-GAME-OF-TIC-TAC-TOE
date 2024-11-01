const cells = document.querySelectorAll('.cell');
const turnInfo = document.querySelector('.turn-info');

let currentPlayer = 'X';

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleClick(cell) {
    if (cell.textContent === '') {
        cell.textContent = currentPlayer;
        if (checkWin()) {
            turnInfo.textContent = `${currentPlayer} wins!`;
            disableCells();
        } else if (checkDraw()) {
            turnInfo.textContent = 'Draw!';
            disableCells();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            turnInfo.textContent = `${currentPlayer}'s turn`;
        }
    }
}

function checkWin() {
    return winningConditions.some(condition => {
        return condition.every(index => cells[index].textContent === currentPlayer);
    });
}

function checkDraw() {
    return [...cells].every(cell => cell.textContent !== '');
}

function disableCells() {
    cells.forEach(cell => cell.removeEventListener('click', handleClick));
}

cells.forEach(cell => {
    cell.addEventListener('click', () => handleClick(cell));
});