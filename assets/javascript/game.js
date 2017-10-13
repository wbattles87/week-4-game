//  $(document).ready(function()                 all jquery functions go in this
//  {
//  });
//  to call a class $(".test").    ()        this calls the class test and does whatever
//  
// instead of document rdy you can do $(function (){}; instead either or works 
//  
//  $(document).ready(function(){             when user clicks on a button, all <p> elements will be hidden
//    $("button").click(function(){
//        $("p").hide();
//    });
//  });
//
// $(":button")	Selects all <button> elements and <input> elements of type="button"
//
//  To assign a click event to all paragraphs on a page, you can do this:
//  $("p").click();
//  The next step is to define what should happen when the event fires. You must pass a function to the event:
//  $("p").click(function(){
//  action goes here!!
//  });
//  $("#button").on("click", function() {        on button click, run this function
//
//
//





window.onload = function () 
{
	var randomNum = Math.floor((Math.random() * 100) + 1);
	var blueGem; 
	var greenGem;
	var clearGem;
	var purpleGem;
	var userScore;


	 $("button").function() 
	{
		$("button").innerHTML = randomNum;

	};  














	document.getElementById("reset").onclick = function() 
	{
		document.getElementById("").innerHTML=""; // put the name of the functions inside the "" by ID to reset that function
		document.getElementById("").innerHTML="";
		document.getElementById("").innerHTML="";
		document.getElementById("").innerHTML="";
		play();										// play = function() { } this makes the page load and play the game, this is what play is returning on this line (makes it play on reset click)
	}
}