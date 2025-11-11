const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");
let isPlaying = false;
window.addEventListener("load", () => {
  music.volume = 0.3; 
  music.play().then(() => {
    isPlaying = true;
    musicBtn.textContent = "🔇"; 
  }).catch(() => {
    musicBtn.textContent = "🎵";
  });
});
musicBtn.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    musicBtn.textContent = "🎵";
  } else {
    music.play();
    musicBtn.textContent = "🔇";
  }
  isPlaying = !isPlaying;
});
document.addEventListener("DOMContentLoaded", function () {
  const showFormBtn = document.getElementById("show-form-btn");
  const formContent = document.getElementById("form-content");
  showFormBtn.addEventListener("click", function () {
    if (formContent.style.display === "block") {
      formContent.style.display = "none";
      showFormBtn.textContent = "Fill the Form 📝";
    } else {
      formContent.style.display = "block";
      showFormBtn.textContent = "Hide Form ❌";
      formContent.scrollIntoView({ behavior: "smooth" });
    }
  });
});
function showThankYouMessage(event) {
  event.preventDefault();

  // Hide form after submission
  const form = document.getElementById("form-content");
  form.style.display = "none";
  const thankYouMsg = document.createElement("p");
  thankYouMsg.id = "thank-you";
  thankYouMsg.textContent = "🎉 Thank you for your application! We'll contact you soon.";
  document.querySelector(".adoption-form").appendChild(thankYouMsg);

  thankYouMsg.style.display = "block";
  thankYouMsg.scrollIntoView({ behavior: "smooth" });

  return false;
}
// 🐾 Success Stories Scroll Animation (append to script.js)
document.addEventListener("DOMContentLoaded", function () {
  const storyCards = document.querySelectorAll(".story-card");

  function revealStoryCards() {
    const triggerBottom = window.innerHeight * 0.85;

    storyCards.forEach((card, index) => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < triggerBottom && !card.classList.contains("show")) {
        setTimeout(() => {
          card.classList.add("show");
        }, index * 180); // stagger: 180ms between cards
      }
    });
  }

  window.addEventListener("scroll", revealStoryCards);
  revealStoryCards(); // run on load in case some cards are already visible
});


