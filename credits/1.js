const words = {
    "a developer": "#fff000",
    "a handsome guy <3": "#0099ff",
    "the king of code": "#ff6347",
    "a web genius": "#8a2be2",
    "an algorithm enthusiast": "#32cd32",
    "a JavaScript master": "#ff4500",
    "hacker of the year": "#00bfff",
    "a digital explorer": "#ff1493",
    "the king of bugs": "#800080",
    "a data architect": "#ff8c00",
    "the ninja of frameworks": "#adff2f",
    "a CSS wizard": "#ff69b4",
    "the savior of code": "#00fa9a",
    "a code pirate": "#d2691e",
    "an app creator": "#483d8b",
    "the interface designer": "#ffc0cb",
    "a backend ace": "#4b0082",
    "a front-end hero": "#3cb371",
    "a code artisan": "#ffd700",
    "the future of development": "#2e8b57",
    "an internet architect": "#7fff00",
    "a server warrior": "#d3d3d3",
    "a dreamer": "#ff69b4",
    "a nocturnal coder": "#2a2a72",
    "a code ninja": "#0f4b5f",
    "a universe creator": "#f0b3b8",
    "a pixel magician": "#00ff7f",
    "a builder of innovations": "#8a2be2",
    "an algorithm genius": "#ff6347",
    "a web explorer": "#20b2aa",
    "a peaceful hacker": "#ffd700",
    "a system pirate": "#000080",
    "a code architect": "#9acd32",
    "a digital adventurer": "#ff4500",
    "a futurist": "#00ffff ",
    "an artist of code lines": "#c71585",
    "a dev maestro": "#f5deb3",
    "a cyberspace explorer": "#8b4513",
    "a logic weaver": "#da70d6",
    "a terminal ninja": "#2f4f4f",
    "a solution architect": "#bc8f8f",
    "a technology enthusiast": "#4682b4"
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
