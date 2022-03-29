const body = document.querySelector('body'),
   header = document.querySelector('header'),
   burgerButton = document.querySelector('.header__burger'),
   menuNav = document.querySelector('.header__nav'),
   links = document.querySelectorAll('.header__link');

window.addEventListener('scroll', function () {
   if (window.scrollY > 400) {
      header.classList.add('scroll');
   } else {
      header.classList.remove('scroll');
   }
});

const closeMenuNav = () => {
   burgerButton.classList.remove('active');
   menuNav.classList.remove('active');
   body.classList.remove('lock');
};

document.addEventListener('click', function (e) {
   if (!e.target.closest('.header__list, .header__burger')) {
      closeMenuNav();
   }
});

burgerButton.addEventListener('click', function (e) {
   burgerButton.classList.toggle('active');
   menuNav.classList.toggle('active');
   body.classList.toggle('lock');
});

links.forEach((link) => {
   link.addEventListener('click', function (e) {
      closeMenuNav();
   });
});

$(function () {
   $('a[href^="#"].header__link').click(function (event) {
      var target = $(this).attr('href');
      $('html, body').animate({ scrollTop: $(target).offset().top - 100 }, 800);
      return false;
   });
});
