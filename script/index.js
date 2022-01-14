const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  speed: 800,
  effect: 'fade',


  fadeEffect: {
    crossFade: true,
  },

  pagination: {
  el: '.swiper-pagination',
  clickable: true
  },

  autoplay: {
    delay: 5000,
  },

  a11y: {
    paginationBulletMessage: 'Перейти на {{index}} слайд',
  },

  });


window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.how-we-work__link').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;
      document.querySelectorAll('.how-we-work__link').forEach(function(btn){
        btn.classList.remove('how-we-work__link-active')
      })
      e.currentTarget.classList.add('how-we-work__link-active');
      document.querySelectorAll('.how-we-work__tab').forEach(function(tabsBtn) {
        tabsBtn.classList.remove('how-we-work__tab-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('how-we-work__tab-active')
    })
  })
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('header__for-mobile_active')
  })
  document.querySelector('#burger-close').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('header__for-mobile_active')
  })

  document.querySelector('#search-btn').addEventListener('click', function() {
    document.querySelector('#search').classList.toggle('header__search-active')
  })

  document.querySelector('#search-btn_close').addEventListener('click', function() {
    document.querySelector('#search').classList.toggle('header__search-active')
  })
})

$(".accordion").accordion(
  {
    heightStyle: "content",
    active: false,
    collapsible: true
  }
);
