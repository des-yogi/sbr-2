(function(){
  const gallerySlider = new Swiper('.gallery-modal__img-container', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    //allowTouchMove: false,
    // on: {
    //   init: initBeforeAfterSliders, // Вызываем функцию инициализации при загрузке Swiper
    //   slideChange: initBeforeAfterSliders, // Повторяем инициализацию при смене слайда
    // },
  });
}());
