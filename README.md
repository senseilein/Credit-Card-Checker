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
 
2. * Create a function **`findInvalidCards()`** that has one parameter for a nested array of credit card numbers. 
   * The role of **`findInvalidCards()`** is to check through the nested array for which numbers are invalid, and return another nested array of invalid cards. 
   
