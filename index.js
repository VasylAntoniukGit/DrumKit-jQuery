//Detecting Button Press
var buttonsArray = document.querySelectorAll("button.drum");
var numberOfButtons = buttonsArray.length;
var i = 0;
for (; i < numberOfButtons; i++) {
  buttonsArray[i].addEventListener("click", function() {
    var clickedButton = this.innerHTML;
    makeSound(clickedButton);
    buttonAnnimation(clickedButton);

  });
}
//Detecting keyboard press
document.addEventListener("keydown", function(event) {
  console.log(event.key);
  var eventKey = event.key;
  makeSound(eventKey);
  buttonAnnimation(eventKey);

})
//Function with switch to check what button or key pressed and play relevant sound
function makeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;


    default:

  }
}
function buttonAnnimation(currentButton){
  var pressedButton = document.querySelector("." + currentButton);
  pressedButton.classList.add("pressed");
  setTimeout(function (){
      pressedButton.classList.remove("pressed");
  }, 100);
}
