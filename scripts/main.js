var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/stars.jpg') {
      myImage.setAttribute ('src','images/stars2.jpg');
    } else {
      myImage.setAttribute ('src','images/stars.jpg');
    }
}

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Cześć! To moja strona, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Cześć! To moja strona, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }