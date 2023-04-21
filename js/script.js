

const writerSwiper = new Swiper('.myWriterSwiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: ' .swiper-button-next ',
    prevEl: ' .swiper-button-prev',
  },

});



const swiper1 = new Swiper('.mySwiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },


  // Navigation arrows
  navigation: {
    nextEl: ' .swiper-button-next ',
    prevEl: ' .swiper-button-prev',
  },
});