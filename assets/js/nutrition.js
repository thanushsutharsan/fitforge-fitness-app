const calculateButton = document.getElementById("calculate-btn");
if (calculateButton) {
    calculateButton.addEventListener("click", calculateMacros);
}

function calculateMacros() {
    const caloriesInput = document.getElementById("calories");
    const goalInput = document.getElementById("goal");
    const results = document.getElementById("results");
    if(!caloriesInput || !goalInput || !results) {
        return;
    }
    const calories = Number(caloriesInput.value);
    const goal = goalInput.value;
    
     // Check if the user filled everything in
    if (caloriesInput.value === "" || goal === "") {
        results.innerHTML = "<p>Please enter your calories and choose a goal.</p>";
        return;
    }
     // Make sure calories are valid
    if (isNaN(calories) || calories <= 0) {
        results.innerHTML = "<p>Please enter a valid calorie amount.</p>";
        return;
    }
     // Check calorie range
    if (calories < 1600 || calories > 3000) {
        results.innerHTML = "<p>Please enter a calorie intake between 1600 and 3000 calories.</p>";
        return;
    }

    let carbPercent;
    let proteinPercent;
    let fatPercent;

    // Set macro ratios based on the selected goal
    if (goal === "loss") {
        carbPercent = 0.35;
        proteinPercent = 0.40;
        fatPercent = 0.25;
    } else if (goal === "maintain") {
        carbPercent = 0.40;
        proteinPercent = 0.30;
        fatPercent = 0.30;
    } else {
        carbPercent = 0.50;
        proteinPercent = 0.25;
        fatPercent = 0.25;
    }
    
    const macros = [
        {
            name: "Carbohydrates",
            grams: (calories * carbPercent) / 4
        },
        {
            name: "Protein",
            grams: (calories * proteinPercent) / 4
        },
        {
            name: "Fat",
            grams: (calories * fatPercent) / 9
        }
    ];
     let output = "<h3>Your Daily Macros</h3><ul>";

    // Display each macro amount
    for (const macro of macros) {
        output += `<li>${macro.name}: ${macro.grams.toFixed(1)}g</li>`;
    }
    output += "</ul>";
    results.innerHTML = output;
}