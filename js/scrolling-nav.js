(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  
    function turnBlack() {
      setTimeout(function(){
        $("#mainNav").addClass("nav-black");
        $("#mainNav").removeClass("nav");
      }, 500);
    }
    function turnTransparent() {
      setTimeout(function(){
        $("#mainNav").addClass("nav");
        $("#mainNav").removeClass("nav-black");
      }, 500);
    }
    var position = $(window).scrollTop(); 

    // should start at 0

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if(scroll > position) {
            setTimeout(function(){
              $("#mainNav").addClass("nav-black");
              $("#mainNav").removeClass("nav");
            }, 300);
        } else if(scroll == 0) {
             $("#mainNav").addClass("nav");
             $("#mainNav").removeClass("nav-black");
        }
        position = scroll;
    });
  

})(jQuery); // End of use strict
