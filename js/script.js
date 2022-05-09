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
  const firstInteger = parseInt(document.getElementById("first-number").value)
  const secondInteger = parseInt(document.getElementById("second-number").value)

  // process
  var addedNumber = 0
  var result = 0

  if (firstInteger > 0 && secondInteger > 0) {
    while (addedNumber < secondInteger){
      addedNumber = addedNumber + 1;
      result = result + firstInteger;
    }
  } else if (firstInteger < 0 && secondInteger < 0) {
    while (addedNumber > secondInteger){
      addedNumber = addedNumber - 1;
      result = result - firstInteger;
    }
  } else if (firstInteger > 0 && secondInteger < 0) {
    while (addedNumber > secondInteger) {
      addedNumber = addedNumber - 1;
      result = result - firstInteger;
    }
  } else if (firstInteger < 0 && secondInteger > 0) {
    while (addedNumber < secondInteger) {
      addedNumber = addedNumber + 1;
      result = result + firstInteger;
    }
  }
  
  document.getElementById('answer').innerHTML = firstInteger + " x " + addedNumber + " = " + result;
}