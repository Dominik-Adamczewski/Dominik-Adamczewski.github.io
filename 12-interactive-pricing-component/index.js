const sliderInput = document.querySelector('.pricing-component__slider');
const price = document.querySelector('.pricing-component__price');
const ctaButton = document.querySelector('.pricing-component__cta-button');
const yearlyPricingBadge = document.querySelector('.pricing-component__yearly-pricing-badge');
let currentWindowWidth = window.innerWidth;

function updatePrice(sliderPrice) {
  price.innerHTML = '';
  price.innerHTML = `$${price.innerHTML}${sliderPrice}.00`;
}

function updateWindowWidth() {
  currentWindowWidth = window.innerWidth;
}

function getYearlyPricingBadge() {
  if (currentWindowWidth >= 1024) {
    return '25% discount';
  } else {
    return '-25%';
  }
}

updatePrice(sliderInput.value);

window.addEventListener('load', () => {
  yearlyPricingBadge.textContent = getYearlyPricingBadge();
});

window.addEventListener('resize', () => {
  updateWindowWidth();
  yearlyPricingBadge.textContent = getYearlyPricingBadge();
});

sliderInput.addEventListener('input', function () {
  updatePrice(sliderInput.value);
});

ctaButton.addEventListener('click', function () {
  alert('Thanks for choosing our product! Page will reload now...');
  location.reload();
});