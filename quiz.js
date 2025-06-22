// Step 1: Define the function
function checkAnswer() {
  // Step 2: Declare correctAnswer
  const correctAnswer = "4";

  // Step 3: Retrieve the user's answer
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  let userAnswer;

  if (selectedOption) {
    userAnswer = selectedOption.value;

    // Step 4: Compare answers
    if (userAnswer === correctAnswer) {
      document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
      document.getElementById("feedback").textContent =
        "That's incorrect. Try again!";
    }
  } else {
    // Handle case where no option is selected
    document.getElementById("feedback").textContent =
      "Please select an answer.";
  }
}

// Step 5: Add event listener to button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
