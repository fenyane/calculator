//function that displays
function dis(val){
document.getElementById("result").value += val
}

function myFunction(event){
   if(event.key == '0'|| event.key == '1' ||
        event.key == '2'|| event.key == '3'||
        event.key == '4'|| event.key == '5'||
        event.key == '6'|| event.key == '7' ||
        event.key == '8'|| event.key == '9' ||
        event.key == '+'|| event.key == '-' ||
        event.key == '*'|| event.key == '/'
        )
        document.getElementById("result").value += event.key;
}
var cal = document.getElementById("calcu");
cal.onkeyup = function(event){
if(event.keyCode === 13) {
console.log("Enter");
let x = document.getElementById("result").value
console.log(x);
solve();

}
}
//function that checks percentage
function percent(){
let x = document.getElementById("result").value
let y = (x/100)
document.getElementById("result").value = y
}
//function that evaluates
function solve(){
let x = document.getElementById("result").value
let y = eval(x)

if(document.getElementById("result").value === ""){
        
        alert("enter mathematical values")
}
document.getElementById("result").value = y

}
//function that clear the display
function clr(){
document.getElementById("result").value = ""
}
//backspace
function del(){
var value = document.getElementById("result").value;
document.getElementById("result").value = value.substr(0, value.length - 1);
}