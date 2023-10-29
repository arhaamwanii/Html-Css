// document.querySelector("button").addEventListener("click", handleClick)
// selecting the location ,, type ,, listner ,, 
// this creates a listner to the buttona and calls to do something when the button is clicked
// it calls the function

//adding the parenthese at the end will make it get called as soon as the eventlistner is added it does not wait for things to be clicked 


// it will loop througn all buttons

// function handleClick(){
//     alert("I got CicckdCLicked")



//  

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons ; i++)
{

document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    alert("i got clicked");
})

};


