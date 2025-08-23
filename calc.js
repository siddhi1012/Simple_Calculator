let currentInput = "";

function press(num) {
  currentInput += num;
  document.getElementById('display').value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  document.getElementById('display').value = "";
}

function calculate() {
  try {
    const result = eval(currentInput);
    document.getElementById('display').value = result;
    currentInput = result.toString();
  } catch (err) {
    document.getElementById('display').value = "Error";
    currentInput = "";
  }
}