let num = 0;
document.getElementById("up").onclick = function(){
    num = num + 1;
    document.getElementById("count").innerHTML = num;
}
document.getElementById("reset").onclick = function(){
    num = 0;
    document.getElementById("count").innerHTML = num;


}