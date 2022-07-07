const res = document.getElementById("res");
let flagPow = false;

function addCalculate(value) {
  res.value += value;
  if(flagPow){
    let powers = (res.value).split('^');
    res.value= Math.pow(powers[0],powers[1]);
    flagPow = false;

  }
}

function calculate() {

  res.value !== "" ? eval(res.value) : "";

}

function clearValue() {
  res.value = "";
}

function mathToCalculate(mathName) {

  if(mathName=='pow'){
    flagPow = true;
    res.value += '^';
  } else{

    res.value = Math[mathName](res.value);
  }
}

