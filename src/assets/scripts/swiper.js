// options
//  effect: 'slide',
//  slidesPerView: '1',
//  loop: true,
//  loopAdditionalSlides: 1,
//  touchEventsTarget: true,
//  centeredSlides: true,
//  spaceBetween: 10,


const elmIndexSwiper = document.querySelectorAll('.js-index-slider');
const elmIndexScroll = document.querySelectorAll('.js-slider-scrollbar');

if (elmIndexSwiper.length > 0) {
  for (let i = 0; i < elmIndexSwiper.length; i++) {

    elmIndexSwiper[i].className += i;
    elmIndexScroll[i].className += i;

    var indexSwiper = new Swiper('.js-index-slider' + i, {
      slidesPerView: 'auto',
      grabCursor: true,
      // touchEventsTarget: true,
      // loop: true,
      //  freeMode: true,
    //   mousewheel: {
    //     invert: false,
    // },
      scrollbar: {
        el: '.js-slider-scrollbar' + i,
        hide: false,
        draggable: true,
        dragClass: 'drag',
        dragSize: 'auto',
        snapOnRelease: false
      },
    });
  }
}


const heroSwiper = new Swiper('.l-hero__slider', {
  loop: true,
  slidesPerView: 'auto',
  grabCursor: true,
  touchEventsTarget: true,
  centeredSlides: true,
  loopAdditionalSlides: 1,
});



var productThumb = null;
var productMain = null;

var createSwiper = function createSwiper() {

  var productThumbOption = {
    spaceBetween: 2,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    wrapperClass: "p-product__wrap--thumbs",
    slideClass: "p-product__thumb",
    // slideActiveClass: "hotel__slide--active"
  };
  productThumb = new Swiper('.p-product__thumbs', productThumbOption);


  var productMainOption = {
    effect: "fade",
    thumbs: {
      swiper: productThumb
    }
  };
  productMain = new Swiper('.p-product__slider', productMainOption);

};

createSwiper();
