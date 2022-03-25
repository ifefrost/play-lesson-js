"use strict";
var $ = function(id) { return document.getElementById(id); };

var displayCurrentTime = function() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm; //variable for AM PM value
    if (hours > 12){
        hours-= 12;
        ampm = 'PM';//if after noon set time to PM
    } else if (hours == 0){
        hours = 12;
        ampm = 'AM' //if midnight set time to AM
    } else if (hours == 12){
        ampm = 'PM';//if noon set time to PM
    } else {
        ampm = 'AM' //set others to AM
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

window.onload = function() {
    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);
};