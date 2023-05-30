canvas = document.getElementById("ITS_CanvasX")
color = "black"
ctx = canvas.getContext("2d");
var radius = 3 ;
var mouse_event = "empty"
var lastPositionX;
var lastPositionY;
var width = 2
canvas.addEventListener ("mouseDown" , my_mousedown);
function my_mousedown(e)
{
    mouse_event ="mouseDown"
    color = document.getElementById("color")
    radius = document.getElementById("radius")
    width = document.getElementById("size")

}
canvas.addEventListener ("mouseleave" , my_mouseleave);
function my_mouseleave(e)
{
    mouse_event ="mouseLeave"

}
canvas.addEventListener ("mouseup" , my_mouseup);
function my_mouseup(e)   
{
    mouse_event ="mouseUp"
    

}

canvas.addEventListener ("mousemove" , my_mousemove);
function my_mousemove(e)
{
    current_position_mouseX =e.clientX - canvas.offsetLeft;
    current_position_mouseY =e.clientX - canvas.offsetTop;

    if (mouse_event == "mouseDown") {
    console.log("current position of x and y coordinates =")
    console.log(" = " + current_positioxn_mouseX + "y = " + current_position_mouseY)

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(current_position_mouseX , current_position_mouseY , radius ,0, 2 * Math.PI)
        ctx.stroke();

        
        

        
        

        
}

lastPositionX = current_position_mouseX;
lastPositionY = current_position_mouseY;
}
