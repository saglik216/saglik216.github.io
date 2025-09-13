$(document).ready(function(){
  $(".mobile-app").slick({
    autoplay: true,
    fade: true,
    dots: false,
    arrows: false
  });

  $(".text-slider").slick({
    autoplay: true,
    fade: true,
    dots: false,
    arrows: false
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });

  // scroll body to 0px on click
  $('#back-to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 400);
    return false;
  });

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    // Assign active class to nav links while scrolling
    $('.py-5, .bg-light').each(function(i) {
      if ($(this).position().top <= scrollDistance) {
        $('.navbar-nav a.active').removeClass('active');
        $('.navbar-nav a').eq(i).addClass('active');
      }
    });
  }).scroll();
});