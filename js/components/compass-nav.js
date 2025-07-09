// Compass Navigation Component
(function() {
  const pages = [
    { href: 'index.html', icon: '🏠', label: 'Home' },
    { href: 'index3.html', icon: '🗺️', label: 'Map' },
    { href: 'index4.html', icon: '🎵', label: 'Music' },
    { href: 'index5-5.html', icon: '📜', label: 'History' },
    { href: 'ryukyuan.html', icon: '語', label: 'Languages' },
    { href: 'okinawan_marriage.html', icon: '💍', label: 'Marriage' },
    { href: 'military.html', icon: '⚔', label: 'Military' }
  ];

  // Create nav container
  const nav = document.createElement('nav');
  nav.className = 'compass-nav';
  nav.innerHTML = `
    <button class="compass-toggle" aria-label="Open navigation menu">
      🧭
    </button>
    <div class="compass-menu">
      ${pages.map(page => `
        <a href="${page.href}" class="compass-link" title="${page.label}">
          <span class="compass-icon">${page.icon}</span>
          <span class="compass-tooltip">${page.label}</span>
        </a>
      `).join('')}
    </div>
  `;
  document.body.appendChild(nav);

  // Toggle menu
  const toggle = nav.querySelector('.compass-toggle');
  const menu = nav.querySelector('.compass-menu');
  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    toggle.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
      menu.classList.remove('open');
      toggle.classList.remove('active');
    }
  });
})(); 