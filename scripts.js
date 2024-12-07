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

  // Remove any hash from the URL on page load to ensure we start at the top
  history.replaceState("", document.title, window.location.pathname + window.location.search);

  // Ensure the window is scrolled to the top after load
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
      // Originally, we had:
      // const $cards = $(".animated-card");
      // const $sections = $(".animated-section");

      // Calls like:
      // this.animateElements($cards, "slide-up");
      // this.animateElements($sections, "slide-up");

      // We are removing these calls to prevent about us and cards from animating.
      // Now no elements are animated by this module.
    },
  };

  // Shop Button Module
  const shopButtonModule = {
    init: function () {
      $(".shop-button").on("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
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

  // Initialize all modules
  animationModule.init();    // No animations are triggered now for cards or about us
  shopButtonModule.init();
  navbarCollapseModule.init();
});
