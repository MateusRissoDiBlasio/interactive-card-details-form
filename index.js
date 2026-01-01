let nameInput = document.getElementById("nameInput");
let cardName = document.getElementById("cardName");

nameInput.addEventListener('input', function(e){
    cardName.textContent = e.target.value;
    nameInput.style.textTransform = 'capitalize';
    if(nameInput.value !== ''){
      nameErrorMsg.style.opacity = '0';
    }
});

nameInput.addEventListener('focusin', function(){
      nameInput.style.border = '1px solid transparent';
});
nameInput.addEventListener('focusout', function(){
    if(nameInput.value !== ''){
        nameInput.style.border = '1px solid hsl(270, 3%, 87%)';
        nameErrorMsg.style.opacity = '0';
    }
    if(nameInput.value === '' && nameErrorMsg.style.opacity === '1' ){
        nameInput.style.border = '1px solid red';
    }

    if(nameInput.value === '' && nameErrorMsg.style.opacity === '0'){
        nameInput.style.border = '1px solid hsl(270, 3%, 87%)';
    }
});


let cardNumberInput = document.getElementById("cardNumberInput");
let cardNumber = document.getElementById("cardNumber");

function isCardNumberEmpty(){
    if (cardNumberInput.value === ""){
        cardNumber.textContent = "0000 0000 0000 0000";
    }
    if(cardNumberInput.value !== ''){
      cardNumberErrorMsg.style.opacity = '0';
    }
}

cardNumberInput.addEventListener('input', function(e){
    cardNumber.textContent = e.target.value;
    isCardNumberEmpty();
});

cardNumberInput.addEventListener('keydown', function(e){
    
    if (e.key !== 'Backspace') {
        if (cardNumberInput.value.length > 0) {

            if (cardNumberInput.value.length == 4) {
                cardNumberInput.value += " ";
            }
            if (cardNumberInput.value.length == 9) {
                cardNumberInput.value += " ";
            }
            if (cardNumberInput.value.length == 14) {
                cardNumberInput.value += " ";
            }
        }
    }
});

cardNumberInput.addEventListener('focusin', function(){
      cardNumberInput.style.border = '1px solid transparent';
});
cardNumberInput.addEventListener('focusout', function(){

    if(cardNumberInput.value !== ''){
        cardNumberInput.style.border = '1px solid hsl(270, 3%, 87%)';
        cardNumberErrorMsg.style.opacity = '0';
    }
    if(cardNumberInput.value === '' && cardNumberErrorMsg.style.opacity === '1' ){
        cardNumberInput.style.border = '1px solid red';
    }

    if(cardNumberInput.value === '' && cardNumberErrorMsg.style.opacity === '0'){
        cardNumberInput.style.border = '1px solid hsl(270, 3%, 87%)';
    }

});

let cardNumberMonthInput = document.getElementById('cardNumberMonthInput');
let cardNumberYearInput = document.getElementById('cardNumberYearInput');
let expireMonth = document.getElementById('month');
let expireYear = document.getElementById('year');

cardNumberMonthInput.addEventListener('input', function(e){

    if (e.target.value.length > cardNumberMonthInput.maxLength) {
      e.target.value = e.target.value.slice(0, cardNumberMonthInput.maxLength);
    }
    
    if((cardNumberMonthInput.value !== '' && cardNumberYearInput.value !== '') && (cardNumberYearInput.value > 25 && cardNumberYearInput.value < 35) && ( cardNumberMonthInput.value > 0 && cardNumberMonthInput.value < 13)){
        ExpDateErrorMsg.style.opacity = '0';
    }
    if(cardNumberMonthInput.value !== 0){
      cardNumberMonthInput.style.border = '1px solid hsl(270, 3%, 87%);'
      expireMonth.textContent = e.target.value;
    }
    if(cardNumberMonthInput.value === ""){
      expireMonth.textContent = "00";
    }

});

