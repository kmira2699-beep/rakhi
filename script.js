const messages = [
  "Bachpan me hum kitna ladte the 😄",
  "Par ek dusre ke bina reh nahi paate the ❤️",
  "Raksha Bandhan pe wo pyar aur gifts 🎁",
  "Tu hamesha mera support system raha 🤝",
  "Main hamesha tere saath rahunga/rahungi 💖"
];

let index = 0;

function openCard() {
  document.querySelector(".welcome").style.display = "none";
  document.getElementById("card").style.display = "block";
  document.getElementById("music").play();
  showMessage();
}

function showMessage() {
  document.getElementById("message").innerText = messages[index];
}

function nextMessage() {
  index++;
  if (index >= messages.length) index = 0;
  showMessage();
}

function showFinal() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

/* 🎵 MUSIC FUNCTIONS */
function toggleMusic() {
  const music = document.getElementById("music");

  if (isPlaying) {
    music.pause();
  } else {
    music.play();
  }

  isPlaying = !isPlaying;
}

function changeVolume(value) {
  document.getElementById("music").volume = value;
}