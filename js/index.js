const $button = document.querySelector(".addGrid");
const $contener = document.querySelector(".contener");
const body = document.querySelector("window");

// the main prompt
function promptPop() {
  let number = prompt("Please enter how many boxes you want!!"); //the main prop
  number = compereByRegular(number); //check number using regular expression
  while ($contener.firstChild) { //clear counter
    $contener.removeChild($contener.firstChild);
  }

  return number; // return number of dives
}

//add dives and there properties
function addDivs() {
  const number = promptPop();
  if (!number) { //check if no num
    return promptPop();
  }
  // check if user enter zero
  if (number == 0) {
    alert("sorry you cant enter '0'")
  }


  const sqrtNumber = number;
  const numberEntered = number * number;
  const auto = "auto ";
  //create div element
  const divInContener = document.createElement("DIV");

  let gridTemplateColumns = "";
  for (let i = 0; i < sqrtNumber; i++) { //number of auto to grid
    gridTemplateColumns += auto;
  }

  $contener.style.gridTemplateColumns = gridTemplateColumns;
  // add dives and properties
  for (let i = 0; i < numberEntered; i++) {
    const divInContener = document.createElement("DIV");
    $contener.appendChild(divInContener);
    divInContener.style.background = "#eee";
    divInContener.style.color = "blue";
    divInContener.style.textAlign = "center";
    divInContener.style.overflow = " none";
    divInContener.classList.add("addColor");
    divInContener.addEventListener("mouseenter", generateRandomColor);
    divInContener.addEventListener("mouseleave", deleteColor);
  }
}

//generate random id
function generateRandomColor(e) {
  const lettersList = "123456789ABCDEF0"; //list of random number and alph to create random color
  const arrayLetterList = lettersList.split("");
  let color = "#"; //color start with hash
  for (let i = 0; i < 6; i++) {
    color += arrayLetterList[Math.floor(Math.random() * 15)];
  }
  this.style.background = color; //add color
}

//delete color after some time
function deleteColor(e) {
  setTimeout(function () { //set time for clear color
    e.target.style.background = "#eee";
  }, 300);
}

//using regular expression to check input
function compereByRegular(text) {
  const Enter = text;
  const reg = /[A-Z]/gi; //reg to check
  //check if match or not
  const isMatch = Enter.match(reg);
  if (isMatch != null) {
    alert("You must enter number sorry");
    return promptPop();
  }
  return text;
}
$button.addEventListener("click", addDivs); //listen to click
