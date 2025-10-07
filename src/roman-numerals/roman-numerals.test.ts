class RomanNumerals {
	private readonly map: {
		[key: string]: number;
	} = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	of(roman: string): number {
		let result = 0;
		let index = 0;

		while (index < roman.length) {
			const c1 = roman[index];
			const c2 = roman[index + 1];
			if (this.map[c1] < this.map[c2]) {
				result += this.map[c2] - this.map[c1];
				index += 2;
				continue;
			}

			if (this.map[c1]) {
				result += this.map[c1];
				index++;
			}
		}
		return result;
	}
}
const of = (roman: string) => new RomanNumerals().of(roman);

test("I = 1", () => {
	expect(of("I")).toBe(1);
});
test("II = 2", () => {
	expect(of("II")).toBe(2);
});

test("III = 3", () => {
	expect(of("III")).toBe(3);
});

test("V = 5", () => {
	expect(of("V")).toBe(5);
});

test("IV = 5", () => {
	expect(of("IV")).toBe(4);
});

test("VIII = 8", () => {
	expect(of("VIII")).toBe(8);
});

test("X = 10", () => {
	expect(of("X")).toBe(10);
});

test("IX = 9", () => {
	expect(of("IX")).toBe(9);
});

test("L = 50", () => {
	expect(of("L")).toBe(50);
});

test("XL = 40", () => {
	expect(of("XL")).toBe(40);
});

test("C = 100", () => {
	expect(of("C")).toBe(100);
});

test("XC = 90", () => {
	expect(of("XC")).toBe(90);
});

test("D = 500", () => {
	expect(of("D")).toBe(500);
});

test("M = 1000", () => {
	expect(of("M")).toBe(1000);
});
