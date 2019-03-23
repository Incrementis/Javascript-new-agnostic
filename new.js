/*
==================================================================================
	NOTE:

	The code below serves only demonstration purposes.
	
==================================================================================
*/


//Standard version - writes attributes into global Object
function noStrict()
{	
	function Class()
	{
		this.attribute = "Hello World!";	
	}
	
	
	var infoArea 	= document.getElementById("message");
	var img 	= document.getElementById("picture");
	
	//ATTENTION: No keyword new
	var Instance	= Class();
	
	
	//Setting Information
	infoArea.innerHTML = "The keyword 'new' was forgotten, but the code still works..." 
	
	//Setting picture
	img.src= "NoStrict.jpg";	
	
	
	//Output
	console.log(window);
	
}



//Error when keyword new is e.g. forgotten
function withStrict()
{
	"use strict";
	
	function Class()
	{
		this.attribute = "Hello World!";	
	}
	
	
	var infoArea 	= document.getElementById("message");
	var img 	= document.getElementById("picture");
	
	//Setting picture
	img.src= "Strict.jpg";
	
	//Setting Information
	infoArea.innerHTML = "No Instance, but Error!" 
	
	//ATTENTION: No keyword new
	var Instance = Class();
	
}



//A possible option to prevent e.g. forgetting keyword new
function alternative()
{
	function Class()
	{
		
		var fix = 0; 
		
		if(this instanceof Class)
		{
			fix = this;
		}
		else
		{
			fix = Object.create(Class.prototype);
		}
	
		fix.attribute = "Fixed Hello World!";
		
		return fix;
	
	}
	
	
	var infoArea 	= document.getElementById("message");
	var img 	= document.getElementById("picture");
	
	
	//ATTENTION: No keyword new
	var Instance 	= Class();
	
	//Setting Information
	infoArea.innerHTML = "Fixed!" 
	
	//Setting picture
	img.src = "Alternative.jpg";
	
	
	//Output
	console.log(Instance);
	
}
