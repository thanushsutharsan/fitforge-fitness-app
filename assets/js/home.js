const weightLossBtn = document.getElementById("weightLossBtn");
const athleteBtn = document.getElementById("athleteBtn");
const result = document.getElementById("result");

weightLossBtn.addEventListener("click", () => {
    result.innerHTML = `
        <h3>Weight Loss Programme</h3>
        <p>We'll recommend calorie-controlled meal plans and fat-loss workouts focusing on the core.</p>
    `;
});

athleteBtn.addEventListener("click", () => {
    result.innerHTML = `
        <h3>Athlete Performance Programme</h3>
        <p>We'll recommend strength training looking at muscles and full body workouts, sport-specific nutrition and performance plans.</p>
    `;
});