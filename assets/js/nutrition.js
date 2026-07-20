const calculateButton = document.getElementById("calculate-btn");
calculateButton.addEventListener("click", calculateMacros);

function calculateMacros() {
    const caloriesInput = document.getElementById("calories");
    const goalInput = document.getElementById("goal");
    const results = document.getElementById("results");

    const calories = Number(caloriesInput.value);
    const goal = goalInput.value;

}