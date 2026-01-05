

// SNOW
const snowCount = 50;
for (let i = 0; i < snowCount; i++) {
  let snow = document.createElement("div");
  snow.className = "snow";
  snow.style.left = Math.random() * 100 + "vw";
  snow.style.animationDuration = Math.random() * 5 + 5 + "s";
  snow.style.opacity = Math.random();
  snow.style.fontSize = Math.random() * 10 + 10 + "px";
  document.body.appendChild(snow);
}

const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const openBtns = document.querySelectorAll(".openModal");

openBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.classList.add("active");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalOverlay = document.getElementById('modalOverlay');

  openModalBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'flex';
  });

  closeModalBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
  });

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.style.display = 'none';
    }
  });


openModal.onclick = () => {
  modal.style.display = "flex";
}

closeModal.onclick = () => {
  modal.style.display = "none";
}

modal.onclick = (e) => {
  if(e.target === modal){
    modal.style.display = "none";
  }
}

