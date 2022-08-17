function scrollToTop() {
  window.scrollTo(0, 0);
}

let btn = document.querySelector("#btn-scrolltop");

document.addEventListener("scroll", function (e) {
  if (window.scrollY > 300) {
    btn.style.display = "grid";
  } else {
    btn.style.display = "none";
  }
});

function switchTheme() {
  document.body.classList.add("dark-bg");
  document.querySelector("h1").classList.add("white-text");
  // document.querySelector
}
