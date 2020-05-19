//открытие/закрытие главного меню
$(document).on('click', '.js-menu-toggler', function () {
  $(this).toggleClass("is-active");
  $('.header__menus').toggleClass('is-open');
  $('.header__user-link').toggle();
  $('.header__user-links-separate').toggle();
  /*if($(this).hasClass('is-active')) {
    bodyScrollLock.disableBodyScroll(targetElement);
  } else {
    bodyScrollLock.enableBodyScroll(targetElement);
  }*/
  return false;
});
