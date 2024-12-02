import { fizzbuzz } from "./fizzbuzz.js";

test('If the number is divisible by 3, return "Fizz"', () => {
	expect(fizzbuzz(6)).toBe("Fizz");
});

test('If the number is divisible by 5, return "Buzz"', () => {
	expect(fizzbuzz(10)).toBe("Buzz");
});

test('If the number is divisible by 3 and 5, return "FizzBuzz"', () => {
	expect(fizzbuzz(15)).toBe("FizzBuzz");
});

test("If the number is not divisible by 3 or 5, return the number", () => {
	expect(fizzbuzz(2)).toBe("2");
});
