const sliderInput = document.querySelector('.pricing-component__slider');
const price = document.querySelector('.pricing-component__price');
const ctaButton = document.querySelector('.pricing-component__cta-button');
const yearlyPricingBadge = document.querySelector('.pricing-component__yearly-pricing-badge');
const billingTypeCheckbox = document.querySelector('.pricing-component__billing-checkbox');
const pricingType = document.querySelector('.pricing-component__pricing-type');
const monthlyPricingTypeInfoLabel = document.querySelector('.pricing-component__pricing-type-info--monthly');
const yearlyPricingTypeInfoLabel = document.querySelector('.pricing-component__pricing-type-info--yearly');

let isYearlyBillingSet = false;

const maxPricePerMonth = 32;
const fullYearMonths = 12;
const discountForYearlyPrice = 0.1;
const sliderYearlyPricingSteps = 6;

const updatePrice = (sliderPrice) => {
  price.innerHTML = '';
  price.innerHTML = `$${price.innerHTML}${sliderPrice}.00`;
}

const highlightChosenPricing = () => {
  if (isYearlyBillingSet) {
    monthlyPricingTypeInfoLabel.classList.remove('chosen');
    yearlyPricingTypeInfoLabel.classList.add('chosen');
  } else {
    yearlyPricingTypeInfoLabel.classList.remove('chosen');
    monthlyPricingTypeInfoLabel.classList.add('chosen');
  }
}

const toggleYearlyPricing = () => {
  isYearlyBillingSet = !isYearlyBillingSet;
}

const changePricingType = () => {
  const yearlyPricing = (maxPricePerMonth * fullYearMonths) * (1 - discountForYearlyPrice);

  if (isYearlyBillingSet) {
    pricingType.textContent = '/ year';
    sliderInput.setAttribute('max', `${yearlyPricing * sliderYearlyPricingSteps}`);
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

sliderInput.addEventListener('input', () => {
  updatePrice(sliderInput.value);
});

ctaButton.addEventListener('click', () => {
  alert('Thanks for choosing our product! Page will reload now...');
  location.reload();
});

billingTypeCheckbox.addEventListener('click', () => {
  toggleYearlyPricing();
  changePricingType();
});