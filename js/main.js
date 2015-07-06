var clicks = 0;
var lastClick = [0, 0];


$(document).ready(function(){
  document.getElementById('canvas').addEventListener('click', drawLine, false);
      document.getElementById('canvas').addEventListener('mousedown', start, false);
       document.getElementById('canvas').addEventListener('mouseup', stop, false);
      document.getElementById('canvas').addEventListener('mousemove', drawLine, false);
});





function getCursorPosition(e) {
    var x;
    var y;

    if (e.pageX != undefined && e.pageY != undefined) {
        x = e.pageX;
        y = e.pageY;
    } else {
        x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    
    return [x, y];
}
function start (e)  {
    clicks = 1;
}
function stop (e)  {
    clicks = 0;
}

function drawLine(e) {
    console.log("drawing line ");
    context = this.getContext('2d');

    x = getCursorPosition(e)[0] - this.offsetLeft;
    y = getCursorPosition(e)[1] - this.offsetTop;
    
    if (clicks == 1) {
        context.beginPath();
        context.moveTo(lastClick[0], lastClick[1]);
        context.lineTo(x, y, 6);
        
        context.strokeStyle = '#CAFC01';
        context.stroke();
        
//        clicks = 0;
    }
    
    lastClick = [x, y];
};