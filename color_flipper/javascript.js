const colors = ["green", "red", "rgba(133,122,200)","#f15025"];
let btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //get random number between 0-3;
  const randomnumber = getRandomNumber();
  // console.log(randomnumber);
  document.body.style.backgroundColor = colors[randomnumber];
  color.textContent = colors[randomnumber];
});
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);//
}
