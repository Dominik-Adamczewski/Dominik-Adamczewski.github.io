const sliderInput = document.querySelector('.pricing-component__slider');
const price = document.querySelector('.pricing-component__price');
const ctaButton = document.querySelector('.pricing-component__cta-button');

function updatePrice(sliderPrice) {
  price.innerHTML = '';
  price.innerHTML = `$${price.innerHTML}${sliderPrice}.00`;
}

updatePrice(sliderInput.value);

sliderInput.addEventListener('input', function () {
  updatePrice(sliderInput.value);
});

ctaButton.addEventListener('click', function () {
  alert('Thanks for choosing our product! Page will reload now...');
  location.reload();
});