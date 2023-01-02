const images = document.querySelectorAll(".img");
const modal = document.querySelector(".modal");
const card1 = document.querySelector("#card-1");
const card2 = document.querySelector("#card-2");
const card3 = document.querySelector("#card-3");

function createElementImg(url, alt, nodo) {
  const image = document.createElement("img");
  image.setAttribute("src", url);
  image.setAttribute("alt", alt);
  image.classList.add("image-card");
  nodo.appendChild(image);
}

function createImg(url, alt) {
  const { image1, image2, image3 } = url;
  createElementImg(image1, alt, card1);
  createElementImg(image2, alt, card2);
  createElementImg(image3, alt, card3);
}

function removeChilds() {
  card1.removeChild(card1.lastChild);
  card2.removeChild(card2.lastChild);
  card3.removeChild(card3.lastChild);
}

images.forEach((image) => {
  image.addEventListener("click", (e) => {
    modal.classList.remove("hidden");
    modal.classList.add("visible");
    removeChilds();

    if (e.target.id === "deadpool") {
      const objectImages = {
        image1: "./assets/deadpool.png",
        image2: "./assets/deadpool/slider-1.png",
        image3: "./assets/deadpool/slider-2.png",
      };
      createImg(objectImages, "imagen deadpool");
    } else if (e.target.id === "spiderman") {
      const objectImages = {
        image1: "./assets/spiderman.png",
        image2: "./assets/spiderman/slider-1.png",
        image3: "./assets/spiderman/slider-2.png",
      };
      createImg(objectImages, "imagen spiderman");
    } else if (e.target.id === "joker") {
      const objectImages = {
        image1: "./assets/joker.png",
        image2: "./assets/joker/slider-1.png",
        image3: "./assets/joker/slider-2.png",
      };
      createImg(objectImages, "imagen joker");
    }
  });
});

function closeModal() {
  modal.classList.remove("visible");
  modal.classList.add("hidden");
}
const close = document.querySelector(".icon-close");
const buy = document.querySelector("#buy");

close.addEventListener("click", closeModal);
buy.addEventListener("click", closeModal);