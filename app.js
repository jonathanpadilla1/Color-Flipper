const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const color = document.querySelector(".color");
const button = document.getElementById("btn");

button.addEventListener("click", function () {
  const getRandomColor = randomColor();
  color.textContent = colors[getRandomColor];
  document.body.style.backgroundColor = colors[getRandomColor];
  console.log(getRandomColor);
});

function randomColor() {
  return Math.floor(Math.random() * colors.length);
}
