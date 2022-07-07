const res = document.getElementById("res");

function addCalculate(value) {
  res.value += value;
}
function calculate(){
    res.value = eval(res.value);
}
function clearValue(){
    res.value= "";
}
function mathToCalculate (){
    
}