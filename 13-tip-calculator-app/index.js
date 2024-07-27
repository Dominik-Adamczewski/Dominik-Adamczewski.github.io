const $billAmount = $('.input-component__input-field--bill');
const $numberOfPeople = $('.input-component__input-field--people');
const $regularPercentageGridElement = $('.percentage-grid__grid-element');
const $customPercentageGridElement = $('.percentage-grid__grid-element--custom');
const $customPercentageInputField = $('.percentage-grid__custom-input-field');
const $displayedTipPerPerson = $('#tipPerPerson');
const $displayedTotalPerPerson = $('#totalPerPerson');
const $resetButton = $('.button--reset');
const $percentageGrid = $('.percentage-grid');

let $chosenTipPercentage = null;

const $requiredValues = [$billAmount.val(), $numberOfPeople.val(), $chosenTipPercentage];

function areAllFieldsFilled() {
  if ($billAmount.val() && $numberOfPeople.val() && $chosenTipPercentage) {
    return true;
  }
  return false;
}

function validateTipPercentageInput() {
  if ($billAmount.val() && $numberOfPeople.val() && $chosenTipPercentage === null) {
    $percentageGrid.find('.input-component__error-msg').addClass('active').text('Choose tip percentage!');
  }

  if ($chosenTipPercentage > 100) {
    $percentageGrid.find('.input-component__error-msg').addClass('active').text('Tip % is invalid');
  }
}

function checkForErrors(inputField) {
  if (inputField.val() <= 0) {
    inputField.addClass('input-error');
    inputField.closest('.input-component').find('.input-component__error-msg').addClass('active');
  }
}

function clearErrorState(inputField) {
  if (inputField.hasClass('input-error')) {
    inputField.removeClass('input-error');
    inputField.closest('.input-component').find('.input-component__error-msg').removeClass('active');
  }
}

function getAmountsPerPerson(billAmount, numberOfPeople, tipPercentage) {
  const tipAmount = billAmount * (tipPercentage / 100);
  return {
    tipPerPerson: `$${Number(tipAmount / numberOfPeople).toFixed(2)}`,
    totalPerPersonAmount: `$${Number(billAmount / numberOfPeople).toFixed(2)}`
  };
}


function renderResults() {
  if (areAllFieldsFilled()) {
    const amountsObj = getAmountsPerPerson($billAmount.val(), $numberOfPeople.val(), $chosenTipPercentage);
    $displayedTipPerPerson.text(amountsObj.tipPerPerson);
    $displayedTotalPerPerson.text(amountsObj.totalPerPersonAmount);
  }
  return;
}

$regularPercentageGridElement.click(function() {
  $percentageGrid.find('.input-component__error-msg').removeClass('active');
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $chosenTipPercentage = null;
  } else {
    $regularPercentageGridElement.removeClass('active');
    $(this).addClass('active');
    $chosenTipPercentage = $(this).attr('data-val');
  }
});

$customPercentageGridElement.click(function() {
  $('.percentage-grid__custom-placeholder').text('');
  $customPercentageInputField.addClass('active').focus();
});

$customPercentageInputField.on('input', function() {
  $chosenTipPercentage = $(this).val();
});

$resetButton.click(function() {
  $displayedTipPerPerson.text('$0.00');
  $displayedTotalPerPerson.text('$0.00');
  $billAmount.val('');
  $numberOfPeople.val('');
  $regularPercentageGridElement.each(function() {
    $(this).removeClass('active');
  });
  $customPercentageGridElement.removeClass('active');
  $customPercentageInputField.removeClass('active');
  $('.percentage-grid__custom-placeholder').text('Custom');
});

$billAmount.on('focus blur', function(e) {
  if (e.type === 'focus') {
    clearErrorState($billAmount);
  } else {
    checkForErrors($billAmount);
  }
});

$numberOfPeople.on('focus blur', function(e) {
  if (e.type === 'focus') {
    clearErrorState($numberOfPeople);
  } else {
    checkForErrors($numberOfPeople);
  }
});

setInterval(() => {
  validateTipPercentageInput();
  if (areAllFieldsFilled()) {
    renderResults();
  }
}, 500);