const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let newRandomHex = [];
const color = document.querySelector(".color");
const button = document.getElementById("btn");

button.addEventListener("click", function () {
  if (newRandomHex != []) {
    newRandomHex = [];
  } else newRandomHex = [];

  for (let i = 0; i < 6; i++) {
    newRandomHex.push(hex[randomHex()]);
  }
  const joinedArray = newRandomHex.join("");
  color.textContent = "#" + joinedArray;
  document.body.style.backgroundColor = "#" + joinedArray;
  console.log(newRandomHex);
});

function randomHex() {
  return Math.floor(Math.random() * hex.length);
}
