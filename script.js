document.addEventListener("DOMContentLoaded", function () {
  const affirmations = [
    "You are capable and strong.",
    "Believe in yourself and your abilities.",
    "Every day is a new opportunity to grow and improve.",
    "You deserve happiness and success.",
    "Your potential is limitless.",
    "You are worthy of love and respect.",
    "You can overcome any challenge that comes your way.",
    "Focus on the positive, and positive things will happen.",
    "You are in control of your own destiny.",
    "Embrace your uniqueness; you are one of a kind.",
  ];

  const affirmationDisplay = document.getElementById("affirmationDisplay");
  const newAffirmationBtn = document.getElementById("newAffirmationBtn");

  function displayNewAffirmation() {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    affirmationDisplay.textContent = affirmations[randomIndex];
  }

  newAffirmationBtn.addEventListener("click", displayNewAffirmation);

  // Display an affirmation on page load
  displayNewAffirmation();
});
