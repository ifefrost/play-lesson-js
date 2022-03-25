"use strict";
var $ = function(id) { return document.getElementById(id); };

const toFahrenheit =()=> {
    $('degree_label_1').innerHTML='Enter C degrees:';
    $('degree_label_2').innerHTML='Degrees Fahrenheit:';
    clearTextBoxes();
}

const toCelsius =()=> {
    $('degree_label_1').innerHTML='Enter F degrees:';
    $('degree_label_2').innerHTML='Degrees Celsius:';
    clearTextBoxes();
}

const convertTemp =()=>{
    let degrees_entered = parseFloat($("degrees_entered").value);
    let degrees_computed;
    if (isNaN(degrees_entered)){
        alert('You must enter a valid number for degrees');
    }else if ($('to_celsius').checked){
        degrees_computed = (degrees_entered - 32)*5/9;
        $("degrees_computed").value = degrees_computed.toFixed(0);
    }else if ($('to_fahrenheit').checked){
        degrees_computed = (degrees_entered * (9/5)) + 32;
        $("degrees_computed").value = degrees_computed.toFixed(0);
    }
    $("degrees_entered").focus();
    $("degrees_entered").select();
};


var clearTextBoxes = function() {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
    $("degrees_entered").focus();
};

window.onload = function() {
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
	$("degrees_entered").focus();
};