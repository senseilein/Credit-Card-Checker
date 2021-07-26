# Credit-Card-Checker

## Aim
To practice intermediate Javascript syntax // Loops & Function 

## Context
The company that you work for suspects that credit card distributors have been mailing out cards that have invalid numbers. In this project, you have the role of a clerk who checks if credit cards are valid. Every other clerk currently checks using pencil and paper, but you’ll be optimizing the verification process using your knowledge of functions and loops to handle multiple credit cards at a time. Unlike the other clerks, you can spend the rest of your time relaxing! 
  * Starter code : line 1 - 24 (arrays of credit cards)

## Project Requirements

1. * Create a function **`validateCred()`** that has a parameter of an array. 
   * The purpose of **`validateCred()`** is to return `true` when an array contains digits of a valid credit card number and `false` when it is invalid, using the [Luhn's algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm#Description). 
   * This function should **NOT** mutate the values of the original array.
<br>

2. * Create a function **`findInvalidCards()`** that has one parameter for a nested array of credit card numbers. 
   * The role of **`findInvalidCards()`** is to check through the nested array for which numbers are invalid, and return another nested array of invalid cards. 
<br>

3. * To identify the credit card companies that have possibly issued these faulty numbers, create a function **`idInvalidCardCompanies()`** that has one parameter for a nested array of invalid numbers and returns an array of companies.
   * Currently, there 4 accepted companies which each have unique first digits: *Amex(3), Visa(4), Mastercard(5), Discover(6)*.
   * If the number doesn’t start with any of the numbers listed, print out a message like: `“Company not found”`.
   * **`idInvalidCardCompanies()`** should return an array of companies that have mailed out cards with invalid numbers. 
   * This array should **NOT** contain duplicates, i.e. even if there are two invalid Visa cards, `"Visa"` should only appear once in the array. 

## Project Extensions

1. Use different credit card numbers from [a credit card number generator and validator site](https://www.freeformatter.com/credit-card-number-generator-validator.html) and test if your functions work for all types of credit cards.  
2. To make it easier to test credit card numbers, create a function that accepts a string and converts it into an array of numbers like the initially provided arrays.
(I created the **`stringToArrayOfNum()`** function )
