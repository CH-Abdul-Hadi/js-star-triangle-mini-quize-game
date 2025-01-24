let qustions = [
  "What is 2+2?",
  "What is 3+3?",
  "What is 4/4?",
  "What is 5-5?",
  "What is 6-5?",
];

let answers = ["4", "6", "1", "0", "1"];

var score = 0;

for (let i = 0; i <= 4; i++) {
  let answer = prompt(qustions[i]);
  if (answer == answers[i]) {
    score += 1;
  } else {
    score += 0;
  }
}

alert(`your score is ${score} out of 5`);
