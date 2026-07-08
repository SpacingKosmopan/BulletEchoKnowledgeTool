// *****
function getRandomIntInclusive(min, max) {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
}
// *****

// * PIXELISATION MECHANICS * //
const canvas = document.getElementById("pixel-canvas");
const ctx = canvas.getContext("2d");
const slider = document.getElementById("pixel-slider");
const pixelValueDisplay = document.getElementById("pixel-value");

const img = new Image();

function applyPixelation(pixelSize) {
  const w = img.naturalWidth;
  const h = img.naturalHeight;

  canvas.width = w;
  canvas.height = h;

  if (pixelSize === 1) {
    ctx.drawImage(img, 0, 0);
    return;
  }

  const smallW = Math.max(1, Math.floor(w / pixelSize));
  const smallH = Math.max(1, Math.floor(h / pixelSize));

  const tempCanvas = document.createElement("canvas");
  tempCanvas.width = smallW;
  tempCanvas.height = smallH;
  const tempCtx = tempCanvas.getContext("2d");

  tempCtx.drawImage(img, 0, 0, smallW, smallH);

  ctx.imageSmoothingEnabled = false;
  ctx.mozImageSmoothingEnabled = false;
  ctx.webkitImageSmoothingEnabled = false;

  ctx.drawImage(tempCanvas, 0, 0, smallW, smallH, 0, 0, w, h);
}

function loadRandomImage() {
  if (drawnImages.length === images.length) {
    alert(`All ${images.length} images has been drawn.`);
    drawnImages = [];
  }

  let randomImageNumber;
  do {
    randomImageNumber = getRandomIntInclusive(0, images.length - 1);
  } while (drawnImages.includes(randomImageNumber));

  drawnImages.push(randomImageNumber);

  currentImage = images[randomImageNumber];
  img.src = currentImage.src;
  tipText.innerHTML = `Tip: ${currentImage.tip}`;
}

img.onload = function () {
  applyPixelation(pixelChangeList[0]);
};

// * DATA * //
const images = [
  { src: "../skins/alice.png", answer: "Alice", tip: "Hero name" },
  { src: "../skins/arnie.png", answer: "Arnie", tip: "Hero name" },
  { src: "../skins/bastion.png", answer: "Bastion", tip: "Hero name" },
  { src: "../skins/angel.png", answer: "Angel", tip: "Hero name" },
  { src: "./images/12.png", answer: "Satoshi (skin)", tip: "Hero name" },
  {
    src: "./images/railway_station.png",
    answer: "Railway Station",
    tip: "Map name",
  },
  { src: "./images/secret_floor.png", answer: "Secret Flor", tip: "Map name" },
  { src: "./images/sawmill.png", answer: "Sawmill", tip: "Map name" },
  { src: "./images/24.png", answer: "Thug Knuckles", tip: "Common gear name" },
  { src: "./images/25.png", answer: "Tech Knee Pads", tip: "Common gear name" },
  { src: "./images/26.png", answer: "Runners Boot", tip: "Common gear name" },
  {
    src: "./images/27.png",
    answer: "Beach/Summer Season",
    tip: "Star Pass season name",
  },
  {
    src: "./images/28.png",
    answer: "Portal",
    tip: "Ability name",
  },
  {
    src: "./images/29.png",
    answer: "Fire Hunter",
    tip: "Ability name",
  },
];
let currentImage = null;
let drawnImages = [];

// * MAIN GAME MECHANICS * //
let currentPixelIndex = 0;
const pixelChangeList = [75, 70, 60, 50, 40, 30, 20, 1];

const startBtn = document.querySelector("#generate-image");
const depixBtn = document.querySelector("#depixelise");

const tipText = document.querySelector("#tip-text");

startBtn.addEventListener("click", function () {
  this.classList.add("hidden");
  depixBtn.classList.remove("hidden");

  tipText.innerHTML = ``;

  depixBtn.disabled = false;
  depixBtn.innerHTML = "<p>Depixelise</p>";

  currentPixelIndex = 0;
  loadRandomImage();
});

depixBtn.addEventListener("click", function () {
  if (currentPixelIndex >= pixelChangeList.length - 1) return;

  currentPixelIndex++;

  if (img.complete) {
    applyPixelation(pixelChangeList[currentPixelIndex]);
  }

  if (currentPixelIndex === pixelChangeList.length - 1) {
    depixBtn.innerHTML = `<p>Revealed! <u>${currentImage.answer}</p></u>`;
    depixBtn.disabled = true;

    startBtn.classList.remove("hidden");
    startBtn.innerHTML = "<p>Restart</p>";
  } else if (currentPixelIndex === pixelChangeList.length - 2)
    depixBtn.innerHTML = "<p>Last chance!</p>";
});
