var myGamePiece;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(225,240,50,50);
var paddle1_x = 225;
var paddle1_y = 240;
function Move(){
   var push = event.keyCode; //37-40
   push = parseInt(push, 10);
   
   if(push == 39){
       if(paddle1_x < 430) paddle1_x += 10;
       ctx.clearRect(0,0,500,300);
       ctx.fillRect(paddle1_x,paddle1_y,50,50);
   }
    if(push == 37){
       if(paddle1_x > 10) paddle1_x -= 10;
       ctx.clearRect(0,0,500,300);
       ctx.fillRect(paddle1_x,paddle1_y,50,50);
   }
    
}


