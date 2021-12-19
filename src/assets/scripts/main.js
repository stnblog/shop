'use strict';

var $body = $("body");

$(document).ready(function () {
  $("a[href*='http://']:not([href*='" + location.hostname + "']),[href*='https://']:not([href*='" + location.hostname + "'])").attr('target', '_blank').addClass('blank');


  $('a[href^="#"]').on('click', function () {
    var href = $(this).attr('href');
    var position = $(href).offset().top;
    $('html, body').animate({
      'scrollTop': position
    }, 500);
    return false;
  })

  $('.js-draw__trigger').on('click', function () {
    $('.js-draw__trigger').toggleClass('is-active');
    $('.js-draw__content').toggleClass('is-active');
    $('body').toggleClass('is-lock');
  })

  	//  isotope
	//--------------------------------------------------------------------
  $('.js-gallery').isotope({
    itemSelector: '.js-filter-items'
  });
  var $gallery = $('.js-gallery , .gallery-mons').isotope();
  $('.js-filtering').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $gallery.isotope({
      filter: filterValue
    });
  });
  $('.js-filtering').on('change', function () {
    var filterValue = this.value;
    filterValue = filterFns[filterValue] || filterValue;
    $gallery.isotope({
      filter: filterValue
    });
  });
  var filterFns = {
    ium: function ium() {
      var name = $(this).find('.name').text();
      return name.match(/ium$/);
    }
  };
  $('.js-filtering').on('click', 'li', function () {
    $(this).addClass('is-active').siblings().removeClass('is-active');
  });
  $('.filters-select').on('change', function () {
    var filterValue = this.value;
    filterValue = filterFns[filterValue] || filterValue;
    $gallery.isotope({
      filter: filterValue
    });
  });
  $(function () {// $('.p-about__content .p-about__box').matchHeight();
  });


  $(function () {
    $('.js-modal-open').each(function () {
      $(this).on('click', function () {
        $('.l-modal').fadeIn();
        var target = $(this).data('target');
        var modal = document.getElementById(target);
        $(modal).fadeIn();
        $('body').addClass('is-lock');


      });
    });
    $('.js-modal-close').on('click', function () {


      $('.l-modal').fadeOut();
      $('.js-modal').fadeOut();
      $('body').removeClass('is-lock');

    });
  });
});


document.addEventListener('DOMContentLoaded', function () {

  {
    const tabTriggers = document.querySelectorAll('.js-tab--trigger');
    const tabContents = document.querySelectorAll('.js-tab--content');

    tabTriggers.forEach(trigger => trigger.addEventListener('click', e => {
      e.preventDefault();

      tabTriggers.forEach(trigger => trigger.classList.remove('is-active'));
      trigger.classList.add('is-active');

      tabContents.forEach(content => content.classList.remove('is-active'));
      document.getElementById(trigger.dataset.tab).classList.add('is-active');

    }))
  }

  {

    const accSingleTriggers = document.querySelectorAll('.js-acc--trigger');

    accSingleTriggers.forEach(trigger => trigger.addEventListener('click', toggleAccordion));

    function toggleAccordion() {
      const items = document.querySelectorAll('.js-acc--content');
      const thisItem = this.parentNode;

      items.forEach(item => {
        if (thisItem == item) {
          thisItem.classList.toggle('is-active');
          return;
        }
        item.classList.remove('is-active');
      });
    }

  }







  {
    const el = document.querySelectorAll('.inview');
    const els = Array.prototype.slice.call(el);

    const cb = function (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-anim');
        } else {
          // entry.target.classList.remove('is-anim');
        }
      });
    }

    const options = {
      root: null,
      rootMargin: '-20% 0px',
      threshold: 0
    };
    const io = new IntersectionObserver(cb, options);
    els.forEach(el => io.observe(el));
  }

  {
    const el = document.querySelectorAll('.js-first-view');
    const els = Array.prototype.slice.call(el);
    const header = document.getElementById('js-header');

    const options = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0
    };
    const observer = new IntersectionObserver(callback, options);
    els.forEach((el) => {
      observer.observe(el);
    });

    function callback(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          header.classList.add('is-active');
        } else {
          header.classList.remove('is-active');
        }
      });
    }

  }

  {
    const el = document.querySelectorAll('.animate-heading');
    const els = Array.prototype.slice.call(el);

    const cb = function (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          entry.target.classList.add('inview');
          // setTimeout(() => {
          // }, 600);
        } else {
          // entry.target.classList.remove('inview');
        }
      });
    }

    const options = {
      root: null,
    };

    const io = new IntersectionObserver(cb, options);
    els.forEach(el => io.observe(el));

    for (let el of els) {
      const chars = el.innerHTML.trim().split("");

      el.innerHTML = chars.reduce((acc, curr) => {
        curr = curr.replace(/\s+/, '&nbsp;');
        return `${acc}<span class="char">${curr}</span>`;
      }, "");
    }
  }

});
