window.onload = function() {
    var time = 15 * 60; // 15 minutes in seconds
    var timerDiv = document.getElementById('timer');
    
    var interval = setInterval(function() {
        var minutes = parseInt(time / 60, 10);
        var seconds = parseInt(time % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerDiv.textContent = minutes + ":" + seconds;

        if (--time < 0) {
            clearInterval(interval);
            alert("Time's up!");
            // You can redirect or perform any other action here
        }
    }, 1000);
};
