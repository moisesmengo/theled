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

function idiomas() {
  const area = document.querySelector(".flags");
  const menu = document.querySelector(".area__imgs");

  area.addEventListener("click", () => {
    area.classList.toggle("ativo");
    menu.classList.toggle("ativo");
  });
}
idiomas();

function lazyLoad() {
  const lazyImages = document.querySelectorAll("img.lazyload");
  const windowHeight = window.innerHeight;

  lazyImages.forEach((image) => {
    const imageTop = image.getBoundingClientRect().top;
    if (imageTop < windowHeight) {
      image.src = image.dataset.src;
      image.classList.remove("lazyload");
    }
  });
}

lazyLoad();

window.addEventListener("scroll", lazyLoad);
