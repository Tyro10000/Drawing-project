var myGamePiece;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillStyle = "#000000";
var brush = 5;

var run = false;
function showCoords(event) {
    if(event.which == 1){
    var x = event.screenX;
    var y = event.screenY;
    document.getElementById("mouse").innerHTML = x;
    ctx.fillRect(x,y,brush,brush);
    }    
}

function color(val){
    switch(val){
        case 1:
        ctx.fillStyle = "#FF0000";
        document.getElementById("redmix").value = 255;
        break;
        case 2:
        ctx.fillStyle = "#00FF00";
        break;
        case 3:
        ctx.fillStyle = "#0000FF";
        break;


    }
}
function converthex(val){
    var track = 0;
    if(val > 15)
    var stack = -1;
    else 
    var stack = 0;
    while(val >= 15){
        stack+=1;
        if(val == 15)
        track = val;
        val-=15;
    };
    //if(val == stack)
    var remainder = val;
    switch(stack){
        case (stack < 9):
        stack = Math.floor(stack);
        break;
        case -1:
        stack = 0;
        break;
        case 10:
        stack = "A";
        break;
        case 11:
        stack = "B";
        break;
        case 12:
        stack = "C";
        break;
        case 13:
        stack = "D";
        break;
        case 14:
        stack = "E";
        break;
        case 15:
        stack = "F";
        break;
    }
    switch(remainder){
        case 10:
        remainder = "A";
        break;
        case 11:
        remainder = "B";
        break;
        case 12:
        remainder = "C";
        break;
        case 13:
        remainder = "D";
        break;
        case 14:
        remainder = "E";
        break;
        case 15:
        remainder = "F";
        break;
    }
    var line = "" + stack + remainder;
    alert(line);
    return line;
}
function clean(){
    ctx.clearRect(0,0,500,300);
}
function mix(){
    var red = document.getElementById("redmix").value;
    var blue = document.getElementById("bluemix").value;
    var green = document.getElementById("greenmix").value;
    var cred = converthex(red);
    var cblue = converthex(blue);
    var cgreen = converthex(green);
    alert("#" + cred + cgreen + cblue);
    ctx.fillStyle = "#" + cred + cgreen + cblue;
}
function resize(){
    document.getElementById("currentbrush").innerHTML = document.getElementById("brushsize").value;
    brush = document.getElementById("brushsize").value;
}

