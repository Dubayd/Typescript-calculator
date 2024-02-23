// Function to perform the calculation
function calculate(): void {
    // Get references to the input elements
    const num1Input: HTMLInputElement | null = document.getElementById("num1") as HTMLInputElement;
    const num2Input: HTMLInputElement | null = document.getElementById("num2") as HTMLInputElement;
    const operatorSelect: HTMLSelectElement | null = document.getElementById("operator") as HTMLSelectElement;
    const resultDisplay: HTMLParagraphElement | null = document.getElementById("result") as HTMLParagraphElement;

    // Check if any of the required elements are missing
    if (!num1Input || !num2Input || !operatorSelect || !resultDisplay) {
        console.error("Error: Could not find elements.");
        return;
    }

    // Get the values from the input elements
    const num1: number = parseFloat(num1Input.value);
    const num2: number = parseFloat(num2Input.value);
    const operator: string = operatorSelect.value;

    // Variable to hold the result of the calculation
    let result: number;

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
            } else {
                result = NaN; // Division by zero
            }
            break;
        default:
            console.error("Invalid operator.")
            return;
    }

    // Display the result in the resultDisplay paragraph
    resultDisplay.textContent = isNaN(result) ? "Error: Division by zero" : result.toString();
}
