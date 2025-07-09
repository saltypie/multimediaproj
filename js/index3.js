// JavaScript for index3.html (Okinawan Cultural Map)

document.addEventListener('DOMContentLoaded', function () {
  const content = [
    { title: "Maritime Crossroads: Traditional Fishing Culture and the Uminchu", 
      text: `
              <br>
              <h3>Maritime Geography and Culture</h3>
              <p>Okinwa consists of a rugged geography surrounded by reefs and the Kuroshio current. An abundance of marine life makes fishing a key part of traditional culture.</p>
              <p>Uminchi(Seafolk) culture developed as a result of deep intuitive knowledge of tides, lunar phases, reefs and weather patterns.</p>
              
              <br>
              <h3>The Sabani Traditional Boat</h3>
              <p>The Sabani is a traditional seacraft that originally developed from dugout canoes. It's sail allows for flexible manouevers in windy or calm seas.</p>
              <p>Okinawa's exposure to typhoons affected the design of the boat allowing for sailing in harsh conditions</p>

              <figure>
                <img src="https://visitokinawajapan.com/wp-content/uploads/2022/10/st442_01_sabani-traditional-fishing-boat.webp" alt="Image description">
                <figcaption>Three men on a Sabani boat, Courtesy of visitokinawajapan.com</figcaption>
              </figure>
              <br>
              <figure>
                <img src="https://s3-ap-northeast-1.amazonaws.com/thegate/2019/09/04/13/59/34/Sabani-of-Itoman-Hagi.JPG" alt="Image description">
                <figcaption>A Sabani boat, Courtesy of The Gate</figcaption>
              </figure>
              <br>
              <p>Boat races are a common cultural practice such as the Haari boat race</p>
            ` 
    },
    { title: "Subtropical Climate: Foodways and Longevity", text: `
              <br>
              <h3>Traditional Attire: Kariyushi Shirts</h3>
              <p>As a result of the weather attire such as Karyushi shirts are worn to work, this was promoted under the Cool Biz initiative</p>
              
              <figure>
                <img src='https://p.potaufeu.asahi.com/b952-p/picture/27584576/03c7fde06199bf7fdfe7aab101bfd20f.jpg' alt='Okinawan Dish' class='info-img'>
                <figcaption>Cabinet Members and former PM Kishida wear Kariyushi to a cabinet meeting, Courtesy of potaufeu.asahi.com</figcaption>
              </figure>
              
              <br>
              <h3>Local Produce and Agriculture</h3>
              <p>Subtropical climate with year-round warmth and abundant rainfall supports diverse local produce—purple sweet potatoes (murasaki imo), goya (bitter melon), seaweeds like mozuku, and tropical fruits like shikuwasa and acerola.</p>
              
              <figure>
                <img src="https://blackgirlseat.com/wp-content/uploads/2022/03/Untitled-design-3-1024x1024.png" alt="Purple Sweet Potatoes" class="info-img">
                <figcaption>Purple sweet potatoes (murasaki imo), Courtesy of blackgirlseat.com</figcaption>
              </figure>
              
              <p>Sweet potatoes became the main calorie source due to their resilience in harsh soils and typhoons—replacing rice—and are low glycemic with high fiber, antioxidants (vitamins A, C, E), potassium—contributing to healthy blood pressure and reduced chronic disease.</p>
              
              <figure>
                <img src="https://www.justonecookbook.com/wp-content/uploads/2024/04/Goya-Champuru-2682-I.jpg" alt="Goya Champuru" class="info-img">
                <figcaption>Goya (bitter melon) champuru, Courtesy of justonecookbook.com</figcaption>
              </figure>
              
              <br>
              <h3>Longevity and Health</h3>
              <p>Okinawans exhibit exceptional healthspan, with many living active lives into their 90s; benefit from favorable genes (lower APOE4, presence of longevity-linked gene FOXO3) influenced by the islands' relative isolation.</p>
              
              <figure>
                <img src="https://i.natgeofe.com/n/0d7b6a61-ccee-46c6-9bfa-3ba4b73084cb/41553.jpg" alt="Okinawan Longevity" class="info-img">
                <figcaption>Okinawan centenarians, Courtesy of nationalgeographic.com</figcaption>
              </figure>
              
              <p>Hara hachi bu, the Confucian practice of eating until 80% full, naturally limits caloric intake and supports metabolic health.</p>
            ` },
    { title: "Architecture and Planning: Built for Typhoons", text: `
              <br>
              <h3>Coral Stone Walls (Hinpun)</h3>
              <p>The presence of limestone and coral led to the development of coral stone walls surrounding homes. Known as Hinpun screens these shield against harsh winds from typhoons.</p>
              
              <figure>
                <img src="https://amakuma.ryukyu/wp-content/uploads/2023/04/culture_hinpun-1-1024x683.jpg" alt="Hinpun Screen" class="info-img">
                <figcaption>Hinpun coral stone wall, Courtesy of amakuma.ryukyu</figcaption>
              </figure>
              
              <br>
              <h3>Red Tiled Roofs</h3>
              <p>Red tiled roofs are securely placed to avoid being lifted up during typhoons.</p>
              
              <figure>
                <img src="https://thumb.photo-ac.com/b1/b1f32100f584efbe22ca864b42e13c9e_t.jpeg" alt="Red Tiled Roofs" class="info-img">
                <figcaption>Red tiled roofs, Courtesy of photo-ac.com</figcaption>
              </figure>
            ` },
    { title: "Spiritual Traditions: Nature Worship and Festivals", content: [
        { type: 'text', text: '<p>Utaki, sacred natural sites, are central to communal and royal religious life. Many are groves, springs, or caves, located near villages, on cliffside ridges.</p>' },
        { type: 'carousel', items: [
            { type: 'image', src: 'https://www.japan-guide.com/g18/7124_top.jpg', alt: 'Sefa Utaki' },
            { type: 'text', text: '<p><strong>Sefa Utaki:</strong> Courtesy of japan-guide.com</p>' },
            { type: 'image', src: 'https://upload.wikimedia.org/wikipedia/commons/4/42/The_distant_view_of_Naminoueg%C5%AB_Honden.jpg', alt: 'Naminoue Shrine' },
            { type: 'text', text: '<p><strong>Naminoue Shrine:</strong> Courtesy of wikimedia.org</p>' },
            { type: 'image', src: 'https://travel67.com/wp-content/uploads/2016/03/60645z0240se9002.jpg?w=960', alt: 'Priestesses' },
            { type: 'text', text: '<p><strong>Priestesses:</strong> Courtesy of travel67.com</p>' }
          ], width: 600, height: 400
        }
      ]
    },
    { title: "Flora: Okinawan Blossoms and Biodiversity", text: `
              <br>
              <h3>Fukugi Tree (Garcinia subelliptica)</h3>
              <p>Traditionally planted as windbreaks around Okinawan homes. They symbolise protection and longevity.</p>
              
              <figure>
                <img src="https://static.gltjp.com/glt/data/directory/16000/15394/20240124_123822_9bb3429b_w1920.webp" alt="Fukugi Tree" class="info-img">
                <figcaption>Fukugi Tree (Garcinia subelliptica), Courtesy of gltjp.com</figcaption>
              </figure>
              
              <br>
              <br>
              <h3>Shell Ginger</h3>
              <p>Used in traditional medicine and rice cakes.</p>
              
              <figure>
                <img src="https://www.taiwan-panorama.com/Image/Resize/V1/Uploads/2025/02/fab862a9-784d-43b2-8868-e852c6c0b712/4-1.JPG?w=1080&mode=crop&format=webp&quality=80" alt="Shell Ginger" class="info-img">
                <figcaption>Shell Ginger, Courtesy of taiwan-panorama.com</figcaption>
              </figure>
            ` },
    { title: "Fauna: Island Wildlife and Identity", text: `
              <br>
              <h3>Okinawa Rail (Yanbaru Kuina) - Found only in the forests of northern Okinawa (Yanbaru).</h3>
              <p>Status: Threatened.</p>
              <p>Iconic status: Mascot for conservation; even featured in souvenirs and festivals.</p>
              
              <figure>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/79/Okinawa_Rail_imported_from_iNaturalist_photo_388492786_on_12_June_2024.jpg" alt="Okinawa Rail" class="info-img">
                <figcaption>Okinawa Rail (Yanbaru Kuina), Courtesy of wikimedia.org</figcaption>
              </figure>
              <br>
              <br>
              <h3>Clownfish - Habitat: Common around coral reefs.</h3>
              
              <figure>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Amphiprion_ocellaris_%28Clown_anemonefish%29_by_Nick_Hobgood.jpg/1200px-Amphiprion_ocellaris_%28Clown_anemonefish%29_by_Nick_Hobgood.jpg" alt="Clownfish" class="info-img">
                <figcaption>Clownfish, Courtesy of wikimedia.org</figcaption>
              </figure>
            ` }
  ];

  const openWindows = {};
  document.querySelectorAll('.icon').forEach((icon, index) => {
    icon.addEventListener('click', () => {
      if (openWindows[index]) {
        openWindows[index].bringToFront();
        return;
      }
      const win = new InfoWindow({
        title: content[index].title,
        content: '<div class="info-content"></div>',
        x: window.innerWidth/2 - 180 + Math.random()*60,
        y: window.innerHeight/3 + Math.random()*40
      });
      setTimeout(() => {
        const parent = win.el.querySelector('.info-window-content .info-content');
        const contentData = content[index];
        if (contentData.content && Array.isArray(contentData.content)) {
          renderInfoContent(contentData.content, parent);
        } else {
          parent.innerHTML = contentData.text || '';
        }
      }, 0);
      openWindows[index] = win;
      win.el.addEventListener('remove', () => { delete openWindows[index]; });
      // Remove from openWindows on close
      const origClose = win.close.bind(win);
      win.close = function() { origClose(); delete openWindows[index]; };
    });
  });
}); 