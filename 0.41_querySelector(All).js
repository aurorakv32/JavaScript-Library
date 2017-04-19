// querySelector() allows you to query the document for the first instance of the specified CSS selectors
// If for some reason there are multiple instances of an element, it returns only the first matching one
// I'm not sure if this is first from the top of the document or first from the function

// example of how to use querySelector()
function myFunction() {
	//this is just pulling "myDIV" from the HTML and placing in inside the var x
    var x = document.getElementById("myDIV");
    // this is querying the first instance of "p" within the myDIV id
    x.querySelector("p").innerHTML = "Hello World!";
}

//querySelectorAll() is a way to grabbed every instance of an element inside a document


// Get the element with id="myDIV" (a div), then get all elements inside div with class="example"
var x = document.getElementById("myDIV").querySelectorAll(".example");  

// Set the background color of the first element with class="example" (index 0) in div
x[0].style.backgroundColor = "red"; 