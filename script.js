"use strict";

const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");

function showPopup(title, message) {
  popupTitle.textContent = title;
  popupText.textContent = message;
  popup.classList.add("active");
  document.getElementById("closePopup").focus();
}
function closePopup() {
  popup.classList.remove("active");
}

document.getElementById("closePopup").addEventListener("click", closePopup);
document.getElementById("popupOk").addEventListener("click", closePopup);
popup.addEventListener("click", (event) => {
  if (event.target === popup) closePopup();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closePopup();
});

document.getElementById("playNow").addEventListener("click", () => {
  showPopup("WELCOME GAMER! 🔥", "Choose a game from Featured Games to get started.");
});
document.getElementById("exploreGames").addEventListener("click", () => {
  document.getElementById("games").scrollIntoView({ behavior: "smooth" });
});
document.querySelectorAll("[data-popup='join']").forEach((button) => {
  button.addEventListener("click", () => showPopup("JOIN ROHAN RGYT", "Thanks for your interest! Add your registration or contact link to enable joining."));
});
document.querySelectorAll("[data-popup='community']").forEach((button) => {
  button.addEventListener("click", () => showPopup("JOIN COMMUNITY", "Community link is not set yet. Add your Discord, WhatsApp, or other community URL to connect."));
});
document.querySelectorAll("[data-game]").forEach((button) => {
  button.addEventListener("click", () => showPopup(button.dataset.game, "Game details are coming soon. This button is working, but a real game link has not been added yet."));
});
document.querySelectorAll("[data-tournament]").forEach((button) => {
  button.addEventListener("click", () => showPopup("JOIN " + button.dataset.tournament, "Registration is not connected yet. Add a registration form link to accept entries."));
});

const searchInput = document.getElementById("gameSearch");
const gameCards = [...document.querySelectorAll(".game-card")];
const emptyMessage = document.getElementById("emptyMessage");
searchInput.addEventListener("input", () => {
  const term = searchInput.value.trim().toLowerCase();
  let visible = 0;
  gameCards.forEach((card) => {
    const matches = card.dataset.name.toLowerCase().includes(term);
    card.hidden = !matches;
    if (matches) visible++;
  });
  emptyMessage.hidden = visible !== 0;
});

const menuButton = document.getElementById("menuBtn");
const nav = document.getElementById("mainNav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});
console.log("ROHAN RGYT Gaming website loaded.");
