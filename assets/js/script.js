let timerEl = document.querySelector('.timer');
let startButton = document.querySelector('.start-button');

function start() {
    let secondsLeft = 10;

    let timerInterval = setInterval(function() {
       secondsLeft--;
       timerEl.innerHTML = secondsLeft;

       if(secondsLeft === 0) {
           clearInterval(timerInterval);
           loser();
       }
    }, 1000);
}

function loser() {
    timerEl.innerHTML = '10';
    alert('You lose!');
}

startButton.addEventListener('click', function () {
    let secondsLeft = 10;

    let timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.innerHTML = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            loser();
        }
    }, 1000);
});