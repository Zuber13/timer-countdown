var buttons = document.querySelectorAll('.buttons');
var displayTimer = document.querySelector('.timeLeft');
var endTime = document.querySelector('.display-end-time');
var countDown;

function timer(seconds) {
    var now = Date.now();
    var then = now + seconds * 1000;
    displaySecondLeft(seconds);
    displayTimerEnd(then);
    clearInterval(countDown)
    countDown = setInterval(() => {
        var secondLeft = Math.round((then - Date.now()) / 1000);
        if (secondLeft <= 0) {
            clearInterval(countDown);
        }
        displaySecondLeft(secondLeft);
    }, 1000);
}

function displaySecondLeft(seconds) {
    var minute = Math.floor(seconds / 60);
    var remainderSeconds = seconds % 60;
    displayTimer.textContent = `${minute}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
}

function displayTimerEnd(timestamp) {
    var end = new Date(timestamp);
    var hours = end.getHours();
    var minute = end.getMinutes();
    endTime.textContent = `Come back at ${hours > 12 ? hours - 12 : hours}:${minute < 10 ? "0" : ""}${minute}`;
}

document.customForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var mins = parseInt(this.minutes.value);
    timer(mins * 60);
    this.reset();
});

function getValue() {
    seconds = parseInt(this.dataset.time);
    timer(seconds)
}

buttons.forEach(button => button.addEventListener("click", getValue));