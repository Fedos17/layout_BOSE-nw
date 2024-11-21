'use strict';

// document.addEventListener('DOMContentLoaded', function() {
//   const carousel = document.querySelector('.carousel');
//   const prev = document.querySelector('.car-prev');
//   const next = document.querySelector('.car-next');

//   // eslint-disable-next-line no-undef
//   const flkty = new Flickity(carousel, {
//     cellAlign: 'left',
//     contain: true,
//     autoPlay: true,
//     prevNextButtons: false,
//   });

//   prev.addEventListener('click', function() {
//     flkty.previous();
//   });

//   next.addEventListener('click', function() {
//     flkty.next();
//   });
// });

const phoneLink = document.querySelector('.top__phone-img');
const phoneTooltip = document.querySelector('.top__phone-tooltip');

phoneLink.addEventListener('mouseenter', function() {
  phoneTooltip.classList.remove('top__phone-tooltip--hover');
});

phoneLink.addEventListener('mouseleave', function() {
  phoneTooltip.classList.add('top__phone-tooltip--hover');
});
