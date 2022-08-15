// option 3 Directly set on html element 
//<button onclick="console.log(10)">Click Me</button>;


//Option 2: on click function in HTML element
//<button onclick="makeRed()">Make Red</button>;
//IMPORTANT
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

//option 4
 const plinkButton = document.getElementById('make-pink');
       plinkButton.addEventListener('click', makePink);
       function makePink(){
        document.body.style.backgroundColor = 'pink';
       }

//option 4 another 
const makeGreenButton = document.getElementById("make-green");
makeGreenButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
});

//option 4 final
//IMPORTANT
document
  .getElementById("make-goldenRod")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "goldenrod";
  });