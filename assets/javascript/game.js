$(document).ready(function() 
{
	$("#buttonGenerator").on("click", function() 
	{
    	var random = Math.floor(Math.random() * 100) + 1;
        alert("Your number is " + random);
     });
 
});









