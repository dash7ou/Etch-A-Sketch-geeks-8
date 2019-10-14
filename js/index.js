const $button = document.querySelector(".addGrid");
const $contener = document.querySelector(".contener");
const body = document.querySelector("window");

function promptPop() {
  let number = prompt("Please enter how many boxes you want!!");
  number = compereByRegular(number);
  while ($contener.firstChild) {
    $contener.removeChild($contener.firstChild);
  }

  return number;
}

function addDivs() {
  const number = promptPop();
  if (!number) {
    return promptPop();
  }
  if (number > 64) {
    alert("Available number between 0-64 sorry!!")
  }

  const sqrtNumber = number;
  const numberEntered = number * number;
  const auto = "auto ";
  const divInContener = document.createElement("DIV");

  let gridTemplateColumns = "";
  for (let i = 0; i < sqrtNumber; i++) {
    gridTemplateColumns += auto;
  }

  $contener.style.gridTemplateColumns = gridTemplateColumns;
  for (let i = 0; i < numberEntered; i++) {
    const divInContener = document.createElement("DIV");
    $contener.appendChild(divInContener);
    // divInContener.textContent = `${i + 1}`;
    divInContener.style.background = "#eee";
    divInContener.style.color = "blue";
    divInContener.style.textAlign = "center";
    divInContener.style.overflow = " none";
    divInContener.classList.add("addColor");
    divInContener.addEventListener("mouseenter", generateRandomColor);
    divInContener.addEventListener("mouseleave", deleteColor);
  }
}

function generateRandomColor(e) {
  const lettersList = "123456789ABCDEF0";
  const arrayLetterList = lettersList.split("");
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += arrayLetterList[Math.floor(Math.random() * 15)];
  }
  this.style.background = color;
}

function deleteColor(e) {
  setTimeout(function () {
    e.target.style.background = "#eee";
  }, 300);
}

function compereByRegular(text) {
  console.log(text);
  const Enter = text;
  const reg = /[A-Z]/gi;
  const isMatch = Enter.match(reg);
  console.log(isMatch);
  if (isMatch != null) {
    alert("You must enter number sorry");
    console.log("You must enter number sorry");
    return promptPop();
  }
  return text;
}
$button.addEventListener("click", addDivs);
