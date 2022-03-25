var $ = function(id) {
    return document.getElementById(id);
};

const processEntry = () =>{
    let cents = parseInt($('cents').value);
    if(isNaN(cents) || cents<0 || cents>99) {
        alert('Enter a valid amount between 0 and 99');
    }else {
        makeChange(cents);
    }
}

function makeChange(money){
    let quarters = parseInt(money/25);
    let dimes = parseInt((money-(quarters*25))/10);
    let nickels = parseInt((money-(quarters*25)-(dimes*10))/5);
    let pennies = parseInt(money-(quarters*25)-(dimes*10)-(nickels*5));
    $('quarters').value = quarters;
    $('dimes').value = dimes;
    $('nickels').value = nickels;
    $('pennies').value = pennies;
}

// document.addEventListener('DOMContentLoaded', ()=>{
//     $('calculate').addEventListener('click', processEntry);
// });

window.onload = ()=>{
    $('calculate').onclick = processEntry;
}