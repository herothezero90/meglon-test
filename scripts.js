/* eslint-disable no-undef */
$(document).ready(function () {
  function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  history.replaceState("", document.title, window.location.pathname + window.location.search);

  $(window).on('load', function() {
    window.scrollTo(0, 0);
  });

  // Animation Module
  const animationModule = {
    animateElements: function ($elements, className) {
      const observer = new IntersectionObserver(
        debounce(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              $(entry.target).addClass(className);
            }
          });
        }, 100),
        { threshold: 0.5 }
      );

      $elements.each(function () {
        observer.observe(this);
      });
    },
    init: function () {
      // const $cards = $(".animated-card");
      // const $sections = $(".animated-section");

      // this.animateElements($cards, "slide-up");
      // this.animateElements($sections, "slide-up");
    },
  };

  // Shop Button Module
  const shopButtonModule = {
    init: function () {
      $(".shop-button").on("click", function (event) {
        event.preventDefault();
        window.open("https://autofather.com/", "_blank");
      });
    },
  };

  // Navbar Collapse on Link Click
  const navbarCollapseModule = {
    init: function () {
      $('#collapsibleNavbar .nav-link').on('click', function () {
        $('#collapsibleNavbar').collapse('hide');
      });
    },
  };

  animationModule.init();    
  shopButtonModule.init();
  navbarCollapseModule.init();
});
