var feet = document.getElementById("feet");
var inch = document.getElementById("inch");
//add eventlistener
feet.addEventListener("input", function () {
  let f = this.value;
  let i = f * 12;
  inch.value = i;
});

inch.addEventListener("input", function () {
  let i = this.value;
  let f = i / 12;
  if (!Number.isInteger(f)) {
    f = f.toFixed(2);
  }
  feet.value = f;
});

let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
function celtofar() {
  let i = parseFloat(celsius.value) * (9 / 5) + 32;
  fahrenheit.value = parseFloat(i.toFixed(2));
  console.log(i);
}

function fatocel() {
  let f = parseFloat(fahrenheit.value) * (5 / 9) + 32;
  celsius.value = parseFloat(f.toFixed(2));
  console.log(f);
}

var input = document.getElementById("input");
var result = document.getElementById("result");
var inputType = document.getElementById("inputType");
var resultType = document.getElementById("resultType");
var inputTypeValue, resultTypeValue;

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;
function myResult() {
  inputTypeValue = inputType.value;
  resultTypeValue = resultType.value;
  if (inputTypeValue === "meter" && resultTypeValue === "Kilometer")
    result.value = Number(input.value) * 0.001;
  else if (inputTypeValue === "meter" && resultTypeValue === "Centimeter")
    result.value = Number(input.value) * 100;
  else if (inputTypeValue === "meter" && resultTypeValue === "meter")
    result.value = input.value;

  if (inputTypeValue === "Kilometer" && resultTypeValue === "meter")
    result.value = Number(input.value) * 1000;
  else if (inputTypeValue === "Kilometer" && resultTypeValue === "Centimeter")
    result.value = Number(input.value) * 100000;
  else if (inputTypeValue === "meter" && resultTypeValue === "Kilometer")
    result.value = input.value;

  if (inputTypeValue === "Centimeter" && resultTypeValue === "Kilometer")
    result.value = Number(input.value) * 0.00001;
  else if (inputTypeValue === "Centimeter" && resultTypeValue === "meter")
    result.value = Number(input.value) * 0.01;
  else if (inputTypeValue === "Centimeter" && resultTypeValue === "Centimeter")
    result.value = input.value;
}
