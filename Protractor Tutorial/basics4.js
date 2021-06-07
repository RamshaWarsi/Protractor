/*
 * 
 */

//Print array having all the values

var a= ["This" , "is", "an" , "array"];
// console.log (a); Error will be shown.

for(var i=0; i<=3; i++)
//Result will respect to the index of the array.
{
console.log(a[i]);
}
// console.log(a[3]); //to print an array position number 3
//count of arrays b.length
////////////////////////////////////////////////////////////////////////////////////
var b= ["This" , "is", "an" , "array", "Via", "Method"]; //a.length is a method
console.log(b.length + " is the size of the array.")
for(var i=0; i<b.length; i++)
	//method on calculating the index
	{
	console.log(b[i]);
	}
//////////
var c= new Array();
c[0]= "Hope never fails";
c[1]= "Truth always prevails";
c[2]= "Kindness";
c[3]= "Cost";
c[4]= "Nothing";
c[5]= "This too shall pass";

console.log(c.length + " is the size of array C")
//length-1 will be the maximum index.
for(var i=0; i<c.length; i++)
	{
	console.log(c[i]);
	}



//Print the array number in reverse.
console.log("Print the array numbers in reverse")
for(var j=c.length-1; j>=0; j-- )
	{
	console.log(c[j]);
	}