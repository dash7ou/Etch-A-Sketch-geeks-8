const $button = document.querySelector(".addGrid");
const $contener = document.querySelector(".contener");
const body = document.querySelector("window");

function promptPop() {
  let number = prompt("Please enter how many boxes you want!!");

  //   number = typeof number === "string" ? number : false;
  //   console.log(number);
  //   if (!number) {
  //     window.alert("You must enter number sorry");
  //     return false;
  //   }
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
    divInContener.textContent = `${i + 1}`;
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
  setTimeout(function() {
    e.target.style.background = "#eee";
  }, 300);
}
$button.addEventListener("click", addDivs);
