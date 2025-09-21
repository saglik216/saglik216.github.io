$(document).ready(function(){

  // --- THEME SWITCHER LOGIC ---
  const themeToggle = document.querySelector('#theme-toggle');
  const htmlEl = document.documentElement;

  const getTheme = () => {
    const theme = localStorage.getItem('theme');
    if (theme) return theme;

    // If no preference, check OS preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  const setTheme = (theme) => {
    localStorage.setItem('theme', theme);
    htmlEl.setAttribute('data-bs-theme', theme);

    // Update icon
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  }

  // Initial theme set
  const initialTheme = getTheme();
  setTheme(initialTheme);

  themeToggle.addEventListener('click', (e) => {
    e.preventDefault();
    const currentTheme = htmlEl.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });

  // Listen for OS theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const newTheme = e.matches ? "dark" : "light";
    setTheme(newTheme);
  });


  // --- SLIDER LOGIC ---
  var mobileSlider = $(".mobile-app");
  mobileSlider.slick({
    autoplay: true,
    fade: true,
    dots: false,
    arrows: false
  });

  function updateActiveFeature(index) {
    $('.feature-indicator').removeClass('active');
    $('.feature-indicator[data-slide-index="' + index + '"]').addClass('active');
  }

  updateActiveFeature(0);

  $('.feature-indicator').on('click', function() {
    var slideIndex = $(this).data('slide-index');
    mobileSlider.slick('slickGoTo', slideIndex);

    if ($(window).width() < 992) {
      $('html, body').animate({
        scrollTop: mobileSlider.offset().top - 70
      }, 400);
    }
  });

  mobileSlider.on('afterChange', function(event, slick, currentSlide){
    updateActiveFeature(currentSlide);
  });


  // --- SCROLL FUNCTIONS ---
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });

  $('#back-to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 400);
    return false;
  });

  $("a[href*='#']:not([href='#']) ").on('click', function(event) {
    if (this.hash !== "" && this.pathname === location.pathname) {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

});