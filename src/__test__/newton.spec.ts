import { newton } from '../newton';

test("f(x)=x^2", () => {
    let actual = newton(4, x => x ** 2);
    expect(actual).toBeCloseTo(2);
});

test("f(x)=x^2", () => {
    let actual = newton(2, x => x ** 2);
    expect(actual).toBeCloseTo(1.41);
});

test("f(x)=x+1", () => {
    let actual = newton(3, x => x + 1);
    expect(actual).toBeCloseTo(2);
});

test("f(x)=x^2+2x+1", () => {
    let actual = newton(9, x => x ** 2 + 2 * x + 1);
    expect(actual).toBeCloseTo(2);
});

test("f(x)=x^3+3x^2+3x+1", () => {
    let actual = newton(27, x => x ** 3 + 3 * x ** 2 + 3 * x + 1);
    expect(actual).toBeCloseTo(2);
});

test("f(x)=e^x", () => {
    let actual = newton(2.71828, x => Math.E**x);
    expect(actual).toBeCloseTo(1);
});

test("f(x)=log2(x)", () => {
    let actual = newton(3, x => Math.log2(x));
    expect(actual).toBeCloseTo(8);
});

test("f(x)=log10(x)", () => {
    let actual = newton(3, x => Math.log10(x));
    expect(actual).toBeCloseTo(1000);
});