window.addEventListener("load", function () {
  document.body.style.opacity = "1";
  setTimeout(() => {
    document.getElementById("donationAmount").classList.add("fade-in");
  }, 300);
});
const seeMoreBtn = document.getElementById("seeMoreBtn");
const donationText = document.getElementById("donationText");
seeMoreBtn.addEventListener("click", function () {
  if (donationText.classList.contains("show")) {
    donationText.classList.remove("show");
    seeMoreBtn.textContent = "See more...";
  } else {
    donationText.classList.add("show");
    seeMoreBtn.textContent = "See less...";
  }
});
// Automatic SlideShow Code
const bgImages = [
  'url("https://cdn.pixabay.com/photo/2017/07/22/20/40/girl-2529907_1280.jpg")',
  'url("https://www.insidephilanthropy.com/wp-content/uploads/2024/07/shutterstock_564267847.jpg")',
  'url("https://pbs.twimg.com/media/GYLwEs-XIAAq_IV.jpg:large")',
];

let idx = 0;

const updateBg = () => {
  const section = document.getElementById("RealBg");
  section.style.backgroundImage = bgImages[idx];

  idx = (idx + 1) % bgImages.length;
};

setInterval(updateBg, 10000);
updateBg();
