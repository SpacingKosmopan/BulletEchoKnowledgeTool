const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
