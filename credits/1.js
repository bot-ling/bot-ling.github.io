const words = {
    "a developer": "#fff000",
    "a handsome guy <3": "#0099ff",
    "the king of code": "#ff6347",
    "a web genius": "#8a2be2",
    "a JavaScript master": "#ff4500",
    "a digital explorer": "#ff1493",
    "the ninja of frameworks": "#adff2f",
    "a CSS wizard": "#ff69b4",
    "an app creator": "#483d8b",
    "the interface designer": "#ffc0cb",
    "a backend ace": "#4b0082",
    "a front-end hero": "#3cb371",
    "a code artisan": "#ffd700",
    "a server warrior": "#d3d3d3",
    "a dreamer": "#ff69b4",
    "a nocturnal coder": "#2a2a72",
    "a code ninja": "#0f4b5f",
    "a pixel magician": "#00ff7f",
    "a builder of innovations": "#8a2be2",
    "a web explorer": "#20b2aa",
    "a code architect": "#9acd32",
    "an artist of code lines": "#c71585",
    "a dev maestro": "#f5deb3",
    "a terminal ninja": "#2f4f4f",
    "a solution architect": "#bc8f8f",
    "a technology enthusiast": "#4682b4",
    "YAAAAAAAAAAAA, sorry I had to do that.": "#6A5ACD"
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
