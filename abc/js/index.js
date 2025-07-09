// JavaScript for index.html (Nature Landing Page)

function createLeaf() {
    const leaf = document.createElement('div');
    leaf.className = 'leaf';

    const startX = Math.random() * window.innerWidth;
    leaf.style.left = startX + 'px';
    leaf.style.top = '-20px';

    const size = Math.random() * 8 + 8;
    leaf.style.width = size + 'px';
    leaf.style.height = size + 'px';

    const colors = ['#90EE90', '#FFD700', '#FF6347', 'DarkOrange', 'Crimson', 'Gold'];
    const color1 = colors[Math.floor(Math.random() * colors.length)];
    const color2 = colors[Math.floor(Math.random() * colors.length)];
    leaf.style.background = `radial-gradient(circle, ${color1}, ${color2})`;

    const animations = ['fall', 'drift', 'spiral'];
    const animation = animations[Math.floor(Math.random() * animations.length)];
    const duration = Math.random() * 3 + 4;

    leaf.style.animation = `${animation} ${duration}s linear`;
    document.getElementById('falling-leaves').appendChild(leaf);

    setTimeout(() => {
        if (leaf.parentNode) {
            leaf.parentNode.removeChild(leaf);
        }
    }, duration * 1000);
}

function createFlower() {
    const flower = document.createElement('div');
    flower.className = 'flower';

    const startX = Math.random() * window.innerWidth;
    flower.style.left = startX + 'px';
    flower.style.top = '-20px';

    const size = Math.random() * 6 + 8;
    flower.style.width = size + 'px';
    flower.style.height = size + 'px';

    const pinkColors = ['#FFB6C1', '#FF69B4', '#FF1493', '#FFC0CB', '#FF91A4'];
    const color1 = pinkColors[Math.floor(Math.random() * pinkColors.length)];
    const color2 = pinkColors[Math.floor(Math.random() * pinkColors.length)];
    flower.style.background = `radial-gradient(circle, ${color1}, ${color2})`;

    const animations = ['fall', 'drift', 'floatDown'];
    const animation = animations[Math.floor(Math.random() * animations.length)];
    const duration = Math.random() * 4 + 5;

    flower.style.animation = `${animation} ${duration}s linear`;
    document.getElementById('falling-leaves').appendChild(flower);

    setTimeout(() => {
        if (flower.parentNode) {
            flower.parentNode.removeChild(flower);
        }
    }, duration * 1000);
}

function startLeafFall() {
    if (Math.random() > 0.3) {
        createLeaf();
    } else {
        createFlower();
    }

    const nextElement = Math.random() * 800 + 200;
    setTimeout(startLeafFall, nextElement);
}

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(startLeafFall, 1000);

    document.querySelector('.cta-button').addEventListener('mouseenter', function () {
        for (let i = 0; i < 3; i++) {
            setTimeout(() => createLeaf(), i * 100);
        }
        for (let i = 0; i < 2; i++) {
            setTimeout(() => createFlower(), i * 150 + 50);
        }
    });
}); 