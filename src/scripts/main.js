'use strict';

const phoneLink = document.querySelector('.top__phone-img');
const phoneTooltip = document.querySelector('.top__phone-tooltip');

phoneLink.addEventListener('mouseenter', function() {
  phoneTooltip.classList.remove('top__phone-tooltip--hover');
});

phoneLink.addEventListener('mouseleave', function() {
  phoneTooltip.classList.add('top__phone-tooltip--hover');
});
