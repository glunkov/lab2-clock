const updateClocks = () => {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var timeString = hours + ':' + minutes + ':' + seconds;

    // Update browser clock
    document.getElementById('browserClock').innerHTML = 'Browser Time: ' + timeString;
}

setInterval(updateClocks, 1000);