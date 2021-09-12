var canvasId;
canvasId=document.getElementById("my_canvs");
ctx=canvasId.getContext("2d");
ctx.beginPath();
ctx.strokestyle="red";
ctx.linewidth=1;
ctx.rect(150,143,430,200);
ctx.stroke();
color="blue";
circle(250,220,color);
color="black";
circle(350,220,color);
color="red";
circle(450,220,color);
color="yellow";
circle(300,260,color);
color="green";
circle(400,260,color);
function circle(mouse_x,mouse_y,color){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=5;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();
 }


/* color="red";
 ctx.beginPath();
 ctx.strokeStyle=color;
 ctx.lineWidth=2;
 ctx.arc(200,200,40,0,2*Math.PI);
 ctx.stroke();
 canvas.addEventListener("mousedown",my_mousedown);
 function my_mousedown(e){
     mouse_x=e.clientX-canvas.offsetLeft;
     mouse_y=e.clientY-canvas.offsetTop;
     console.log("x="+mouse_x+"y="+mouse_y);
  circle(mouse_x,mouse_y);   
 }
 function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();
 }*/