/*global document*/

let calculateButton = document.getElementById("calculate-btn");

if (calculateButton) {
  calculateButton.addEventListener("click", calculateMacros);
}

function calculateMacros() {
  let caloriesInput = document.getElementById("calories");
  let goalInput = document.getElementById("goal");
  let results = document.getElementById("results");
  let calories;
  let goal;
  let carbPercent;
  let proteinPercent;
  let fatPercent;
  let macros;
  let output;

  if (!caloriesInput || !goalInput || !results) {
    return;
  }

  calories = Number(caloriesInput.value);
  goal = goalInput.value;

  // Check if the user filled everything in
  if (caloriesInput.value === "" || goal === "") {
    results.innerHTML = "<p>Please enter your calories and choose a goal.</p>";
    return;
  }

  // Make sure calories are valid
  if (Number.isNaN(calories) || calories <= 0) {
    results.innerHTML = "<p>Please enter a valid calorie amount.</p>";
    return;
  }

  // Check calorie range
  if (calories < 1600 || calories > 3000) {
    results.innerHTML = "<p>Please enter calories between 1600 and 3000.</p>";
    return;
  }

  // Set macro ratios based on selected goal
  if (goal === "loss") {
    carbPercent = 0.35;
    proteinPercent = 0.4;
    fatPercent = 0.25;
  } else if (goal === "maintain") {
    carbPercent = 0.4;
    proteinPercent = 0.3;
    fatPercent = 0.3;
  } else {
    carbPercent = 0.5;
    proteinPercent = 0.25;
    fatPercent = 0.25;
  }

  macros = [
    {
      grams: (calories * carbPercent) / 4,
      name: "Carbohydrates",
    },
    {
      grams: (calories * proteinPercent) / 4,
      name: "Protein",
    },
    {
      grams: (calories * fatPercent) / 9,
      name: "Fat",
    },
  ];

  output = "<h3>Your Daily Macros</h3><ul>";

  macros.forEach(function (macro) {
    output += "<li>" + macro.name + ": " + macro.grams.toFixed(1) + "g</li>";
  });

  output += "</ul>";
  results.innerHTML = output;
}
