let y = 100
let x = 0
document.getElementById("changebutton").innerHTML = "0-"+y;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
document.getElementById("thedisplay").innerHTML = x;
document.getElementById("rollbutton").onclick = function(){
    let x = getRandomInt(y)
    document.getElementById("thedisplay").innerHTML = x;
}
document.getElementById("changebutton").onclick = function(){
    y = window.prompt("What should the max be? (currently "+y+")");
    document.getElementById("changebutton").innerHTML = "0-"+y;
}   