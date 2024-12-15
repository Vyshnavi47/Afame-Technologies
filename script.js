const display = document.getElementById("display");

// Append value to the display
function appendValue(value) {
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = "";
}

// Delete the last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculateResult() {
  try {
    // Use eval() to compute the expression
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
