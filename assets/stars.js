function generateRandomStars() {
    const starContainer = document.querySelector(".star-container");
    const numStars = 100;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${1 + Math.random() * 4}s`;

        starContainer.appendChild(star);
    }
}

let starsActive = localStorage.getItem("starsActive");

// Si aucune valeur dans le localStorage activer les étoiles par défaut 
if (starsActive === null) {
    starsActive = true;
    localStorage.setItem("starsActive", true); 
} else {
    starsActive = starsActive === "true"; 
}

const starContainer = document.getElementById("star-container");
const toggleButton = document.getElementById("toggle-stars");

starContainer.style.display = starsActive ? "block" : "none";

toggleButton.addEventListener("click", () => {
    starsActive = !starsActive;
    starContainer.style.display = starsActive ? "block" : "none";
    localStorage.setItem("starsActive", starsActive);
});

generateRandomStars();

document.addEventListener("scroll", function () {
    const toggleButton = document.querySelector(".toggle-button");
    if (window.scrollY > 60) { // Si l'utilisateur a défilé de plus de 50px
        toggleButton.classList.add("scrolled");
    } else {
        toggleButton.classList.remove("scrolled");
    }
});
