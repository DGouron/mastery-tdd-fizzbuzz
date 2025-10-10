class Game {
    private _rolls: number[] = [];
  
    score() {
      let accumulator = 0;
  
      for (let i = 0; i < this._rolls.length; i++) {
        accumulator += this._rolls[i];
        if (this.isSpare(i) || this.isStrike(i))
          accumulator += this._rolls[i];
      }
  
      return accumulator;
    }
  
    roll(number: number) {
      this._rolls.push(number);
    }
  
    private isStrike(i: number) {
      return this._rolls[i - 1] === 10 || this._rolls[i - 2] === 10;
    }
  
    private isSpare(i: number) {
      return this._rolls[i - 2] + this._rolls[i - 1] === 10;
    }
  }
  
  const rollMany = (game: Game, count: number, pins: number = 0) => {
    for (let i = 0; i < count; i++) {
      game.roll(pins);
    }
  }
  
  test('missing all the pins', () => {
    const game = new Game();
  
    rollMany(game, 20, 0);
  
    expect(game.score()).toBe(0);
  })
  
  test('hit one pin', () => {
    const game = new Game();
  
    rollMany(game, 1, 1);
    rollMany(game, 19, 0);
  
    expect(game.score()).toBe(1);
  })
  
  test('spare', () => {
    const game = new Game();
  
    rollMany(game, 1, 4);
    rollMany(game, 1, 6);
    rollMany(game, 1, 5);
    rollMany(game, 17, 0);
  
    expect(game.score()).toBe(20)
  })
  
  test('strike with one bonus', () => {
    const game = new Game();
  
    rollMany(game, 1, 10);
    rollMany(game, 1, 5);
    rollMany(game, 17, 0);
  
    expect(game.score()).toBe(20)
  })
  
  test('strike with two bonus', () => {
    const game = new Game();
  
    rollMany(game, 1, 10);
    rollMany(game, 1, 5);
    rollMany(game, 1, 4);
    rollMany(game, 17, 0);
  
    expect(game.score()).toBe(28)
  })