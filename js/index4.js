// JavaScript for index4.html (Snake Skin Strings)

document.addEventListener('DOMContentLoaded', function () {
  const infoData = {
    uujiru: {
      title: 'Uujiru 男絃',
      content: [
        { type: 'text', text: '<p><strong>Uujiru</strong> is the "male" string. This section will focus on Traditional Instruments</p>' },
        { type: 'text', text: '<h2>The Sanshin</h2>' },
        { type: 'carousel', items: [
            { type: 'image', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Sanshin_player.jpg/960px-Sanshin_player.jpg?20100705171246', alt: 'A man plays the Sanshin in traditional attire' },
            { type: 'text', text: '<p>A man plays the Sanshin in traditional attire</p>' },
            { type: 'image', src: 'https://nihonmono.jp/en/wp-content/uploads/sites/3/2016/06/top_yasutomi.jpg', alt: 'A sanshin played with a finger pick' },
            { type: 'text', text: '<p>A sanshin played with a finger pick</p>' }
          ], width: 600, height: 400 },
        { type: 'text', text: '<p>The sanshin is arguably the most iconic Okinawan instrument</p>' },
        { type: 'text', text: '<h2>Percussion Instruments</h2>' },
        { type: 'carousel', items: [
            { type: 'image', src: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Sanba.pg.jpg', alt: 'The Sanba' },
            { type: 'text', text: '<p>The Sanba, consists of three slabs used to produce clicking sounds</p>' },
            { type: 'image', src: 'https://amakuma.ryukyu/wp-content/uploads/2023/08/culture_paranku-1-1024x746.jpeg', alt: 'The Pārankū drum' },
            { type: 'text', text: '<p>The Pārankū is a handheld drum commonly used for traditional eisā dances</p>' },
            { type: 'text', text: '<p>Other percussion instruments include the popular Taiko drum.</p>' }
          ], width: 600, height: 400 }
      ]
    },
    nakajiru: {
      title: 'Nakajiru 中絃',
      content:`
                <p><strong>nakajiru</strong> is the middle/neutral string. This section will focus on folk and contemporary artists.</p>
                <h2>Rinsho Kadekaru</h2>
                <img src="https://powerofokinawa.wordpress.com/wp-content/uploads/2010/07/umi-koi-ikusa-e382b3e38394e383bc.jpg" class="info-img">
                <p>Rinsho Kadekaru(1920-1999) was a Japanese-Okinawan musician considered a representative of Okinawan folk music in the post-war era.</p>
                <iframe width="560" height="315"
                  src="https://www.youtube.com/embed/RAzVyMBK5LI?start=60"
                  title="嘉手苅林昌 – ナークニー（「沖縄の魂の行方」より）"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen>
                </iframe>
                <h2>Yukito Ara</h2>
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSQycU2m98tyuB2RV4v3oMv-Hyh7NoTdE7QvvLgDWZHjXwbI-0X064rNZLI1Hi4alSR7IJCnra4IGdMivDcj11eJw" class="info-img">
                <p>Yukito Ara is an iconic Ishigaki-born artist. He is iconic for playing the sanshin in min'yō folk style. Ara's discography also consists of fusion pieces combining min'yō with jazz and pop.</p>
                <h2>Ayano Uema</h2>
                <img src="https://d1bxnw4yi2rcwu.cloudfront.net/uploads/images/Musicians/_992x1240_crop_center-center_82_line/Ayano-Uemae-Portrait.png.webp" class="info-img">
                <p>Ayano- Uema is an Okinawan musician well known for her vocals and sanshin mastery. She is an acclaimed musician who rose to popularity with her 2012 album Uta-Sha.</p>
                <iframe width="560" height="315" 
                  src="https://www.youtube.com/embed/PWwesS31C6g?start=1648" 
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowfullscreen>
                </iframe>
                <h2>BEGIN</h2>
                <img src="https://cdn-images.dzcdn.net/images/artist/9c22eed65bbb4b75b83f27743eb31173/1900x1900-000000-80-0-0.jpg" class="info-img">
                <p>A pop rock group that heavily incorporates the sanshin in their music.</p>
                <h2>Champloose</h2>
                <img src="https://cdn-images.dzcdn.net/images/cover/54ad3eb0961e3457e6e7f06b4f3c7e66/0x1900-000000-80-0-0.jpg" class="info-img">
                <p>Named after the local dish "<a href="https://en.wikipedia.org/wiki/Chanpur%C5%AB">Champloo</a>", Champloose is a band known for pioneering the local folk-rock movement in Okinawa..</p>
              
              `
    },
    miijiru: {
      title: 'Miijiru 女絃',
      content:`

                <!-- Zo-odori -->
                <iframe width="560" height="315"
                  src="https://www.youtube.com/embed/TGvCeoitp0o?start=6"
                  title="Zo-odori"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen>
                </iframe>
                <p>Zo-odori is a lighthearted traditional Okinawan dance often characterized by graceful, humorous animal-inspired gestures.</p>

                <!-- Shundo -->
                <iframe width="560" height="315"
                  src="https://www.youtube.com/embed/TGvCeoitp0o?start=49"
                  title="Shundo"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen>
                </iframe>
                <p>Shundo is a more refined and elegant Okinawan dance style typically performed by women, highlighting subtle movements and classical gestures.</p>

                <!-- Onna-odori -->
                <iframe width="560" height="315"
                  src="https://www.youtube.com/embed/TGvCeoitp0o?start=89"
                  title="Onna-odori"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen>
                </iframe>
                <p>Onna-odori refers to female-style dances in Okinawan tradition, known for their fluid arm motions and refined postures symbolizing grace and dignity.</p>

                <!-- Eisa -->
                <iframe width="560" height="315"
                  src="https://www.youtube.com/embed/lik0q7qOXPs"
                  title="Eisa"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen>
                </iframe>
                <p>Eisa is a dynamic group dance performed during the Bon Festival in Okinawa, featuring drumming, chanting, and synchronized movements that honor ancestors.</p>

                <!-- Traditional Music Ensemble -->
                <iframe width="560" height="315"
                  src="https://www.youtube.com/embed/noNy_dAgNRw?start=24"
                  title="Traditional Okinawan Music Ensemble"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen>
                </iframe>
                <p>This traditional Okinawan music ensemble performance blends the sounds of the sanshin, vocals, and other classical instruments in a rich and soulful expression of cultural heritage.</p>

              ` 
      // content: [
      //   { type: 'text', text:`
      //                         <p><strong>miijiru</strong> is the "female" string. This section will focus on specific songs and dance.</p>
      //                         <h2>Eisa</h2>
      //                        ` 
      //   },
      //   { type: 'image', src: 'shisa.png', alt: 'Shisa Lion' },
      //   { type: 'carousel', items: [
      //       { type: 'image', src: 'shuri_castle.jpg', alt: 'Shuri Castle' },
      //       { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      //       { type: 'text', text: '<p>Miijiru is the highest string on the Sanshin.</p>' }
      //     ]
      //   },
      //   { type: 'text', text: '<p>Some more text after the carousel.</p>' }
      // ]
    }
  };
  const frequencies = {
    uujiru: 130.81,    // C3
    nakajiru: 174.61,  // F3
    miijiru: 261.63    // C4
  };
  const openWindows = {};
  document.querySelectorAll('.string').forEach(string => {
    string.addEventListener('click', () => {
      const name = string.dataset.string;
      playPluckTone(frequencies[name], 'triangle');
      if (openWindows[name]) {
        openWindows[name].bringToFront();
        return;
      }
      const win = new InfoWindow({
        title: infoData[name].title,
        content: '<div class="info-content"></div>',
        x: window.innerWidth/2 - 180 + Math.random()*60,
        y: window.innerHeight/3 + Math.random()*40
      });
      setTimeout(() => {
        const parent = win.el.querySelector('.info-window-content .info-content');
        const content = infoData[name].content;
        if (Array.isArray(content)) {
          renderInfoContent(content, parent);
        } else {
          parent.innerHTML = content;
        }
      }, 0);
      openWindows[name] = win;
      win.el.addEventListener('remove', () => { delete openWindows[name]; });
      // Remove from openWindows on close
      const origClose = win.close.bind(win);
      win.close = function() { origClose(); delete openWindows[name]; };
    });
  });

  function playPluckTone(frequency, type = 'triangle') {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.type = type;
    oscillator.frequency.value = frequency;
    oscillator.connect(gain);
    gain.connect(context.destination);

    // simulate pluck: start loud, fade fast
    gain.gain.setValueAtTime(1.2, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.3);

    oscillator.start();
    oscillator.stop(context.currentTime + 0.3);
  }

  window.closeWindow = function(btn) {
    btn.closest('.info-window').style.display = 'none';
  };

  window.maximizeWindow = function(btn) {
    const win = btn.closest('.info-window');
    win.classList.toggle('maximized');
  };

  window.bringToFront = function(win) {
    document.querySelectorAll('.info-window').forEach(w => w.style.zIndex = 100);
    win.style.zIndex = 999;
  };

  document.querySelectorAll('.info-window').forEach(win => {
    const header = win.querySelector('.window-header');
    let isDragging = false, offsetX, offsetY;

    header.addEventListener('mousedown', e => {
      isDragging = true;
      offsetX = e.clientX - win.offsetLeft;
      offsetY = e.clientY - win.offsetTop;
      window.bringToFront(win);
    });

    document.addEventListener('mousemove', e => {
      if (isDragging) {
        win.style.left = `${e.clientX - offsetX}px`;
        win.style.top = `${e.clientY - offsetY}px`;
      }
    });

    document.addEventListener('mouseup', () => isDragging = false);
  });
}); 