/**
 * jQuery Timer isn't natively a stopwatch, it just helps with
 * building one. Time must be incremented manually.
 *
 * The increment time is in milliseconds, so an input time of
 * 1000 equals 1 time per second.  This myTimer uses an
 * increment time of 70 which is about 14 times per second.
 *
 * The timer function converts the current time to a string
 * and outputs to the stopwatch element, $stopwatch.
 */
var myTimer = new (function() {

    // Stopwatch element on the page
    var $stopwatch;
    
    // Timer speed in milliseconds
    var incrementTime = 70;

    // Current timer position in milliseconds
    var currentTime = 0;
    
    // Start the timer
    $(function() {
        $stopwatch = $('#stopwatch');
        myTimer.Timer = $.timer(updateTimer, incrementTime, false);  
    });

    // Output time and increment
    function updateTimer() {
        var timeString = formatTime(currentTime);
        $stopwatch.html(timeString);
        currentTime += incrementTime;
    }

    // Reset timer
    this.resetStopwatch = function() {
        currentTime = 0;
        myTimer.Timer.stop().once();
    };

});

// Common functions
function pad(number, length) {
    var str = '' + number;
    while (str.length < length) {str = '0' + str;}
    return str;
}
function formatTime(time) {
    time = time / 10;
    var min = parseInt(time / 6000),
        sec = parseInt(time / 100) - (min * 60),
        hundredths = pad(time - (sec * 100) - (min * 6000), 2);
    return (min > 0 ? pad(min, 2) : "00") + ":" + pad(sec, 2) + ":" + hundredths;
}