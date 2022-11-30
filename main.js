window.addEventListener("load", change() )
function change()
 {
    run();
    document.getElementsByClassName("td").style.width=(window.width/7)
}
function run(){
    
    document.getElementById("change").style.fontFamily="Special Elite"
    document.getElementById("change").innerHTML="Education"
    setTimeout(function(){
    document.getElementById("change").innerHTML="Support"}, 2000)
    setTimeout(function(){
    document.getElementById("change").innerHTML="Love"}, 4000)
    setTimeout(function(){
    document.getElementById("change").innerHTML="a change."}, 6000)
    
}
function dw(){
    alert("it doesn't work")
}
function app(){
    window.location="main.html";
}