# 📄 Practical application in JavaScript: guess a number game
The JavaScript code implements a number guessing game. Click events allow the player to make guesses and restart the game.

## :link: Development environment
1. JavaScript
```
v18.18.0
```
2. Visual Studio Code
```
1.89.1
```

## :link: Algorithm description
The JavaScript code presents a simple number guessing game on a web page. It starts by defining a random number between 1 and 100, which the player must try to guess. The `tentativas` variable keeps track of the number of attempts made by the player. Two click events are configured: one for the kick button and one for the reset button.

When the kick button is clicked, a function is triggered. Within this function, the value entered by the player is obtained from the input field (`entradachute`). If the value is not a valid number between 1 and 100, an alert message is displayed. Otherwise, the number of attempts is incremented, and the program checks whether the player's shot matches the secret number. Depending on the result, a message indicating whether the number is greater than, less than, or equal to the secret number is displayed in the corresponding HTML element.

The reset button also has an associated click event. When clicked, it generates a new secret number, resets the attempt counter, and clears the messages displayed on the page, allowing the player to restart the game.

## :link: Contribution
Help improve the project! Fork it and develop your creativity!
