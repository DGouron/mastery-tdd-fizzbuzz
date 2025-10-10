# Mastery TDD - Bowling Game

Write a program to print the score of a bowling game.
The user can input the score of each roll of the game.

The rules are :
- A game consists of 10 frames.
- In each frame, the player has two opportunities to knock down 10 pins.
- The score for the frame is the total number of pins knocked down, plus bonuses for strikes and spares.
- A spare is when the player knocks down all 10 pins in two tries. The bonus for that frame is the number of pins knocked down by the next roll.
- A strike is when the player knocks down all 10 pins on his first try. The bonus for that frame is the value of the next two balls rolled.

Write your code inside the `src` folder and run `pnpm test` to test your code.

# Hint

Create class `Game` with the following methods:

```ts
class Game {
  roll(number: number) {
    
  }

  score() {
    return 0;
  }
}
```

# Bonus

This exercise can be done in exactly 5 tests.