cardNumberMonthInput.addEventListener('focusin', function(){
      cardNumberMonthInput.style.border = '1px solid transparent';
});
cardNumberMonthInput.addEventListener('focusout', function(){

    if(cardNumberMonthInput.value !== ''){
      cardNumberMonthInput.style.border = '1px solid hsl(270, 3%, 87%)';
    }
    if(cardNumberMonthInput.value === '' && ExpDateErrorMsg.style.opacity === '1' ){
        cardNumberMonthInput.style.border = '1px solid red';
    }

    if(cardNumberMonthInput.value === '' && ExpDateErrorMsg.style.opacity === '0'){
        cardNumberMonthInput.style.border = '1px solid hsl(270, 3%, 87%)';
    }
    
    if((cardNumberMonthInput.value !== '' && cardNumberYearInput.value !== '') && (cardNumberYearInput.value > 25 && cardNumberYearInput.value <= 35) && ( cardNumberMonthInput.value > 0 && cardNumberMonthInput.value < 13)){
        ExpDateErrorMsg.style.opacity = '0';
    }
});

cardNumberYearInput.addEventListener('focusin', function(){
      cardNumberYearInput.style.border = '1px solid transparent';
});
cardNumberYearInput.addEventListener('focusout', function(){
      cardNumberYearInput.style.border = '1px solid hsl(270, 3%, 87%)';

    if(cardNumberYearInput.value !== ''){
      cardNumberYearInput.style.border = '1px solid hsl(270, 3%, 87%)';
    }
    if(cardNumberYearInput.value === '' && ExpDateErrorMsg.style.opacity === '1' ){
        cardNumberYearInput.style.border = '1px solid red';
    }

    if(cardNumberYearInput.value === '' && ExpDateErrorMsg.style.opacity === '0'){
        cardNumberYearInput.style.border = '1px solid hsl(270, 3%, 87%)';
    }
    
    if((cardNumberMonthInput.value !== '' && cardNumberYearInput.value !== '') && (cardNumberYearInput.value > 25 && cardNumberYearInput.value < 35) && ( cardNumberMonthInput.value > 0 && cardNumberMonthInput.value < 13)){
        ExpDateErrorMsg.style.opacity = '0';
    }
});

cardNumberYearInput.addEventListener('input', function(e){

    if (e.target.value.length > cardNumberYearInput.maxLength) {
      e.target.value = e.target.value.slice(0, cardNumberYearInput.maxLength);
    }
    if((cardNumberMonthInput.value !== '' && cardNumberYearInput.value !== '') && (cardNumberYearInput.value > 25 && cardNumberYearInput.value <= 35) && ( cardNumberMonthInput.value > 0 && cardNumberMonthInput.value < 13)){
        ExpDateErrorMsg.style.opacity = '0';
    }

    if(cardNumberYearInput.value !== 0){
      expireYear.textContent = e.target.value;
    }
    if(cardNumberYearInput.value === ""){
      expireYear.textContent = "00";
    }
});


let cardCvcInput = document.getElementById('cardCvcInput');
let cvcNumber = document.getElementById('cvcNumber');
cardCvcInput.addEventListener('input', function(e){  
    
    if (e.target.value.length > cardCvcInput.maxLength) {
      e.target.value = e.target.value.slice(0, cardCvcInput.maxLength);
      
    }
    cvcNumber.textContent = e.target.value;
    
    if(cardCvcInput.value !== '' && cardCvcInput.value.length === 3){
        cardCvcErrorMsg.style.opacity = '0';
    }

    if(cardCvcErrorMsg.style.opacity == '1' && cardCvcInput !== '' && cardCvcInput.length < 3){
        cardCvcErrorMsg.textContent = "Invalid entry";
    }


    if(e.target.value === ""){
      cvcNumber.textContent = "000";
    }

});

cardCvcInput.addEventListener('focusin', function(){
cardCvcInput.style.border = '1px solid transparent';
});
cardCvcInput.addEventListener('focusout', function(){

if(cardCvcInput.value !== '' && cardCvcInput.value.length > 2){
    cardCvcInput.style.border = '1px solid hsl(270, 3%, 87%)';
    cardCvcErrorMsg.style.opacity = '0';
}
if(cardCvcInput.value === '' && cardCvcErrorMsg.style.opacity === '1' ){
    cardCvcInput.style.border = '1px solid red';
    cardCvcErrorMsg.textContent = "Can't be blank";
}

if(cardCvcInput.value === '' && cardCvcErrorMsg.style.opacity === '0'){
    cardCvcInput.style.border = '1px solid hsl(270, 3%, 87%)';
}

if(cardCvcErrorMsg.style.opacity === '1' && cardCvcInput.value !== '' && cardCvcInput.value.length < 3){
    cardCvcInput.style.border = '1px solid red';
    cardCvcErrorMsg.textContent = "Invalid entry";
    cardCvcErrorMsg.style.opacity = '1';
}

if(cardCvcErrorMsg.style.opacity === '0' && cardCvcInput.value !== '' && cardCvcInput.value.length < 3){
    cardCvcInput.style.border = '1px solid hsl(270, 3%, 87%)';
}

if(cardCvcInput.value === ""){
    cvcNumber.textContent = "000";
}
});

