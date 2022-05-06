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
  while

}