function appendToDisplay(value) {
    document.getElementById('display').value += value;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
function rotateCalculator(){
    const cal  = document.getElementById("calculator-id").classList;
    if(cal.contains('rotate')){
        document.getElementById("calculator-id").classList.remove('rotate');
    }
    else{
        document.getElementById("calculator-id").classList.add('rotate');
    }
}




