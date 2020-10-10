$(function() {

  $('body').removeClass('fade-out');

  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").slideToggle();
  });

  $(".has-dropdown").click(function() {
    $(this).toggleClass("is-active");
  });

  $("a.navbar-item").click(function() {
    if ($('.navbar-menu').css('display') == 'block') {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").slideToggle();
    }
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      if (!$('.navbar').hasClass('navvi')) {
        $('.navbar').addClass('navvi');
      }
    } else {
      if ($('.navbar').hasClass('navvi')) {
        $('.navbar').removeClass('navvi');
      }
    }
  });

  $('a[href*="#"]:not([href="#"])').click(function() {
    event.preventDefault()
    var offset = -80;
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top + offset
        }, 1000);
        return false;
      }
    }
  });

});
