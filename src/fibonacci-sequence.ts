export type Func = (n: number) => number;

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

export function eigenvalues(A: Mat): number[] {
    const h = A[0][0];
    const k = A[1][0];
    const d = (h ** 2 + 4 * k) ** 0.5;
    return [
        (h + d) / 2,
        (h - d) / 2
    ]
}

export function pow(base: number, exponent: number): number {
    let product = 1;
    while (exponent > 0) {
        if ((exponent & 1) === 1) {
            product *= base;
        }
        base **= 2;
        exponent >>>= 1;
    }
    return product;
}

export function diagonalPow(D: Mat, exponent: number): Mat {
    return [
        [pow(D[0][0], exponent), 0],
        [0, pow(D[1][1], exponent)]
    ]
}

export function fibonacciSequence(A: Mat, f0: number, f1: number): Func {
    const lambdas: number[] = eigenvalues(A);
    const D: Mat = [
        [lambdas[0], 0],
        [0, lambdas[1]]
    ]
    const P: Mat = [
        [lambdas[0], 1],
        [lambdas[1], 1]
    ]
    const detP = lambdas[0] - lambdas[1];
    const PInverse: Mat = [
        [1 / detP, -1 / detP],
        [-lambdas[1] / detP, lambdas[0] / detP]
    ]

    return (n: number): number => {
        const Dn: Mat = diagonalPow(D, n - 1);
        const xn = [PInverse, Dn, P].reduce((p, M) => transpose(M, p), [f1, f0]);
        return xn[0];
    }
}