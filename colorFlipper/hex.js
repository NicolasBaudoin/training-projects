const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//# + 6values between 0 and 9 #f15025

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";

  //loop of 6 times because we need 6 values
  for (let i = 0; i < 6; i++) {
    //add to hexcolor an item of the array
    hexColor += hex[getRandomNumber(0, hex.length)];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

//function
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
