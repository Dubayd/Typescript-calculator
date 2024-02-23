// Function to perform the calculation
function calculate() {
    // Get references to the input elements
    var num1Input = document.getElementById("num1");
    var num2Input = document.getElementById("num2");
    var operatorSelect = document.getElementById("operator");
    var resultDisplay = document.getElementById("result");
    // Check if any of the required elements are missing
    if (!num1Input || !num2Input || !operatorSelect || !resultDisplay) {
        console.error("Error: Could not find elements.");
        return;
    }
    // Get the values from the input elements
    var num1 = parseFloat(num1Input.value);
    var num2 = parseFloat(num2Input.value);
    var operator = operatorSelect.value;
    // Variable to hold the result of the calculation
    var result;
    // Perform the calculation based on the selected operator
    switch (operator) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            }
            else {
                result = NaN; // Division by zero
            }
            break;
        default:
            console.error("Invalid operator.");
            return;
    }
    // Display the result in the resultDisplay paragraph
    resultDisplay.textContent = isNaN(result) ? "Error: Division by zero" : result.toString();
}
