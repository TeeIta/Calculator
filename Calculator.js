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

    if(num==""){
        document.getElementById("Output_Value").innerText = num;
     }
    else{
     document.getElementById("Output_Value").innerText = getFormattedNumber(num);
    }
  }

  function getFormattedNumber(num){
     var n = Number(num);
     var value = n.toLocaleString("en");
     return value;
  }

  function reverseNumberFormat(num){
      return Number(num.replace(/,/g,''));
  }

  var operator = document.getElementsByClassName("operator");
  for (var i=0;i<operator.length;i++){
      operator[i].addEventListener('click',function(){ 
      })
      if (this.id=="clear"){
          getHistory("");
          printOutput("");
      }
  }
  

  var number = document.getElementsByClassName("number");
  for (var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output = reverseNumberFormat(getHistory());
        if (output!=NaN){
    output= output+this.id;
    printHistory(output);
        }
      })
  }
  