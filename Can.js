var can = document.querySelector("#can");

var ctx = can.getContext('2d');


ctx.lineWidth = 6;
// ctx.strokeStyle = "#f00"
ctx.fillStyle = "gold";

ctx.beginPath();
ctx.arc(250,250,200,0,Math.PI * 2, true );
ctx.stroke();
ctx.fill();
ctx.closePath();


ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(150,150,25,0,Math.PI * 1, true);
ctx.stroke();
ctx.fill();
ctx.closePath();



ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(350,150,25,0,Math.PI *1, true);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(250,250,75,0,Math.PI *1, false)
ctx.stroke();

ctx.closePath();
