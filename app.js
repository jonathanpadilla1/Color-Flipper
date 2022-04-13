const colors = [
  "green",
  "red",
  "gray",
  "silver",
  "black",
  "white",
  "maroon",
  "purple",
  "lime",
  "fuchsia",
  "olive",
  "yellow",
  "navy",
  "blue",
  "teal",
  "aqua",
  "gold",
  "salmon",
  "plum",
  "pink",
  "royalblue",
  "peru",
  "sienna",
  "snow",
  "orange",
  "olivedrab",
  "moccasin",
  "mistyrose",
  "linen",
  "lightseagreen",
  "lemonchiffon",
  "lightcoral",
  "lightcyan",
  "ivory",
  "khaki",
  "indianred",
  "aliceblue",
  "aquamarine",
  "azure",
  "beige",
  "blanchedalmond",
  "cornflowerblue",
  "burlywood",
  "chocolate",
  "cornsilk",
  "crimson",
  "darkgoldenrod",
  "dodgerblue",
  "gainsboro",
  "ghostwhite",
];

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
