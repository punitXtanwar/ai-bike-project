/**
 * Bike.AI - Price Prediction Logic
 * This function simulates a Linear Regression model.
 */
function predictPrice() {
    // 1. Capture inputs from the HTML form
    const brandMultiplier = parseFloat(document.getElementById('brand').value);
    const yearInput = document.getElementById('year').value;
    const kmInput = document.getElementById('km').value;
    const resultBox = document.getElementById('resultBox');
    const priceOutput = document.getElementById('priceOutput');

    // 2. Validation: Ensure the user entered numbers
    if (!yearInput || !kmInput) {
        alert("Please enter both the year and kilometers driven.");
        return;
    }

    const year = parseInt(yearInput);
    const km = parseInt(kmInput);
    const currentYear = new Date().getFullYear(); // Automatically gets 2026
    const age = currentYear - year;

    // 3. The "AI Model" Simulation
    // Base Price ($3000) * Brand Weight - Depreciation for Age - Depreciation for Mileage
    let prediction = (3000 * brandMultiplier) - (age * 200) - (km * 0.05);

    // 4. Safety Check: A bike shouldn't be worth $0 or negative
    if (prediction < 150) {
        prediction = 150;
    }

    // 5. Visual Feedback: Show the result with a nice fade-in effect
    resultBox.classList.remove('hidden');
    priceOutput.innerText = "Estimated Value: $" + prediction.toLocaleString(undefined, {minimumFractionDigits: 2});
    
    console.log(`AI Prediction processed: Brand Multiplier: ${brandMultiplier}, Age: ${age}, KM: ${km}`);
}