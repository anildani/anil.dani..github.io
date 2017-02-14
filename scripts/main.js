var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello Bike World!';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bike.jpg') {
      myImage.setAttribute ('src','images/bike2.jpg');
    } else {
      myImage.setAttribute ('src','images/bike.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
myButton.onclick = function() 
{
/*
	if(!localStorage.getItem('name')) 
	{
		setUserName();
	} 
	else {
			var storedName = localStorage.getItem('name');
			myHeading.textContent = 'Hello ' + storedName + ', Welcome to Bike World';
		}
		*/
setUserName();
}
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hello ' + myName + ', Welcome to Bike World';
  
}