const submitButton = document.getElementById('submitBtn');
let validation = false;
let nameValidation = false;
let cardNumberValidation = false;
let expDateValidation = false;
let cvcValidation = false

function validateName(object){
  const regex = /\d/;
  return regex.test(object);
}

function validateCardNumber(object){
  const regex = /^\d+$/;
  return regex.test(object.replaceAll(' ', ''));
}

function validateExpDate(){
  if((cardNumberMonthInput.value !== '' && cardNumberYearInput.value !== '') && (cardNumberYearInput.value > 25 && cardNumberYearInput.value <= 35) && ( cardNumberMonthInput.value > 0 && cardNumberMonthInput.value < 13)){
    expDateValidation = true;
  }else if((cardNumberMonthInput.value === '' || cardNumberYearInput.value === '') || (cardNumberYearInput.value <= 25 || cardNumberYearInput.value >= 35) || ( cardNumberMonthInput.value < 0 || cardNumberMonthInput.value > 12)){
    expDateValidation = false;
  }
}

function validateCvcNumber(object){
  const regex = /^\d+$/;
  return regex.test(object);
}

function validateForm(){

    validateName(nameInput.value);
    let nameResult = validateName(nameInput.value);

    validateCardNumber(cardNumberInput.value);
    let cardNumberResult = validateCardNumber(cardNumberInput.value);

    validateExpDate();

    cardCvcInput.value.replaceAll(' ', '');

    let cvcNumberResult = '';
    if(validateCvcNumber(cardCvcInput.value) && cardCvcInput.value.length === 3){
      cvcNumberResult = validateCvcNumber(cardCvcInput.value);
    }

  
    if(!nameResult === true && cardNumberResult === true && expDateValidation === true && cvcNumberResult === true){
      validation = true;
    }
}

