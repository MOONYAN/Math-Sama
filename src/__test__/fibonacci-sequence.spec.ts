import { Vec, Mat, combine, span, transpose, compose, eigenvalues, eigenvector, pow, inverse, diagonalPow, fibonacciSequence } from '../fibonacci-sequence';

test("combine", () => {
    const x: Vec = [1, 3];
    const y: Vec = [2, 4];
    const z: Vec = combine(x, y);
    expect(z).toEqual([3, 7]);
})

test("span", () => {
    const x: Vec = [1, 3];
    const z: Vec = span(x, 3);
    expect(z).toEqual([3, 9]);
})

test("transpose", () => {
    const A: Mat = [
        [1, 0],
        [0, 1],
    ];
    const x: Vec = [
        2, 4
    ]
    const z: Vec = transpose(A, x);
    expect(z).toEqual([2, 4]);
})

test("compose", () => {
    const A: Mat = [
        [2, 0],
        [0, 3],
    ];
    const B: Mat = [
        [4, 0],
        [0, 5],
    ];
    const C: Mat = compose(A, B);
    const exp: Mat = [
        [8, 0],
        [0, 15],
    ];
    expect(C).toEqual(exp);
})

test('eigenvalues', () => {
    let lambdas: number[] = eigenvalues([
        [1, 1],
        [2, 0]
    ])
    expect(lambdas).toEqual([2, -1]);
})

test('eigenvector:1', () => {
    let x: Vec = eigenvector([
        [1, 1],
        [2, 0]
    ],2)
    expect(x).toEqual([2, 1]);
})


test('eigenvector:2', () => {
    let x: Vec = eigenvector([
        [1, 1],
        [2, 0]
    ],-1)
    expect(x).toEqual([-1, 1]);
})


test("pow 0", () => {
    expect(pow(2, 0)).toEqual(1);
})

test("pow 3", () => {
    expect(pow(2, 3)).toEqual(8);
})

test("inverse", () => {
    let AInverse = inverse([
        [2, 1],
        [-1, 1]
    ])
    expect(AInverse).toEqual([
        [1 / 3, -1 / 3],
        [1 / 3, 2 / 3]
    ])
})

test("diagonalPow", () => {
    let Dn = diagonalPow([
        [2, 0],
        [0, 3]
    ], 2);
    expect(Dn).toEqual([
        [4, 0],
        [0, 9]
    ]);
})

test("fibonacciSeries f(n+1)=f(n)+2*f(n-1)", () => {
    // 0 1 1 3 5 11 21 43 85
    let func = fibonacciSequence([
        [1, 1],
        [2, 0]
    ], 0, 1);
    let f8 = func(8);
    expect(f8).toEqual(85);
})

test("fibonacciSeries f(n+1)=f(n)+f(n-1)", () => {
    // 0 1 1 2 3 5 8 13 21
    let func = fibonacciSequence([
        [1, 1],
        [1, 0]
    ], 0, 1);
    let f8 = func(8);
    expect(f8).toEqual(21);
})

test("fibonacciSeries f(n+1)=f(n)+2*f(n-1)", () => {
    // 3 6 12 24 48 96 192 384 768
    let func = fibonacciSequence([
        [1, 1],
        [2, 0]
    ], 3, 6);
    let f8 = func(8);
    expect(f8).toEqual(768);
})