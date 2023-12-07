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
    document.getElementById('browserClockInner').innerHTML = timeString;
}

const updateServerTime = () => {
    var span = document.getElementById('serverClockInner');
    var currentTime = span.innerHTML; // Get the current time from the span

    var parts = currentTime.split(':');
    var date = new Date();
    date.setHours(parts[0]);
    date.setMinutes(parts[1]);
    date.setSeconds(parts[2]);

    // Increment the seconds by one
    date.setSeconds(date.getSeconds() + 1);

    // Format the time to HH:mm:ss
    var hours = String(date.getHours()).padStart(2, '0');
    var minutes = String(date.getMinutes()).padStart(2, '0');
    var seconds = String(date.getSeconds()).padStart(2, '0');

    // Update the span with the new time
    span.innerHTML = hours + ':' + minutes + ':' + seconds;
}

setInterval(updateClocks, 1000);
setInterval(updateServerTime, 1000);