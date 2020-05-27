//функция навешивания класса на шапку
var resize_scroll = function(e) {
  var h = $(".header");
  if($(window).scrollTop() > 1) {
    h.addClass("scrolled");
  } else {
    h.removeClass("scrolled");
  }
};

//одинаковая высота блоков в таблице описания
function equalHeight(selector){
	var tallest = 0;
	$(selector).each(function() {
		var thisHeight = $(this).height();
		if(thisHeight > tallest) {
			tallest = thisHeight;
		}
	});
	$(selector).height(tallest);
}

$(document).ready(function () {
  //запуск функции навешивания класса на шапку
  resize_scroll();

  //одинаковая высота блоков в таблице описания
  if($('body').width() > 1260) {
    equalHeight('.catalog-description td');
  }

  //кастомный скролл
  $('.js-custom-scroll').each(function(index, element) {
    new SimpleBar(element, { autoHide: false })
  });

  //слайдер картинок
  if ($('.js-slider').length) {
    $('.js-slider').each(function (index, value) {

      var slickElement = $(this);

      var status = slickElement.parent().find('.js-slider-count');

      var nav = slickElement.parent().find('.js-slider-nav');

      slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        var sum = slick.slideCount;
        if(i < 10) {
          i = '0' + i;
        }

        if(sum < 10) {
          sum = '0' + sum;
        }

        status.html('<span class="slider-block__counter-current">'+i+'</span>' + ' <span class="slider-block__counter-separator">/</span> <span class="slider-block__counter-all"> ' + sum + '</span>');
      });

      slickElement.slick({
        auto: false,
        mobileFirst: true,
        slidesToShow: 1,
        infinite: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev slick-arrow" title="Назад"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#slider_arrow_left"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow" title="Вперед"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#slider_arrow_right"/></svg></button>',
        appendArrows: nav,
        dots: false,
        variableWidth: true
      });
    });
  }

  //запуск плавающего левого меню в разделе доставки
  if ($(".js-sticky-block").length) {
    if ($("body").width() >= 1280) {
      $(".js-sticky-block").trigger("sticky_kit:detach");
      setTimeout(function() {
        $(".js-sticky-block").stick_in_parent({
          offset_top: 170
        });

        //навигация по якорям
        if ($(".js-scroll-spy").length) {
          $(".js-scroll-spy").ddscrollSpy({
            scrolltopoffset: -170
          });
        }
      }, 100);
    }

    //если блок для контента пустой, открепляем плавающее левое меню
    if ($(".js-content-with-sticky").length) {
      if ($('.js-content-with-sticky').html().trim() === '') {
        $(".js-sticky-block").trigger("sticky_kit:detach");
      }
    }
  }
});

//перезапуск функции навешивания класса на шапку при скролле и ресайзе
$(window).on("scroll", resize_scroll).on("resize", resize_scroll);

//открытие/закрытие главного меню
var targetElement = $('.header__menus');

$(document).on('click', '.js-menu-toggler', function () {
  $(this).toggleClass("is-active");
  $('.header__menus').toggleClass('is-open');
  $('.header__user-link').toggle();
  $('.header__user-links-separate').toggle();
  if($(this).hasClass('is-active')) {
    bodyScrollLock.disableBodyScroll(targetElement);
  } else {
    bodyScrollLock.enableBodyScroll(targetElement);
  }
  return false;
});

//открепляем и перезапускаем прилипающий блок при резайзе
$(window).resize(function() {
  if ($(".js-sticky-block").length) {
    if ($("body").width() >= 1280) {
      $(".js-sticky-block").trigger("sticky_kit:detach");
      setTimeout(function() {
        $(".js-sticky-block").stick_in_parent({
          offset_top: 170
        });

        //навигация по якорям в новости
        if ($(".js-scroll-spy").length) {
          $(".js-scroll-spy").ddscrollSpy({
            scrolltopoffset: -170
          });
        }
      }, 100);
    }
  }

  if($('body').width() > 1260) {
    equalHeight('.catalog-description td');
  }
});

//открепляем и перезапускаем прилипающий блок при повороте устройства
$(window).on("orientationchange", function(event) {
  if ($(".js-sticky-block").length) {
    if ($("body").width() >= 1280) {
      $(".js-sticky-block").trigger("sticky_kit:detach");
      setTimeout(function() {
        $(".js-sticky-block").stick_in_parent({
          offset_top: 170
        });

        //навигация по якорям в новости
        if ($(".js-scroll-spy").length) {
          $(".js-scroll-spy").ddscrollSpy({
            scrolltopoffset: -170
          });
        }
      }, 100);
    }
  }

  if($('body').width() > 1260) {
    equalHeight('.catalog-description td');
  }
});

//кнопка наверх в каталоге
$(document).on('click', '.js-go-top', function () {
  $('html, body').animate({scrollTop:0}, '300');
  return false;
});

$(document).on('click', '.js-catalog-view', function () {
  $('.js-catalog-view').removeClass('is-active');
  $(this).addClass('is-active');
  $('.catalog-list').removeClass('catalog-list--type_1').removeClass('catalog-list--type_2').removeClass('catalog-list--type_3');
  $('.catalog-list').addClass($(this).attr('data-target'));
  return false;
});
