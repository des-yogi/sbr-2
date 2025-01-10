(function(){
  const review = new Swiper('.review__slider', {
    speed: 500,
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 32,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });
}());
