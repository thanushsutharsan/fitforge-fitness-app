/*global document, localStorage*/

const weightLossBtn = document.getElementById("weightLossBtn");
const athleteBtn = document.getElementById("athleteBtn");
const result = document.getElementById("result");

if (weightLossBtn && athleteBtn && result) {
    weightLossBtn.addEventListener("click", function () {
        result.innerHTML =
        "<h3>Weight Loss Programme</h3>" +
        "<p>We'll recommend calorie-controlled meal plans and " +
        "fat-loss workouts. These will focus on improving " +
        "core strength.</p>";

        localStorage.setItem("userGoal", "weightLoss");
    });

    athleteBtn.addEventListener("click", function () {
        result.innerHTML =
        "<h3>Athlete Performance Programme</h3>" +
        "<p>We'll recommend strength training, full body " +
        "workouts, sport-specific nutrition and " +
        "performance plans.</p>";

        localStorage.setItem("userGoal", "athlete");
    });
}