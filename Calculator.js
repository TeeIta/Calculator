function getHistory() {
    return document.getElementById("History_Value").innerText;
  }

function printHistory(num) {
     document.getElementById("History_Value").innerText = num;
  }

function getOutput() {
    return document.getElementById("Output_Value").innerText;
  }

function printOutput(num) {

  // if(num==""){
      document.getElementById("Output_Value").innerText = num;
  //   }
  // else{
  //   document.getElementById("Output_Value").innerText = getFormattedNumber(num);
  // }
}

  function getFormattedNumber(num){
     var n = Number(num);
     var value = n.toLocaleString("en");
     return value;
  }

  function reverseNumberFormat(num){
      return Number(num.replace(/,/g,''));
  }

  // var operator = document.getElementsByClassName("operator");
  // for (var i=0;i<operator.length;i++){
  //     operator[i].addEventListener('click',function(){ 
  //     })
  //     if (this.id=="clear"){
  //         getHistory("");
  //         printOutput("");
  //     }
  // }
  

  // var number = document.getElementsByClassName("number");
  // for (var i=0;i<number.length;i++){
  //   number[i].addEventListener('click',function(){
  //       var output = reverseNumberFormat(getOutput());
  //       if (output!=NaN){
  //   output= output+this.id;
  //   printOutput(output);
  //       }
  //     })
  // }

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const arithmeticOperators = ['+', '-', 'x', '/', '%'];

let expression = "";

function clearOutput() {
  printOutput("");
  expression = "";
  console.log("I dey here...");
}

function display(value) {
  // Allow numbers and arithmetic operators
  if(numbers.includes(value) || arithmeticOperators.includes(value)) {
    expression = `${expression}${value}`;
    console.log(expression);
    printOutput(expression);
  }
}

function calculate() {
  const hasPercentage = expression.includes("%");
  let result = "";
  if(hasPercentage) {
    const [firstHalf, secondHalf] = expression.split('%');
    const firstHalfResult = eval(firstHalf);
    const secondHalfResult = eval(secondHalf);
    result = (firstHalfResult / 100) * secondHalfResult;
  } else {
    result = eval(expression);
  }
  printOutput(result);
  printHistory(expression);
  expression = "";
}

function backspace() {
  if(expression == "") {
    return;
  }

  const length = expression.length;
  const lastIndex = length - 1;
  expression = expression.slice(0, lastIndex);
  printOutput(expression);
}

console.log(eval('2%(6)'));
const sentence = "I work at Century. I love programming. I live at Abuja.";
const value = sentence.slice(2, 6);
console.log(value);
const words = sentence.split(".");
console.log(words);