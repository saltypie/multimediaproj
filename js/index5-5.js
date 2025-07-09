// JavaScript for index5-5.html (Okinawan History)

document.addEventListener('DOMContentLoaded', function () {
  const slider = document.getElementById('era-slider');
  const contentContainer = document.querySelector('.content-container');
  const leftIcon = document.getElementById('icon-left');
  const rightIcon = document.getElementById('icon-right');

  const eraIcons = [
    { src: 'hajichi.png', alt: 'Prehistoric – Hajichi Tattoo', target: 'hajichi' },
    { src: './shisa.png', alt: 'Gusuku – Shisa Statue', target: 'shisa-origin' },
    { src: 'shuri_castle.jpg', alt: 'Ryukyu – Shuri Castle', target: 'shuri' },
    { src: 'okinawa_flag.png', alt: 'Modern – Okinawa Flag', target: 'flag' }
  ];

  slider.addEventListener('input', function () {
    const index = +this.value;
    const target = document.getElementById(`era-${index}`);
    const mainElement = document.querySelector('main');
    const targetTop = target.offsetTop - mainElement.offsetTop;

    contentContainer.scrollTo({
      top: targetTop - 20,
      behavior: 'smooth'
    });

    leftIcon.src = eraIcons[index].src;
    rightIcon.src = eraIcons[index].src;
    leftIcon.alt = eraIcons[index].alt;
    rightIcon.alt = eraIcons[index].alt;
    leftIcon.setAttribute('onclick', `scrollToSubsection('${eraIcons[index].target}')`);
    rightIcon.setAttribute('onclick', `scrollToSubsection('${eraIcons[index].target}')`);
  });

  window.scrollToSubsection = function(id) {
    const target = document.getElementById(id);
    // Simply scroll the target element into view within the content container
    target.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  function createLeaf() {
    const leaf = document.createElement('div');
    leaf.className = 'leaf';
    leaf.style.left = Math.random() * window.innerWidth + 'px';
    leaf.style.top = '-20px';
    leaf.style.animation = `fall ${Math.random() * 3 + 4}s linear`;
    document.getElementById('falling-leaves').appendChild(leaf);

    setTimeout(() => {
      if (leaf.parentNode) leaf.parentNode.removeChild(leaf);
    }, 8000);
  }

  function startLeafFall() {
    createLeaf();
    setTimeout(startLeafFall, Math.random() * 500 + 200);
  }

  startLeafFall();
}); 