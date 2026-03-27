(function ($) {
  "use strict"; // Início do modo estrito

  // Rolagem suave usando jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Fecha o menu responsivo quando um link de rolagem é clicado
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Ativa scrollspy para adicionar classe ativa aos itens da barra de navegação ao rolar
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // Fim do modo estrito
