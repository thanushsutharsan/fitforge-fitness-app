const calculateButton = document.getElementById("calculate-btn");
calculateButton.addEventListener("click", calculateMacros);

function calculateMacros() {
    const caloriesInput = document.getElementById("calories");
    const goalInput = document.getElementById("goal");
    const results = document.getElementById("results");

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
}