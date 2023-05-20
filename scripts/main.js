const HexArea = document.querySelector(".main-hex");
const Btn = document.querySelector(".main-btn");
const body = document.querySelector("body");

const HexColor = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
setColor();

Btn.addEventListener("click", function () {
  setColor();
});

function getRandInt() {
  return Math.floor(Math.random() * HexColor.length);
}

function getRandHex() {
  let hex = "#";
  for (i = 0; i < 6; i++) {
    hex += HexColor[getRandInt()];
  }
  return hex;
}

function setColor() {
  let hexColor = getRandHex();
  body.style.backgroundColor = hexColor;
  HexArea.innerHTML = hexColor;
}
