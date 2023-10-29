// document.querySelector("button").addEventListener("click", handleClick)
// selecting the location ,, type ,, listner ,, 
// this creates a listner to the buttona and calls to do something when the button is clicked
// it calls the function

//adding the parenthese at the end will make it get called as soon as the eventlistner is added it does not wait for things to be clicked 


// it will loop througn all buttons

// function handleClick(){
//     alert("I got CicckdCLicked")



//  MA

// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for (var i = 0; i < numberOfDrumButtons ; i++)
// {

// document.querySelectorAll(".drum")[i].addEventListener("click", function(){
  
//     alert("i got clicked");

// })

// };


// var numberOfBtns = document.querySelectorAll(".drum").length;

// for( i = 0 ; i < numberOfBtns ; i++){


// document.querySelectorAll(".drum")[i].addEventListener("click" , click  );

// function click(){

//     alert("i got clicked");
// };
// }




var numberOfBtns = document.getElementsByClassName("drum").length ;


for( i = 0 ; i< numberOfBtns ; i++){

document.getElementsByClassName("drum")[i].addEventListener("click" , showAlert);

function showAlert(){
    
}
}



//why this shit didnt work is  because when we get the ELEMENTS - element"s" -- which are put in an arry by default 
//you cant add properties direclty to the array you need to specify the shit
//get elements by class can get the element by a single class



//PLAYING THE SOUND

var sound = document.getElementById("audio1")

function playSound(){
    sound.currentTime = 0;
    sound.play();
}

document.getElementById("btn1").addEventListener("click" , playSound);


