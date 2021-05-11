import { taylorSeries } from '../taylor-series';

test("0.99^2 precise:2", () => {
    // f(x)=x^2 ~ f(a)+f'(a)(x-a)
    // f(0.99) ~ 1 + 2 * (-0.01) = 0.98
    let func = taylorSeries(x => x ** 2, 1);
    let actual = func(0.99);
    expect(actual).toBeCloseTo(0.98);
})

test("0.99^2 precise:3", () => {
    // f(x)=x^2 ~ f(a)+f'(a)(x-a) + f''(a)(x-a)^2/2
    // f(0.99) ~ 1 + 2 * (-0.01) + 2*(-0.01)^2/2 = 0.9801
    let func = taylorSeries(x => x ** 2, 1, 3);
    let actual = func(0.99);
    expect(actual).toBeCloseTo(0.9801);
})

test("0.99^3 precise:2", () => {
    // f(x)=x^3 ~ f(a)+f'(a)(x-a)
    // f(0.99) ~ 1 + 3*(-0.01) = 0.97
    let func = taylorSeries(x => x ** 3, 1);
    let actual = func(0.99);
    expect(actual).toBeCloseTo(0.97);
})

test("0.99^3 precise:3", () => {
    // f(x)=x^3 ~ f(a)+f'(a)(x-a) + f''(a)(x-a)^2/2
    // f(0.99) ~ 1 + 3*(-0.01) + 6*(-0.01)^2/2 = 0.9703
    let func = taylorSeries(x => x ** 3, 1, 3);
    let actual = func(0.99);
    expect(actual).toBeCloseTo(0.9703, 4);
})