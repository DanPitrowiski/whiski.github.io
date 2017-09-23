/*
1. Create a function that accepts a temperature value in Fahrenheit and converts it to Celsius.
   Note: Equation to convert F to C:
   C = (F - 32) / 1.8
   Test your function.
2. Create a second function that accepts a temperature value in Celsius and converts it to Fahrenheit.
   Note: Equation to convert C to F:
   F = 1.8 * C + 32
   Test your function.
BONUS 1: Update your functions to use the value entered in the text box on the web page, and to perform calculations only when the appropriate button is clicked:
	1.  Set the value of the temp variable to the value of the element with the id value 'temperature'.
	    (Hint: read about the document.querySelector() method.)
	2.  Set the appropriate function to run when each button is clicked.
		(Hint: read about the addEventListener() method.)
BONUS 2: Display the result of each calculation in the browser window rather than in the console:
	1.  At the end of each function, set the text of the element with the id value 'result' to the same text string you were previously logging to the console.
BONUS 3: Clear the contents of the text box after you've displayed your results, so a user can easily enter another temperature to convert. (Hint: Read about the 'value' property in JavaScript. What string value could you assign as the value of an input box that would give it no content to display?)
*/
var celsius = 0;
var farenheit = 0;


$('#fahrenheit_to_celsius').click( function(){
   farenheit = $( '#temperature' ).val();
   celsius = Math.round((farenheit - 32) / 1.8);
   $('#result').empty().append(farenheit + " farenheit is "+celsius+" celsius");
   $( '#temperature' ).val("");
   backgroundColor();
});

$('#celsius_to_fahrenheit').click( function(){
   celsius = $( '#temperature' ).val();
   farenheit = Math.round((1.8 * celsius) + 32);
   $('#result').empty().append(celsius + " celsius is "+farenheit+" farenheit");
   $( '#temperature' ).val("");
   backgroundColor();
});


var backgroundColor = function(){
   $( 'canvas' ).css('display','none');
   $( '.sun' ).css('display','none');

   if (celsius <= 0 || farenheit <= 32){
      $( 'body' ).css('background','#4A90E2');
      $( 'canvas' ).css('display','inherit');
      $( 'body' ).css('color','#FFF');
   }
   else if (celsius >= 32 || farenheit >= 90){
      $( 'body' ).css('background','#D04C02');
      $( 'body' ).css('color','#FFF');
      $( '.sun' ).css('display','block');
      $( '.sun' ).css('opacity','1');
   }
   else if (celsius >= 21 || farenheit >= 70){
      $( 'body' ).css('background','#FF8C2A');
      $( 'body' ).css('color','#FFF');
      $( '.sun' ).css('display','block');
      $( '.sun' ).css('opacity','.7');
   }
   else if (celsius > 0 || farenheit > 32){
      $( 'body' ).css('background','#A3CDFF');
      $( 'body' ).css('color','#000');
      $( '.sun' ).css('display','block');
      $( '.sun' ).css('opacity','.3');
   }
}


// Snow
// -------------------

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var W = $( document ).width();
var H = $( document ).height();
canvas.width = W;
canvas.height = H;

var numberFlakes = 100;
var flakes = [];
for (var i = 0; i < numberFlakes; i++) {
  flakes.push({
    x: Math.random()*W,
    y: Math.random()*H,
    radius: Math.random()*8+1
  })
}

function drawFlakes() {
  // Have to clear it every time to redraw
  ctx.clearRect(0, 0, W, H);

  ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
  ctx.beginPath();
  for (var i = 0; i < numberFlakes; i++) {
    var f = flakes[i];
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.radius, 0, Math.PI*2, true);
  }
  ctx.fill();
  moveFlakes();
}

var angle = 0;
function moveFlakes() {
  angle += 0.01;
  for (var i = 0; i < numberFlakes; i++) {
    var f = flakes[i];
    // cos and sin for moving diagonally
    f.y += Math.cos(angle) + 1 + f.radius/2;
    f.x += Math.sin(angle) * 2;

    //Start flakes over at top
    if (f.x > W+5 || f.x < -5 || f.y > H) {

      // Introduces some more random behavior to make the snowfall look real
      if (i%3 > 0) {
        flakes[i] = {x: Math.random()*W, y: -10, radius: f.radius};
      } else {
        // flake leaves from right
        if (Math.sin(angle) > 0) {
          // come in from left
          flakes[i] = {x: -5, y: Math.random()*H, radius: f.radius};
        } else {
          //come in from right
          flakes[i] = {x: W+5, y: Math.random()*H, radius: f.radius};
        }
      }
    }
  }
}

function init() {
  drawFlakes();
}

setInterval(init, 30);

