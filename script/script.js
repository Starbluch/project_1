$(document).ready(function() {
  $('.tabs-triggers__item').click(function(e) {
    e.preventDefault();

    $('.tabs-triggers__item').removeClass('tabs-triggers__item--active');
    $('.tabs-content__item').removeClass('tabs-content__item--active');

    $(this).addClass('tabs-triggers__item--active');
    $($(this).attr('href')).addClass('tabs-content__item--active');
  });

  $('.tabs-triggers__item:first').click();
});

let horizontScroll = document.querySelector('.gallery__content');
let right = document.getElementById('gallery__btn__right');
let left = document.getElementById('gallery__btn__left');
let itemWidth = 510;

function smoothScroll(element, target, duration) {
  let start = element.scrollLeft;
  let change = target - start;
  let currentTime = 0;
  let increment = 20;

  function animateScroll() {
    currentTime += increment;
    let val = Math.easeInOutQuad(currentTime, start, change, duration);
    element.scrollLeft = val;
    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  }
  animateScroll();
}

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

right.addEventListener('click', () => {
  smoothScroll(horizontScroll, horizontScroll.scrollLeft - itemWidth, 600);
  setTimeout(() => {
    if (horizontScroll.scrollLeft <= 0) {
      horizontScroll.scrollLeft += horizontScroll.scrollWidth / 2;
    }
  }, 600);
});

left.addEventListener('click', () => {
  smoothScroll(horizontScroll, horizontScroll.scrollLeft + itemWidth, 600);
  setTimeout(() => {
    if (horizontScroll.scrollLeft >= horizontScroll.scrollWidth / 2) {
      horizontScroll.scrollLeft -= horizontScroll.scrollWidth / 2;
    }
  }, 600);
});

// document.querySelectorAll('.gallery__item').forEach(img => {
//   img.onclick = () => {
//       document.querySelector('.gallery__video').style.display = 'block';
//       document.querySelector('.pop-up img').src = img.getAttribute('src');
      
//   };
// });
// document.querySelector('.gallery__video span').onclick = () => {
// document.querySelector('.gallery__video').style.display = 'none';
// };

// $(document).ready(function () {
//   $("a.scrollto").click (function() {
//     var elementClick = $(this).attr("href")
//     var destination = $(elementClick).offset().top;
//     jQuery("html:not(:animated),body:not(:animated)").animate({
//     scrollTop: destination
//   }, 1000);
//   return false;
//   });
// });

// document.addEventListener('DOMContentLoaded', (event) => {
//   document.querySelector('.gallery__video').style.display = 'none';
// });

document.addEventListener('DOMContentLoaded', (event) => {
  const firstImage = 'style/image/like_1.png'; 
  const secondImage = 'style/image/like_2.png'; 

  document.querySelectorAll('.toggleImage').forEach(img => {
      img.addEventListener('click', function() {
          img.src = img.src.includes(firstImage) ? secondImage : firstImage;
      });
  });

  let shopScroll = document.querySelector('.shop__content');
  let shopLeft = document.getElementById('shop__btn__right');
  let shopRight= document.getElementById('shop__btn__left');
  let itemWidth = 510;

  // Клонируем элементы галереи для создания бесконечного эффекта
  let shopItems = Array.from(shopScroll.children);
  shopItems.forEach(item => {
      let clone = item.cloneNode(true);
      shopScroll.appendChild(clone);
      clone = item.cloneNode(true);
      shopScroll.insertBefore(clone, shopScroll.firstChild);
  });

  function smoothScroll(element, target, duration) {
      let start = element.scrollLeft;
      let change = target - start;
      let currentTime = 0;
      let increment = 20;

      function animateScroll() {
          currentTime += increment;
          let val = Math.easeInOutQuad(currentTime, start, change, duration);
          element.scrollLeft = val;
          if (currentTime < duration) {
              requestAnimationFrame(animateScroll);
          }
      }
      animateScroll();
  }

  Math.easeInOutQuad = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
  };

  shopRight.addEventListener('click', () => {
      smoothScroll(shopScroll, shopScroll.scrollLeft + itemWidth, 600);
      setTimeout(() => {
          if (shopScroll.scrollLeft >= shopScroll.scrollWidth / 2) {
              shopScroll.scrollLeft -= shopScroll.scrollWidth / 2;
          }
      }, 600);
  });

  shopLeft.addEventListener('click', () => {
      smoothScroll(shopScroll, shopScroll.scrollLeft - itemWidth, 600);
      setTimeout(() => {
          if (shopScroll.scrollLeft <= 0) {
              shopScroll.scrollLeft += shopScroll.scrollWidth / 2;
          }
      }, 600);
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const images = Array.from(track.children);
  const imageWidth = images[0].getBoundingClientRect().width + 20; 
  let currentTranslateX = 0; 
  const scrollSpeed = 0.8; 

  let lastTimestamp = 0;

  function scrollCarousel(timestamp) {
    if (!lastTimestamp) lastTimestamp = timestamp;
    const deltaTime = timestamp - lastTimestamp;

    if (deltaTime > 60) { 
      currentTranslateX -= scrollSpeed;
      track.style.transform = `translateX(${currentTranslateX}px)`;

      const firstImage = track.firstElementChild;
      const rect = firstImage.getBoundingClientRect();

      if (rect.right <= 0) {
        track.appendChild(firstImage);
        currentTranslateX += imageWidth; 
      }

      if (currentTranslateX <= -imageWidth * images.length) {
        currentTranslateX = 0;
        track.style.transform = `translateX(${currentTranslateX}px)`;
      }

      lastTimestamp = timestamp;
    }

    requestAnimationFrame(scrollCarousel);
  }

  // Запуск анімації
  requestAnimationFrame(scrollCarousel);
});

// плавный скролл
$(document).ready(function () {
  $("a.scrollto").click(function (event) {
    event.preventDefault(); 
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $("html, body").animate({
      scrollTop: destination
    }, 1000);
  });
});

document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector('.pop-up').style.display = 'none';
});