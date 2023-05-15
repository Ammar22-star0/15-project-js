// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  //The size does not change here
  //  linksContainer.classList.toggle("show-links");
  //change size(automatic)
  const containerHeight = linksContainer.getBoundingClientRect().height; //0
  const linksHeight = links.getBoundingClientRect().height;
  // console.log(linksHeight);201
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
// ********** fixed navbar ************
window.addEventListener("scroll", function () {
  //console.log(window.pageYOffset);
  const scrollHeight = this.window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    //fixed
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  if (scrollHeight > 500) {
    //add arrow-up
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});
// ********** smooth scroll ************
const scrolllinks = document.querySelectorAll(".scroll-link");
scrolllinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // preventDefault:
    //The preventDefault() method will prevent the link above from following the URL.
    e.preventDefault();
    //navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1); //we don't need # Therefore we use slice(1)
    const element = document.getElementById(id); //word
    //calculate the heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixesNav = navbar.classList.contains("foxed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixesNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
// select links
