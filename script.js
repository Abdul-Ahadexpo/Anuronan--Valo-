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
const bgImages = ['url("lol.jpg")', 'url("Poor.jpg")', 'url("stupid.png")'];

let idx = 0;

const updateBg = () => {
  const section = document.getElementById("RealBg");
  section.style.backgroundImage = bgImages[idx];

  idx = (idx + 1) % bgImages.length;
};

setInterval(updateBg, 5000);
updateBg();
