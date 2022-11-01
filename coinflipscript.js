let y = 2
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function pausecomp(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}
document.getElementById("rollbutton").onclick = function(){
    let x = getRandomInt(y)
    if(x==0){
        document.getElementById("thedisplay").innerHTML="Heads";


    }
    else{
        document.getElementById("thedisplay").innerHTML="Tails";

    }

}
