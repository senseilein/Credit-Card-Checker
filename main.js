// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Challenge - Project Extension material
const invalidCustomCreditCard = '2221009933897722'
const validCustomCreditCard = '2720994582147897'

// stringToArrayOfNum() accepts a string and converts it into an array of numbers like the initially provided arrays.

const stringToArrayOfNum = (creditCard) => {
  newCc = creditCard.split('').map(x => parseInt(x, 10))
  return newCc;
}

const formattedInvalidCustomCreditCard = stringToArrayOfNum(invalidCustomCreditCard)
const formattedValidCustomCreditCard = stringToArrayOfNum(validCustomCreditCard)

// Test
// console.log(formattedInvalidCustomCreditCard)
// console.log(formattedValidCustomCreditCard)

batch.push(formattedInvalidCustomCreditCard, formattedValidCustomCreditCard);



//-------------------- Functions --------------------//

// Add your functions below:

// validateCred() should return true when an array contains digits of a valid credit card number and false when it is invalid. Function should NOT mutate the values of the original array.

const validateCred = (creditCard) => {
//Create reversed copy of the CC num (so that we start from the farthest digit to the righ, aka check digit)
let reversedCreditCard = [...creditCard].reverse();
let doubledDigit = 0; 
let sum = 0;

for (i = 0; i < reversedCreditCard.length; i++){
// Double every other digit (after the check digit)
  if (i % 2 != 0) {
    doubledDigit = reversedCreditCard[i] * 2
    if (doubledDigit > 9) {
      doubledDigit -= 9;
    }
// Sum up all the digits in the credit card number. 
    sum += doubledDigit;
  } else {
    sum += reversedCreditCard[i];
  }
}
// If the sum modulo 10 is 0, CC num is valid else it's invalid
return sum % 10 == 0 ? true: false;
};

// Test
// console.log(validateCred(valid2));
// console.log(validateCred(invalid1));


// findInvalidCards() should check through the nested array for which numbers are invalid, and return another nested array of invalid cards. 

const findInvalidCards = (creditCards) => {

  const invalidCreditCards = [];

  // Loop through the array of credit cards and keep track of invalid credit cards number
  for (j = 0; j < creditCards.length; j++){
    if(!validateCred(creditCards[j])){
      invalidCreditCards.push(creditCards[j]);
    }
  }
  return invalidCreditCards;
}

// Test
console.log('Here\'s the list of the invalid credit cards (including the custom one):')
console.log(findInvalidCards(batch))


// idInvalidCardCompanies() should return an array of companies that have mailed out cards with invalid numbers. This array should NOT contain duplicates

const idInvalidCardCompanies = (invalidCreditCards) => {
  const invalidCardCompanies = [];
  let company = '';

  //Iterate over the invalid credit card batch to check the first digit
  for (k = 0; k < invalidCreditCards.length; k++){
    switch (invalidCreditCards[k][0]){
      case 3:
        company = 'Amex';
        break;
      case 4:
        company = 'Visa';
        break;
      case 5:
        company = 'Mastercards';
        break;
      case 6:
        company = 'Discover';
        break;
      default:
        company = 'Company not found';
  }

  // Populate array of invalidCardCompanies
    if (!invalidCardCompanies.includes(company)){
      invalidCardCompanies.push(company);  
    }
  }
  console.log("\nList of the companies that have mailed out cards with invalid numbers:")
  return invalidCardCompanies;
}

// Test
invalidCreditCardbatch = findInvalidCards(batch) 
console.log(idInvalidCardCompanies(invalidCreditCardbatch))
