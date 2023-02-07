function menu() {
  const close = document.querySelector(".close");
  const btn = document.querySelector(".mobile");
  const menu = document.querySelector(".menu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  close.addEventListener("click", () => {
    menu.classList.remove("active");
  });
}
menu();
