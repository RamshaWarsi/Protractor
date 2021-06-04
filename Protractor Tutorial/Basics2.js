/**
 * 
 */
//loops
for(var i=1; i<=500; i++ ) //JS is not data type dependent. it is always var
{
	console.log (i);
	}
//Termination condition should allways be there
console.log("ended first loop")

/* for(var j=500; j<=1; j-- ) //JS is not data type dependent. it is always var
{
	alert (j);
	}
*/
/* for (var i = 10; i > 5; i--) {
    alert([i]);
} works on code snipet but not here*/
for(var j=1; j<=500; j=j+10) //JS is not data type dependent. it is always var
{
	console.log (j);
	}



////////////////////////////
//while loop helps in automating a page, when loader image has a value then , when loader image is diappeared. then it will return false.
//webpage lloading is an example of this

//*************************************//
var x=1;
while (x>5)
	{
	console.log(x);
	}
// It will not run because the condition is false
