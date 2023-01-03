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

    if (e.target.id === "spiderman") {
      const objectImages = {
        image1: "./assets/img/spider-man_db8af43d-b692-4986-a385-e645d286e142.png",
        image2: "./assets/img/spider-man-2_b24c96b3-6d59-496f-815d-32b25eba0141.png",
        image3: "./assets/img/spider-man-3_19f5c510-8059-4477-abf8-42249a5445b7.png",
      };
      createImg(objectImages, "Imagen de Spiderman");
    } else if (e.target.id === "robin") {
      const objectImages = {
        image1: "./assets/img/robin-card1.png",
        image2: "./assets/img/robin-card2.webp",
        image3: "./assets/img/robin-card3.png",
      };
      createImg(objectImages, "Imagen de Robin");
    } else if (e.target.id === "batman") {
      const objectImages = {
        image1: "./assets/img/batman-card1.png",
        image2: "./assets/img/batman-card2.png",
        image3: "./assets/img/batman-card3.png",
      };
      createImg(objectImages, "Imagen de Batman");
    }
  });
});

function closeModal() {
  modal.classList.remove("visible");
  modal.classList.add("hidden");
}

const close = document.querySelector(".modal-content__close");
const buy = document.querySelector("#buy");

close.addEventListener("click", closeModal);
buy.addEventListener("click", closeModal);