"use strict";
var $ = function(id) { return document.getElementById(id); };

//global stop watch timer variable and elapsed time object
var stopwatchTimer;
var counting; //counting variable checks if timer is counting or not
var elapsedMinutes = 0;
var elapsedSeconds = 0;
var elapsedMilliseconds = 0;

var displayCurrentTime = function() {
    	//create a date object and find out if it is AM or PM
	//display the hours, minutes, milliseconds and AM/PM on the webpage
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm;
    if (hours > 12){
        hours-= 12;
        ampm = 'PM';
    } else if (hours == 0){
        hours = 12;
        ampm = 'AM'
    } else if (hours == 12){
        ampm = 'PM';
    } else {
        ampm = 'AM'
    }
    $('hours').innerHTML = padSingleDigit(hours);
    $('minutes').innerHTML = padSingleDigit(minutes);
    $('seconds').innerHTML = padSingleDigit(seconds);
    $('ampm').innerHTML = ampm;
};

var padSingleDigit = function(num) {
	if (num < 10) {	return "0" + num; }
	else { return num; }
};

var tickStopwatch = function() {    
    // increment milliseconds by 10 milliseconds
    elapsedMilliseconds += 10;
    // if milliseconds total 1000, increment seconds by one and reset milliseconds to zero
    if (elapsedMilliseconds == 1000) {
        elapsedSeconds += 1;
        elapsedMilliseconds = 0;
    }
    // if seconds total 60, increment minutes by one and reset seconds to zero
    if (elapsedSeconds == 60) {
        elapsedMinutes += 1;
        elapsedSeconds = 0;
    }
    //display new stopwatch time
    $('s_minutes').innerHTML = elapsedMinutes;
    $('s_seconds').innerHTML = elapsedSeconds;
    $('s_ms').innerHTML = elapsedMilliseconds;
};

// event handler functions
var startStopwatch = function(evt) {
    // prevent default action of link
    evt.preventDefault();
    // do first tick of stop watch and then set interval timer to tick 
    // stop watch every 10 milliseconds. Store timer object in stopwatchTimer 
    // variable so next two functions can stop timer.
    //if it's not counting set interval, or else do nothing
    tickStopwatch();
    if (!counting){
        stopwatchTimer = setInterval(tickStopwatch, 10);
    }
    counting = true;
};

var stopStopwatch = function(evt) {
    // prevent default action of link
    evt.preventDefault();
    // stop timer
    clearInterval(stopwatchTimer);
    counting = false;//when interval is cleared stop counting
};

var resetStopwatch = function(evt) {
    // prevent default action of link
    evt.preventDefault();
    // stop timer
    clearInterval(stopwatchTimer);
    // reset elapsed variables and clear stopwatch display
    elapsedMinutes = 0;
    elapsedSeconds = 0;
    elapsedMilliseconds = 0;
    $('s_minutes').innerHTML = '00';
    $('s_seconds').innerHTML = '00';
    $('s_ms').innerHTML = '000';
};

window.onload = function() {
    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);
    
    // set up stopwatch event handlers
    $('start').onclick=startStopwatch;
    $('stop').onclick=stopStopwatch;
    $('reset').onclick=resetStopwatch;
};