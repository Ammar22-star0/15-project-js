const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevtBtn = document.querySelector(".prevBtn");

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});
prevtBtn.addEventListener("click", function () {
  counter--;
  carousel();
});
function carousel() {
  //working with slides
  // if(counter===slides.length){
  //     counter=0;
  // }
  // if(counter<0){
  //     counter=slides.length-1;
  // }
  // working with buttons
  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevtBtn.style.display = "block";
  } else {
    prevtBtn.style.display = "none";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
prevtBtn.style.display = "none";
