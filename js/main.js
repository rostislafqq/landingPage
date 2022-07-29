//слайдер
var swiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
//tabs 3 block
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.thirdblock--num').forEach(function (tabs) {
    tabs.addEventListener('click', function (tabs) {
      const tab = tabs.currentTarget.dataset.path;
      document.querySelectorAll('.thirdblock--tabContent').forEach(function (tabs) {
        tabs.classList.remove('thirdblock--tabContentActive');
        document
          .querySelector(`[data-target='${tab}']`)
          .classList.add('thirdblock--tabContentActive');
      });
    });
    tabs.addEventListener('click', function (tabs) {
      const tabD = tabs.currentTarget.dataset.default;
      document.querySelectorAll('.thirdblock--num').forEach(function (tabs) {
        tabs.classList.remove('thirdblock--activeNum');
        document.querySelector(`[data-default='${tabD}']`).classList.add('thirdblock--activeNum');
      });
    });
  });
  //acc 4 block
  document.querySelectorAll('.fourblok__accsvgs').forEach(function (acc) {
    acc.addEventListener('click', function (acc) {
      const ac = acc.currentTarget.dataset.acca;
      document.querySelectorAll('.fourblock--acContent').forEach(function (acc) {
        document.querySelector(`[data-cont='${ac}']`).classList.toggle('fourblock--acContentA');
        document.querySelector(`[data-cont='${ac}']`).classList.toggle('opacity1');
      });
    });
    acc.addEventListener('click', function (acc) {
      const svg = acc.currentTarget.dataset.acca;
      document.querySelectorAll('.fourblock__accsvg').forEach(function (acc) {
        document.querySelector(`[data-svg='${svg}']`).classList.toggle('fourblock__accsvgA');
      });
    });
  });
  /*бургер */
  const burLinks = document.getElementById('burgerCl');
  const bur = document.getElementById('burger');
  const burFrst = document.getElementById('brg--firstI');
  const burSecnd = document.getElementById('brg--secondI');
  const burThrd = document.getElementById('brg--thirdI');
  bur.addEventListener('click', function () {
    burLinks.classList.toggle('header__burgerTxtO');
    burFrst.classList.toggle('header__burgerItemF');
    burSecnd.classList.toggle('header__burgerItemS');
    burThrd.classList.toggle('header__burgerItemT');
  });

  //формы

  const form = document.querySelector('.js-form');
  const formInputs = document.querySelectorAll('.js-input');
  const email = document.querySelector('.js-input-email');
  const checkbox = document.querySelector('.checkbox');
  form.onsubmit = () => {
    formInputs.forEach((input) => {
      if (input.value === '') {
        input.classList.add('error');
        return false;
      } else {
        input.classList.remove('error');
      }
    });
    return false;
  };
});
