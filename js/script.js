/* Created by: Joanne Santhosh
 * Created on: Apr 2022
 * This file contains the JS functions for index.html
 */

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit5-06-HTML/sw.js", {
    scope: "/ICS20-Unit5-06-HTML/",
  })
}

/**
 * This function multiplies numbers using loops
 */
function convert() {
  // input
  const firstNumber = parseInt(document.getElementById("first-number").value)
  const secondNumber = parseInt(document.getElementById("second-number").value)

  // process
  var addedNumber = 0
  var answer = 0

  if (firstNumber > 0 && secondNumber > 0) {
    while (addedNumber < secondNumber){
      addedNumber = addedNumber + 1;
      answer = answer + firstNumber;
    }
  } else if (firstNumber < 0 && secondNumber < 0) {
    while (addedNumber > secondNumber){
      addedNumber = addedNumber - 1;
      answer = answer - firstNumber;
    }
  } else if (firstNumber > 0 && secondNumber < 0) {
    while (addedNumber > secondNumber) {
      addedNumber = addedNumber - 1;
      answer = answer - firstNumber;
    }
  } else if (firstNumber < 0 && secondNumber > 0) {
    while (addedNumber < secondNumber) {
      addedNumber = addedNumber + 1;
      answer = answer + firstNumber;
    }
  }
  
  document.getElementById('answer').innerHTML = firstNumber + " x " + addedNumber + " = " + answer;
}