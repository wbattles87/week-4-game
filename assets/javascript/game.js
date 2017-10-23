/// go back to fridge example


$(document).ready(function() 
{
	var userscore = 0;
	var wins = 0;
	var losses = 0;
	var random = Math.floor(Math.random() * 120) + 19;
	var random1 = Math.floor(Math.random() * (12)) + 1;
	var random2 = Math.floor(Math.random() * (12)) + 1;
	var random3 = Math.floor(Math.random() * (12)) + 1;
	var random4 = Math.floor(Math.random() * (12)) + 1;


	//calling html button gem 1
	//uses attr to storing random1 into value

	$("#gem1").attr("value", random1);
	$("#gem2").attr("value", random2);
	$("#gem3").attr("value", random3);
	$("#gem4").attr("value", random4);




	$("#buttonGenerator").on("click", function() 
	{
		$("#numDisplay").text(random);
	});


	// when you use this, it will call the #gem1 object inside the $function because its the next highest one
	$("#gem1").on("click", function() 
	{
		var userclick1 = $(this).attr("value");
		$(".currentnumbercounter").text(random1);
		
		// call a compare function here for each gem 1 2 3 4
		compareFunction(userclick1);
	});

	$("#gem2").on("click", function() 
	{
		var userclick2 = $(this).attr("value");
		$(".currentnumbercounter").text(random2);
		compareFunction(userclick2);

	});


	$("#gem3").on("click", function() 
	{
		var userclick3 = $(this).attr("value");
		$(".currentnumbercounter").text(random3);
		compareFunction(userclick3);

	});


	$("#gem4").on("click", function() 
	{
		var userclick4 = $(this).attr("value");
		$(".currentnumbercounter").text(random4);
		compareFunction(userclick4);

	});


	// make your compare function here
	//	we put compare function in each click on the gem icon
	//	inside of each one, we are calling the var we associated in each one (userclick1 userclick2)
	//  then userclickvalue, each time that is called, userclick1 userclick2 will take its place 
	
	function compareFunction(userClickValue)
	{
		var userClickValue = parseInt(userClickValue);
		userscore += userClickValue;


		$(".currentscore").text(userscore);




		if (userscore === random)
		{
			$(".currentscore").text("You Win!");
			wins++;

		}
		else if (userscore < random) 
		{
			$(".currentscore").text(userscore);
		}
		else
		{
			$(".currentscore").text("Sorry you lose");
			losses++;
		}
		winslossesrecord()

		// dont forget compare function for equal to, greater then or less then for the user score
		// also do the win loss function
		// do a reset function but outside this portion
	};

	function winslossesrecord()
	{
		$(".gamecounter").html(wins);
		$(".gamecounter2").html(losses);



	}

	function resetGame()
	{

	}

});








