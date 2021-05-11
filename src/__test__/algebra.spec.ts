import { Vec, Mat, combine, span, transpose, compose } from '../algebra';

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