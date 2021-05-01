var callMenu = document.getElementsByClassName('menu');
var nav = document.getElementsByClassName('navigation');
var closeMenu = document.getElementsByClassName('close');



callMenu[0].onclick = function() {
    nav[0].classList.toggle("nav_active");
}

closeMenu[0].onclick = function() {
    nav[0].classList.remove("nav_active");
}


document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();
        nav[0].classList.remove("nav_active");
        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.scrollto').offsetHeight;

        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset - 30;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});


(function() {
    'use strict';
  
    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;
  
      if (scrolled > coords) {
        goTopBtn.classList.add('back_to_top-show');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('back_to_top-show');
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
      }
    }
  
    var goTopBtn = document.querySelector('.back_to_top');
  
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  })();