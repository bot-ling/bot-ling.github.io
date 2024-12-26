const circle = document.createElement('div');
circle.id = 'mouse-circle';
document.body.appendChild(circle);

let isMouseMoving = false;
let idleTimeout;

document.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;

    isMouseMoving = true;
    clearTimeout(idleTimeout);
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    circle.style.opacity = 1;

    const trail = document.createElement('div');
    trail.className = 'trail';
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;

    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 700);

    idleTimeout = setTimeout(() => {
        if (!isMouseMoving) {
            circle.style.opacity = 0;
        }
    }, 300);
});

document.addEventListener('mouseleave', () => {
    isMouseMoving = false;
    circle.style.opacity = 0;
});

document.addEventListener('mouseenter', () => {
    isMouseMoving = true;
    circle.style.opacity = 1;
});