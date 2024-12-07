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

let starsActive = localStorage.getItem("starsActive") === "true"; 

const starContainer = document.getElementById("star-container");
const toggleButton = document.getElementById("toggle-stars");

if (!starsActive) {
    starContainer.style.display = "none"; 
}

toggleButton.addEventListener("click", () => {
    if (starsActive) {
        starContainer.style.display = "none"; // Désactive les étoiles
        starsActive = false;
    } else {
        starContainer.style.display = "block"; // Active les étoiles
        starsActive = true;
    }

    localStorage.setItem("starsActive", starsActive);
});

generateRandomStars();
