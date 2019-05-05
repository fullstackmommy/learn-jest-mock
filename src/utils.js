// returns the winning player or null for a tie but just for learning mocks,
// let's pretend this makes a call to a third party API
function getWinner(player1, player2) {
    const winningNumber = Math.random()
    return winningNumber < 1 / 2
        ? player1
        : winningNumber > 1 / 2
            ? player2
            : null
}

export {getWinner}