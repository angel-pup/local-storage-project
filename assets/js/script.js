let timerEl = document.querySelector('.timer');
let startButton = document.querySelector('.start-button');
let win = false;

function loser() {
    timerEl.innerHTML = '10';
    alert('You lose!');
}

function startTimer() {
    let secondsLeft = 10;

    let timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.innerHTML = secondsLeft;

        if (secondsLeft >= 0) {
            if (win === true && secondsLeft > 0) {
                clearInterval(timerInterval);
                winner();
            }
        }

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            loser();
        }
    }, 1000);
}

function start() {
    startTimer();
}

startButton.addEventListener('click', start());