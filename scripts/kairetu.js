

const letterCard = document.querySelector(".letter-card");
const passBox = document.getElementById("passcodeBox");
const errorMsg = document.getElementById("errorMsg");

/* stop instant flipping */
letterCard.onclick = function () {
  passBox.style.display = "flex"; // show passcode popup
};

/* passcode function */
function unlockLetter(){

  const pass = document.getElementById("passInput").value;

  const correctCode = "moonlight"; // ⭐ CHANGE THIS TO YOUR SECRET CODE

  if(pass === correctCode){
    passBox.style.display = "none";
    letterCard.classList.add("flip"); // flip letter
    errorMsg.textContent = "";
  }else{
    errorMsg.textContent = "Wrong passcode 💔";
  }
}


const privateBtn = document.getElementById("privateBtn");
const pinBox = document.getElementById("pinBox");
const pinError = document.getElementById("pinError");

privateBtn.addEventListener("click", () => {
  pinBox.style.display = "flex";
});

function unlockGallery(){

  const correctPin = "moonlight"; // ⭐ change to your secret PIN
  const userPin = document.getElementById("pinInput").value;

  if(userPin === correctPin){
    window.location.href = "gallery.html";
  }else{
    pinError.textContent = "Wrong PIN 💔";
  }
}
