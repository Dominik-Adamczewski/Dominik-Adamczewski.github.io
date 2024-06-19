const sliderInput = document.querySelector('.pricing-component__slider');
const price = document.querySelector('.pricing-component__price');
const ctaButton = document.querySelector('.pricing-component__cta-button');
const yearlyPricingBadge = document.querySelector('.pricing-component__yearly-pricing-badge');
const billingTypeCheckbox = document.querySelector('.pricing-component__billing-checkbox');
const pricingType = document.querySelector('.pricing-component__pricing-type');
const monthlyPricingTypeInfoLabel = document.querySelector('.pricing-component__pricing-type-info--monthly');
const yearlyPricingTypeInfoLabel = document.querySelector('.pricing-component__pricing-type-info--yearly');

let currentWindowWidth = window.innerWidth;
let isYearlyBillingSet = false;

function updatePrice(sliderPrice) {
  price.innerHTML = '';
  if (isYearlyBillingSet) {
    price.innerHTML = `$${price.innerHTML}${sliderPrice}`;
  } else {
    price.innerHTML = `$${price.innerHTML}${sliderPrice}.00`;
  }
}

function highlightChosenPricing() {
  if (isYearlyBillingSet) {
    monthlyPricingTypeInfoLabel.classList.remove('chosen');
    yearlyPricingTypeInfoLabel.classList.add('chosen');
  } else {
    yearlyPricingTypeInfoLabel.classList.remove('chosen');
    monthlyPricingTypeInfoLabel.classList.add('chosen');
  }
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

function toggleYearlyPricing() {
  isYearlyBillingSet = !isYearlyBillingSet;
}

function getDiscountedYearlyPricing() {
  const yearlyPricing = 32 * 12;
  return yearlyPricing * 0.9;  // 10% discount when buying yearly
}

function changePricingType() {
  const yearlyPricing = getDiscountedYearlyPricing();

  if (isYearlyBillingSet) {
    pricingType.textContent = '/ year';
    sliderInput.setAttribute('max', `${yearlyPricing * 6}`);
    sliderInput.setAttribute('min', yearlyPricing);
    sliderInput.setAttribute('value', yearlyPricing);
    sliderInput.setAttribute('step', yearlyPricing);
    updatePrice(yearlyPricing);
    highlightChosenPricing();
  } else {
    pricingType.textContent = '/ month';
    sliderInput.setAttribute('max', '32');
    sliderInput.setAttribute('min', '1');
    sliderInput.setAttribute('value', '1');
    sliderInput.setAttribute('step', '1');
    updatePrice('1');
    highlightChosenPricing();
  }
}

changePricingType();
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

billingTypeCheckbox.addEventListener('click', function () {
  toggleYearlyPricing();
  changePricingType();
});