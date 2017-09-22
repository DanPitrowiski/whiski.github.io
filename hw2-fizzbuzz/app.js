var screenHeight = $( "body" ).height();

var fizzbuzz = function(){
	var i = 100;
	var loopCount = setInterval(loop, 600);

	function loop(){
		$("#fizzbuzz").removeClass( "fizz buzz fizzbuzz" );
		if((i%5 === 0) && (i%3 === 0)){
			console.log("fizzbuzz");
			$("#fizzbuzz").addClass( "fizzbuzz" );
			$( "#fizzbuzz" ).empty().append("fizzbuzz");
			$( "#addMessage" ).empty().append("+bee dad +fizzy bubble");
			createBee(i);
			createFizz(i);
		}
		else if(i%5 === 0){
			console.log("buzz");
			$("#fizzbuzz").addClass( "buzz" );
			$( "#fizzbuzz" ).empty().append("buzz");
			$( "#addMessage" ).empty().append("+bee dad");
			createBee(i);
		}
		else if(i%3 === 0){
			console.log("fizz");
			$("#fizzbuzz").addClass( "fizz" );
			$( "#fizzbuzz" ).empty().append("fizz");
			$( "#addMessage" ).empty().append("+fizzy bubble");
			createFizz(i);
		}
		else {
			console.log(i);
			$( "#addMessage" ).empty();
			$( "#fizzbuzz" ).empty().append(i);
		}
		if (i === 1){
			//ending the loop
			$( "#fizzbuzz" ).empty().append("fizzbuzz!");
			clearInterval(loopCount)
		}
		//interating through the setInterval loop
		i--;
	}
}

fizzbuzz();

function createBee(num){
	let heightPercent = Math.floor(Math.random() * screenHeight);
	$( "#background" ).append("<marquee behavior='scroll' direction='right' scrollamount='"+((random()*20)+7)+"' class='bee"+num+"'><img src='img/bee.png'></marquee>");
	$( ".bee"+num ).css('height',heightPercent+"%");
};

function createFizz(num){
	$( "#background" ).append("<div class='bubble x"+num+"'></div>");
	$( ".x"+num ).css('left',random()*100+'%');
	$( ".x"+num ).css('transform','scale '+random());
	$( ".x"+num ).css('opacity',random()*.6);
	$( ".x"+num ).css('-webkit-animation','moveclouds '+((random()*12)+2)+'s linear infinite, sideWays '+((random()*4)+1)+'s ease-in-out infinite alternate');
	$( ".x"+num ).css('-moz-animation','moveclouds '+((random()*12)+2)+'s linear infinite, sideWays '+((random()*4)+1)+'s ease-in-out infinite alternate');
	$( ".x"+num ).css('-o-animation','moveclouds '+((random()*12)+2)+'s linear infinite, sideWays '+((random()*4)+1)+'s ease-in-out infinite alternate');
}




function random(){
	return randomNum = Math.random();
};

// Relying on your newfound knowledge of loops, combine loops and if/else statements together and incrementally build the common fizzbuzz loop.

// - In the loop, every time a number is divisible by **3**, instead of logging the number itself, the word "fizz" should appear.
// - If the number is divisible by  **5**, the word "buzz" should be logged.
// - If the number is divisible by both **3** and  **5**, then the word "fizzbuzz" should be logged.

// Follow the steps below.

// ##### Step 1:
// Construct a for loop that iterates through, and `console.log()`'s out, numbers 1 - 100.

// ##### Step 2:
// Add an `if/else` statement that logs the string `"fizz"` if the value being iterated over is divisible by `3`; otherwise, log out the value.



// ##### Step 3:
// Add an `else if` clause that logs the string `"buzz"` if the value being iterated over is divisible by `5`.



// ##### Step 4:
// Add an additional `else if` clause that logs the string `"fizzbuzz"` if the value being iterated over is divisible by both `3` and `5`.
