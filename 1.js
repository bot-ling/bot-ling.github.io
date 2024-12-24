const words = {
    "Multilingual bot": "#fff000",
    "Robot": "#0099ff",
    "Magical bot": "#8a2be2",
    "Intelligent bot": "#00ff7f",
    "Automatic bot": "#ff6347",
    "Polyglot bot": "#ff69b4",
    "Reactive bot": "#4682b4",
    "Fast bot": "#00ffff",
    "Evolving bot": "#ffd700",
    "Fishing bot": "#00ff80",
    "Interactive bot": "#f5deb3"
},

    typewriteElement = document.getElementById("typewrite");

const whatAmIs = Object.keys(words),
    colors = Object.values(words);

const wait = (duration) => {
    return new Promise((resolve) => setTimeout(resolve, duration));
};

async function write(content, color) {
    typewriteElement.style.color = color;
    typewriteElement.classList.add("typing")
    for (let i = 0; i < content.length + 1; i++) {
        let newContent = content.slice(0, i);
        await wait((Math.floor(Math.random() * 250) + 100))
        typewriteElement.innerHTML = newContent;
    }
}

async function erease() {
    let content = typewriteElement.innerText;
    typewriteElement.classList.add("typing")
    let anotherContentLength = typewriteElement.innerText.length;
    for (anotherContentLength; anotherContentLength != -1; anotherContentLength--) {
        typewriteElement.innerText = content.slice(0, anotherContentLength);
        await wait((Math.floor(Math.random() * 100) + 50));
        console.log(anotherContentLength, content, typewriteElement.innerText)
    }
    typewriteElement.style.color = "#000";
    typewriteElement.classList.remove("typing")
    await wait(1000);
}

while (true) {
    let randomIndex = Math.floor(Math.random() * whatAmIs.length);
    const whatAmI = whatAmIs[randomIndex];
    const color = colors[randomIndex];

    await write(whatAmI, color);
    typewriteElement.classList.remove("typing")
    await wait(5000);
    await erease();
};
