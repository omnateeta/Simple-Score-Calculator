function calculateStrikeRate() {
    // Get the values from input fields
    const runs = parseFloat(document.getElementById('runs').value);
    const balls = parseFloat(document.getElementById('balls').value);
    const wickets = parseFloat(document.getElementById('wickets').value);

    // Get the results section to display results
    const resultElement = document.getElementById('strikeRateResult');

    // Check if all inputs are valid numbers
    if (isNaN(runs) || isNaN(balls) || isNaN(wickets) || balls <= 0) {
        resultElement.textContent = "Please enter valid numbers for all fields. Balls faced must be greater than 0.";
        return;
    }

    // Calculate strike rate
    const strikeRate = (runs / balls) * 100;

    // Display result
    resultElement.textContent = `The strike rate is ${strikeRate.toFixed(2)}.`;
}
