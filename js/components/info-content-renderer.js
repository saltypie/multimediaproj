// Reusable Info Content Renderer
// Usage: renderInfoContent(contentArr, parent)
(function() {
  function renderInfoContent(contentArr, parent) {
    contentArr.forEach(item => {
      if (item.type === 'text') {
        const div = document.createElement('div');
        div.innerHTML = item.text;
        parent.appendChild(div);
      } else if (item.type === 'image') {
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt || '';
        // Use .carousel-img if parent is a carousel, else .info-img
        if (parent.closest('.carousel-component')) {
          img.className = 'carousel-img';
        } else {
          img.className = 'info-img';
        }
        parent.appendChild(img);
      } else if (item.type === 'carousel') {
        const carouselDiv = document.createElement('div');
        parent.appendChild(carouselDiv);
        new Carousel({ items: item.items, parent: carouselDiv, width: item.width || 600, height: item.height || 400 });
      }
      // Add more types as needed
    });
  }
  window.renderInfoContent = renderInfoContent;
})(); 