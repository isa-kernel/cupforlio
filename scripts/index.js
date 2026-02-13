const noBtn = document.getElementById("noBtn");
const stickerDisplay = document.querySelector(".js-sticker-display");
const actions = document.querySelector(".js-actions");

noBtn.addEventListener("click", () => {

  // hide YES & NO buttons
  actions.style.display = "none";

  stickerDisplay.innerHTML = `
    <div class="retry-box">
      <img src="scripts/pig.png">
      <button class="btn retry-btn">Retry</button>
    </div>
  `;

  document.querySelector(".retry-btn").addEventListener("click", () => {
    stickerDisplay.innerHTML = "";
    actions.style.display = "block"; // bring buttons back
  });

});