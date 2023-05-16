//let score var hold the value of the score, and update our document using the "document.getElementById".

/* let scores = parseint(0);
const scoreElement = document.getElementById("score");
score.innerHTML = scores;

//create an add function that increases the score value by adding 5 to the score value.
const addElemnt = (document.getElementById("add").onclick =
  function addButton() {
    scores += 5;
  });

// function addButton(num) {
//   scores += num;
// }
// addButton(5);
// console.log(addButton);
// console.log(scores);

//create a subtract function that decreases the score value by subtracting 5 from the score value.

function subtractButton(num) {
  scores -= num;
}
subtractButton(5);
console.log(subtractButton);
console.log(scores);
*/

// Get references to the buttons and the score element
var addButton = document.getElementById("add");
var subtractButton = document.getElementById("subtract");
var scoreElement = document.getElementById("score");
var imageElement = document.querySelector("img");
let score = 0;
const paragraph = document.getElementById("paragraph");
const firstTitle = document.createElement("p");

// Add event listeners to the buttons
addButton.addEventListener("click", function () {
  // Increment the score by 10 (but don't let it go beyond 100)
  // var score = (scoreElement.innerText);

  if (score < 200) {
    score += 10;
    scoreElement.innerText = score;

    if (score >= 0 && score < 50) {
      // Update the score with text with the default emoji
      firstTitle.innerHTML = `you have scored ${score} point..  This is awful !!`;
      paragraph.appendChild(firstTitle);
    }

    if (score >= 50 && score < 100) {
      // Update the emoji to confuse
      imageElement.src = "images/confuse.png";
      firstTitle.innerHTML = `you have scored ${score} point..  This is not good !!`;
      paragraph.appendChild(firstTitle);
    }

    if (score >= 100 && score < 150) {
      // Update the emoji to neutral
      imageElement.src = "images/neutral.png";
      firstTitle.innerHTML = `you have scored ${score} point.. You are an average performer. You could do better !!`;
      paragraph.appendChild(firstTitle);
    }

    if (score >= 150 && score < 200) {
      // Update the emoji to happy
      imageElement.src = "images/happy.png";
      firstTitle.innerHTML = `you have scored ${score} point.. Slightly above average. Keep pushing!!`;
      paragraph.appendChild(firstTitle);
    }

    if (score >= 200) {
      // Update the emoji to extreme happy
      imageElement.src = "images/extremehappy.png";
      firstTitle.innerHTML = `you have scored ${score} point .. wow what a performer!!! You are the best..`;
      paragraph.appendChild(firstTitle);
    }
  }
  // Check if the score has reached a certain threshold
});

subtractButton.addEventListener("click", function () {
  // Decrement the score by 10 (but don't let it go below 0)
  //   var score = parseInt(scoreElement.innerText);
  if (score > 0) {
    score -= 10;
    scoreElement.innerText = score;

    if (score == 0) {
      // Update the emoji face and the score
      firstTitle.innerHTML = `you have scored ${score} point..  This is not good !!`;
      paragraph.appendChild(firstTitle);
    }

    if (score <= 50 && score > 0) {
      // Update the face and score
      imageElement.src = "images/sad.png";
      firstTitle.innerHTML = `you have scored ${score} point..  This is not good !!`;
      paragraph.appendChild(firstTitle);
    }

    if (score <= 100 && score > 50) {
      // Update the emoji face and score
      imageElement.src = "images/neutral.png";
      firstTitle.innerHTML = `you have scored ${score} point.. You are an average performer. You could do better !!`;
      paragraph.appendChild(firstTitle);
    }

    if (score <= 150 && score > 100) {
      // Update the emoji and score
      imageElement.src = "images/happy.png";
      firstTitle.innerHTML = `you have scored ${score} point.. Slightly above average. Keep pushing!!`;
      paragraph.appendChild(firstTitle);
    }

    if (score <= 200 && score > 150) {
      // Update the emoji and score
      imageElement.src = "images/extremehappy.png";
      firstTitle.innerHTML = `you have scored ${score} point .. wow what a performer!!! You are the best..`;
      paragraph.appendChild(firstTitle);
    }
  }
});
