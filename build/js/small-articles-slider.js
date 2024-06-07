$(document).ready(function () {
  $('.js-small-articles-slider').each(function() {
    var arrowsContainer = $(this).closest('.small-articles').find('.small-articles__arrows');

    $(this).slick({
      auto: false,
      mobileFirst: true,
      slidesToShow: 2,
      infinite: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev slick-arrow" title="Назад"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#slider_arrow_left"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next slick-arrow" title="Вперед"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#slider_arrow_right"/></svg></button>',
      appendArrows: arrowsContainer,
      dots: false,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 1899,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5
          }
        }
      ]
    });
  });

  //удаление клонов фенси в слайдерах
  $('.slick-cloned [data-fancybox]').each(function() {
    var attr = $(this).attr('data-fancybox');
    $(this).removeAttr('data-fancybox').attr('data-fancybox-trigger', attr);
  });
});
