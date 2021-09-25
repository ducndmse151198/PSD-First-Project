const openBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", () => {
  document.querySelector(".menu").classList.add("active");
});

closeBtn.addEventListener("click", () => {
  document.querySelector(".menu").classList.remove("active");
});
