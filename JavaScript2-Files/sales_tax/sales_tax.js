var $ = function (id) {
    return document.getElementById(id); 
};


const processEntries = () => {
    let subtotal = parseFloat($('subtotal').value);
    let tax_rate = parseFloat($('tax_rate').value);
    if(isNaN(subtotal) || subtotal>10,000 || subtotal<0){
        alert('Subtotal must be > 0 and < 1000');
    }else if(isNaN(tax_rate) || tax_rate<0 || tax_rate>12){
        alert('Tax Rate must be > 0 and < 12');
    }else{
        let sales_tax = parseFloat((tax_rate/100)*subtotal);
        let total = sales_tax + subtotal;

        $('sales_tax').value = sales_tax;
        $('total').value = total;
        $('subtotal').focus();
        $('subtotal').select();
    }
}

// document.addEventListener('DOMContentLoaded', ()=>{
//     $('calculate').addEventListener('click', processEntries);
//     $('subtotal').focus();
//     $('clear').addEventListener('click', ()=>{
//         $('subtotal').value="";
//         $('tax_rate').value="";
//         $('sales_tax').value="";
//         $('total').value="";
//         $('subtotal').focus();
//     });
//     $('subtotal').addEventListener('click', ()=>{
//         $('subtotal').value="";
//     });
//     $('tax_rate').addEventListener('click', ()=>{
//         $('tax_rate').value="";
//     })
// });

window.onload = () => {
    $('calculate').onclick = processEntries;
    $('subtotal').focus();
    $('clear').onclick =()=>{
        $('subtotal').value="";
        $('tax_rate').value="";
        $('sales_tax').value="";
        $('total').value="";
        $('subtotal').focus();
    };
    $('subtotal').onclick = () => {
        $('subtotal').value="";
    }
    $('tax_rate').onclick = () => {
        $('tax_rate').value="";
    }
}
