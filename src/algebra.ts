export type Vec = number[];

export type Mat = Vec[];

export function combine(x: Vec, y: Vec): Vec {
    return x.map((val, idx) => val + y[idx]);
}

export function span(x: Vec, c: number): Vec {
    return x.map(n => c * n);
}

export function transpose(A: Mat, x: Vec): Vec {
    return A.reduce((p, a, idx) => combine(p, span(a, x[idx])), new Array(x.length).fill(0));
}

export function compose(A: Mat, B: Mat): Mat {
    return B.map(b => transpose(A, b));
}