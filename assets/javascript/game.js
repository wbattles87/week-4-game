$(document).ready(function() 
{
	var userscore =0;
	var random = Math.floor(Math.random() * 120) + 19;
	var random1 = Math.floor(Math.random() * (12)) + 1;
	var random2 = Math.floor(Math.random() * (12)) + 1;
	var random3 = Math.floor(Math.random() * (12)) + 1;
	var random4 = Math.floor(Math.random() * (12)) + 1;



	$("#buttonGenerator").on("click", function() 
	{
		$("#numDisplay").text(random);
	});

	$("#gem1").on("click", function() 
	{
		$(".currentnumbercounter").text(random1);
		$(".currentscore").text(random1+random2+random3+random4);
	});

	$("#gem2").on("click", function() 
	{
		$(".currentnumbercounter").text(random2);
		$(".currentscore").text(random1+random2+random3+random4);
	});


	$("#gem3").on("click", function() 
	{
		$(".currentnumbercounter").text(random3);
		$(".currentscore").text(random1+random2+random3+random4);
	});


	$("#gem4").on("click", function() 
	{
		$(".currentnumbercounter").text(random4);
		$(".currentscore").text(random1+random2+random3+random4);
	});

	$("#gem1").click(function()
	{
		userscore +=  
	});






});







