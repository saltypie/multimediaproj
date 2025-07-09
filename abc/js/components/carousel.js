// Reusable Carousel Component
// Usage: new Carousel({ items, parent: someElement, ... })
// You can place any other content before or after the carousel in the parent element.
(function() {
  class Carousel {
    constructor({ items = [], startIndex = 0, parent = document.body, width = 600, height = 400 }) {
      this.items = items;
      this.index = startIndex;
      this.parent = parent;
      this.width = width;
      this.height = height;
      this.el = document.createElement('div');
      this.el.className = 'carousel-component';
      this.el.style.width = width + 'px';
      this.el.style.height = height + 'px';
      this.el.innerHTML = `
        <div class="carousel-track"></div>
        <button class="carousel-btn carousel-prev" title="Previous">&#8592;</button>
        <button class="carousel-btn carousel-next" title="Next">&#8594;</button>
        <div class="carousel-indicators"></div>
      `;
      this.track = this.el.querySelector('.carousel-track');
      this.prevBtn = this.el.querySelector('.carousel-prev');
      this.nextBtn = this.el.querySelector('.carousel-next');
      this.indicators = this.el.querySelector('.carousel-indicators');
      // Only append the carousel to the parent, do not clear or modify other content
      this.parent.appendChild(this.el);
      this.render();
      this.initEvents();
    }
    render() {
      // Render current item
      this.track.innerHTML = '';
      if (!this.items.length) return;
      const item = this.items[this.index];
      let content;
      if (item.type === 'image') {
        content = document.createElement('img');
        content.src = item.src;
        content.alt = item.alt || '';
        content.className = 'carousel-img';
      } else if (item.type === 'video') {
        content = document.createElement('video');
        content.src = item.src;
        content.controls = true;
        content.className = 'carousel-video';
      } else if (item.type === 'text') {
        content = document.createElement('div');
        content.className = 'carousel-text';
        content.innerHTML = item.text;
      }
      if (content) this.track.appendChild(content);
      // Render indicators
      this.indicators.innerHTML = '';
      this.items.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.className = 'carousel-dot' + (i === this.index ? ' active' : '');
        dot.addEventListener('click', () => this.goTo(i));
        this.indicators.appendChild(dot);
      });
    }
    goTo(i) {
      if (i < 0 || i >= this.items.length) return;
      this.index = i;
      this.render();
      this.el.dispatchEvent(new CustomEvent('carouselChange', { detail: { index: this.index } }));
    }
    next() {
      this.goTo((this.index + 1) % this.items.length);
    }
    prev() {
      this.goTo((this.index - 1 + this.items.length) % this.items.length);
    }
    initEvents() {
      this.prevBtn.addEventListener('click', () => this.prev());
      this.nextBtn.addEventListener('click', () => this.next());
    }
    destroy() {
      this.el.remove();
    }
  }
  window.Carousel = Carousel;
})(); 