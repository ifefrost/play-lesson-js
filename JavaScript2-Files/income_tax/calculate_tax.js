"use strict";
var $ = function (id) {
    return document.getElementById(id);
};

const processEntry = () => {
    let income = parseInt($('income').value);
    if(isNaN(income) || income<= 0) {
        alert('Enter a valid positive number greater than 0');
    } else {
        $('tax').value = calculateTax(income);
    }
    $('income').focus();
    $('income').select();
}

function calculateTax(value) {
    let tax;
    if (value > 0 && value <= 9275) {
        tax = value*10/100;
    }else if (value > 9275 && value <= 37650){
        tax = ((value - 9275) *15/100)+927.50;
    }else if (value > 37650 && value <= 91150){
        tax = ((value - 37650) *25/100)+5183.75;
    }else if (value > 91150 && value <= 190150){
        tax = ((value - 91150) *28/100)+18558.75;
    }else if (value > 190150 && value <= 413350){
        tax = ((value - 190150) *33/100)+46278.75;
    }else if (value > 413350 && value <= 415050){
        tax = ((value - 413350) *35/100)+119934.75;
    }else if (value > 415050){
        tax = ((value - 415050) *39.6/100)+120529.75;
    }
    return tax.toFixed(2);
}

window.onload = function () {
    $("calculate").onclick = processEntry;
};