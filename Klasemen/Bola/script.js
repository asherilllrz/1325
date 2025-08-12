// Fungsi buat hati jatuh
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Jalankan efek hati jatuh tiap 300ms
setInterval(createHeart, 300);

// Efek pesan muncul setelah delay
window.onload = function() {
    const header = document.querySelector("header h1");
    if (header) {
        header.style.opacity = 0;
        setTimeout(() => {
            header.style.transition = "opacity 2s ease-in-out";
            header.style.opacity = 1;
        }, 500);
    }
};
