// Reusable InfoWindow Component
(function() {
  class InfoWindow {
    constructor({ title = '', content = '', x = 100, y = 100, width = 320, height = 180, parent = document.body }) {
      this.parent = parent;
      this.el = document.createElement('div');
      this.el.className = 'info-window';
      this.el.style.top = y + 'px';
      this.el.style.left = x + 'px';
      this.el.style.width = width + 'px';
      this.el.style.height = height + 'px';
      this.el.innerHTML = `
        <div class="info-window-header">
          <div class="info-window-title">${title}</div>
          <div class="info-window-buttons">
            <button class="info-window-btn info-window-max" title="Maximize">🗖</button>
            <button class="info-window-btn info-window-close" title="Close">✖</button>
          </div>
        </div>
        <div class="info-window-content">${content}</div>
      `;
      parent.appendChild(this.el);
      this.header = this.el.querySelector('.info-window-header');
      this.maxBtn = this.el.querySelector('.info-window-max');
      this.closeBtn = this.el.querySelector('.info-window-close');
      this.contentEl = this.el.querySelector('.info-window-content');
      this.isMaximized = false;
      this.initEvents();
    }
    setContent(html) {
      this.contentEl.innerHTML = html;
    }
    setTitle(title) {
      this.el.querySelector('.info-window-title').textContent = title;
    }
    close() {
      this.el.remove();
    }
    maximize() {
      this.isMaximized = !this.isMaximized;
      this.el.classList.toggle('maximized', this.isMaximized);
    }
    bringToFront() {
      // Set z-index higher than any other .info-window
      let maxZ = 100;
      document.querySelectorAll('.info-window').forEach(w => {
        const z = parseInt(w.style.zIndex || 100, 10);
        if (z > maxZ) maxZ = z;
      });
      this.el.style.zIndex = maxZ + 1;
    }
    initEvents() {
      // Drag
      let isDragging = false, offsetX, offsetY;
      this.header.addEventListener('mousedown', e => {
        if (e.target.closest('.info-window-buttons')) return;
        isDragging = true;
        this.bringToFront();
        offsetX = e.clientX - this.el.offsetLeft;
        offsetY = e.clientY - this.el.offsetTop;
        document.body.style.userSelect = 'none';
      });
      document.addEventListener('mousemove', e => {
        if (isDragging) {
          this.el.style.left = (e.clientX - offsetX) + 'px';
          this.el.style.top = (e.clientY - offsetY) + 'px';
        }
      });
      document.addEventListener('mouseup', () => {
        isDragging = false;
        document.body.style.userSelect = '';
      });
      // Maximize
      this.maxBtn.addEventListener('click', () => this.maximize());
      // Close
      this.closeBtn.addEventListener('click', () => this.close());
      // Bring to front on click
      this.el.addEventListener('mousedown', () => this.bringToFront());
    }
  }
  window.InfoWindow = InfoWindow;
})(); 