submitButton.addEventListener('click', function(event) { 
  event.preventDefault();
  
  let nameInput = document.getElementById("nameInput");
  let nameErrorMsg = document.getElementById("nameErrorMsg");

  if(nameInput.value === ''){
    nameInput.style.border = '1px solid red';
    nameErrorMsg.style.opacity = '1';
    nameErrorMsg.textContent = "Can't be blank";
  }

  if(nameInput.value !== '' && (validateName(nameInput.value))){
    nameInput.style.border = '1px solid red';
    nameErrorMsg.style.opacity = '1';
    nameErrorMsg.textContent = 'Invalid name';
  };

  let cardNumberInput = document.getElementById("cardNumberInput");
  let cardNumberErrorMsg = document.getElementById("cardNumberErrorMsg");

  if(cardNumberInput.value == ''){
    cardNumberInput.style.border = '1px solid red';
    cardNumberErrorMsg.style.opacity = '1';
    cardNumberErrorMsg.textContent = "Can't be blank";
  }

  if(cardNumberInput.value !== '' && validateCardNumber(cardNumberInput.value) === false && cardNumberInput.value.length <= 19){
    cardNumberInput.style.border = '1px solid red';
    cardNumberErrorMsg.style.opacity = '1';
    cardNumberErrorMsg.textContent = "Wrong format, numbers only";
  }

  if(cardNumberInput.value !== '' && validateCardNumber(cardNumberInput.value) === true && cardNumberInput.value.length < 19){
    cardNumberInput.style.border = '1px solid red';
    cardNumberErrorMsg.style.opacity = '1';
    cardNumberErrorMsg.textContent = "Invalid card number";
  }
  
  let cardNumberMonthInput = document.getElementById("cardNumberMonthInput");
  let cardNumberYearInput = document.getElementById("cardNumberYearInput");
  let ExpDateErrorMsg = document.getElementById("ExpDateErrorMsg");

  if(cardNumberMonthInput.value === ''){
    cardNumberMonthInput.style.border = '1px solid red';
    ExpDateErrorMsg.style.opacity = '1';
    ExpDateErrorMsg.textContent = "Can't be blank";
  }else if(cardNumberMonthInput.value !== '' && (cardNumberMonthInput.value > 0 || cardNumberMonthInput.value < 13)){
    cardNumberMonthInput.style.border = '1px solid hsl(270, 3%, 87%)';
  }

  if(cardNumberYearInput.value === ''){
    cardNumberYearInput.style.border = '1px solid red';
    ExpDateErrorMsg.style.opacity = '1';
    ExpDateErrorMsg.textContent = "Can't be blank";
  }else if(cardNumberYearInput.value !== ''){
    cardNumberYearInput.style.border = '1px solid hsl(270, 3%, 87%)';
  }

  if(validateCardNumber(cardNumberMonthInput.value) === false && (cardNumberMonthInput.value !== '' && cardNumberYearInput.value !== '')){
    cardNumberMonthInput.style.border = '1px solid red';
    ExpDateErrorMsg.style.opacity = '1';
    ExpDateErrorMsg.textContent = "Numbers only";
  }

  if(validateCardNumber(cardNumberYearInput.value) === false && (cardNumberMonthInput.value !== '' && cardNumberYearInput.value !== '')){
    cardNumberYearInput.style.border = '1px solid red';
    ExpDateErrorMsg.style.opacity = '1';
    ExpDateErrorMsg.textContent = "Numbers only";
  }

  
  if((cardNumberMonthInput.value !== '' && cardNumberYearInput.value !== '') && (cardNumberYearInput.value <= 25 || cardNumberYearInput.value > 35 || cardNumberMonthInput.value < 1 || cardNumberMonthInput.value > 12)){
    
    if(cardNumberMonthInput.value < 1 || cardNumberMonthInput.value > 12){
        cardNumberMonthInput.style.border = '1px solid red';
    }
    if(cardNumberYearInput.value <= 25 || cardNumberYearInput.value > 35){
        cardNumberYearInput.style.border = '1px solid red';
    }
    ExpDateErrorMsg.style.opacity = '1';
    ExpDateErrorMsg.textContent = "Invalid exp. date";
  }

  let cardCvcInput = document.getElementById("cardCvcInput");
  let cardCvcErrorMsg = document.getElementById("cardCvcErrorMsg");

  if(cardCvcInput.value === ''){
    cardCvcInput.style.border = '1px solid red';
    cardCvcErrorMsg.style.opacity = '1';
    cardCvcErrorMsg.textContent = "Can't be blank";
  }else if(cardCvcInput.value !== ''){
    cardCvcInput.style.border = '1px solid hsl(270, 3%, 87%)';
  }
  if(cardCvcInput.value !== '' && cardCvcInput.value.length < 3){
    cardCvcInput.style.border = '1px solid red';
    cardCvcErrorMsg.style.opacity = '1';
    cardCvcErrorMsg.textContent = "Invalid entry";
  }

  if(validateCardNumber(cardCvcInput.value) === false && cardCvcInput.value !== '' || ((validateCvcNumber(cardCvcInput.value) && cardCvcInput.value.length === 3) === false && cardCvcInput.value !== '')) {
    cardCvcInput.style.border = '1px solid red';
    cardCvcErrorMsg.style.opacity = '1';
    cardCvcErrorMsg.textContent = "Wrong format, numbers only";
  }

  validateForm();

  let cardForm = document.getElementById('cardForm');

  if (validation === true){
    cardForm.style.display = 'none';
    formSubmitionComplete.style.display = 'flex';

    cardName.textContent = 'JANE APPLESEED'
    cardNumber.textContent = '0000 0000 0000 0000'
    expireMonth.textContent = "00";
    expireYear.textContent = "00";
    cvcNumber.textContent = '000'
  }
});

let returnBtn = document.getElementById('returnBtn');

returnBtn.addEventListener('click', function(event) { 
  event.preventDefault();

    cardForm.style.display = 'flex';
    formSubmitionComplete.style.display = 'none';
    nameInput.value = '';
    cardNumberInput.value = '';
    cardNumberMonthInput.value = '';
    cardNumberYearInput.value = '';
    cardCvcInput.value = '';
    validation = false;

});