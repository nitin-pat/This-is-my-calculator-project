//functin for value and operator
console.log("Hello world")
function ab(number){
   document.getElementById
   ("display").value+=number
}
// function for output
// eval method 
function out(){
  var res =eval(document.
  getElementById("display").value)
  document.getElementById
  ("display").value=res
  
}
//function for clear Screen 
function clr(){
  document.getElementById
  ("display").value =""
}
//function for delete value
function dlt(){
  var dispay1=document.getElementById("display").value
  var abc =dispay1.slice(0,-1)
  document.getElementById
  ("display").value = abc
}