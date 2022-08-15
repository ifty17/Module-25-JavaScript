console.log("this is separate js file");

//Option 2: on click function
function makeRed() {
  document.body.style.backgroundColor = "red";
}

//option 3
 const makeBlueButton = document.getElementById("make-blue");
 makeBlueButton.onclick = makeBlue;

 function makeBlue() {
   document.body.style.backgroundColor = "blue";
 }

// option 3 another
const makePurpleButton = document.getElementById("make-purple");
console.log(makePurpleButton);
makePurpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
}
