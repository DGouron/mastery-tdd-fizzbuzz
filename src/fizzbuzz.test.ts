// Write your test here
class FizzBuzz {
  of(number: number) {
    let result = "";

    if (number % 3 === 0)
      result += "Fizz";
    if (number % 5 === 0)
      result += "Buzz"

    if (!result)
      return number.toString();

    return result;
  }

  generate(to: number) {
    let result = "";
    for (let i = 1; i <= to; i++) {
      result += this.of(i);
    }

    return result;
  }
}

function fizzbuzz(number: number) {
  return new FizzBuzz().of(number);
}

test('fizzbuzz of 1 is 1', () => {
  expect(fizzbuzz(1)).toBe("1");
});

test('fizzbuzz of 2 is 2', () => {
  expect(fizzbuzz(2)).toBe("2");
})

test('fizzbuzz of 3 is Fizz', () => {
  expect(fizzbuzz(3)).toBe("Fizz")
})

test('fizzbuzz of 6 is Fizz', () => {
  expect(fizzbuzz(6)).toBe("Fizz")
})

test('fizzbuzz of 5 is Buzz', () => {
  expect(fizzbuzz(5)).toBe("Buzz")
})

test('fizzbuzz of 10 is Buzz', () => {
  expect(fizzbuzz(10)).toBe("Buzz")
})

test('fizzbuzz of 15 is FizzBuzz', () => {
  expect(fizzbuzz(15)).toBe("FizzBuzz")
})

test('fizzbuzz of 30 is FizzBuzz', () => {
  expect(fizzbuzz(30)).toBe("FizzBuzz")
})

test('fizzbuzz of numbers from 1 to 15 is 12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz', () => {
  expect(new FizzBuzz().generate(15)).toBe("12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz")
})