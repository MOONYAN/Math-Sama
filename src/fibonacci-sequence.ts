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

    const findLambdas = (a: number, b: number, c: number): number[] => {
        const d: number = (b ** 2 - 4 * a * c) ** 0.5;
        return [
            (-b + d) / (2 * a),
            (-b - d) / (2 * a)
        ];
    }

    return findLambdas(1, -A[0][0], - A[0][1] * A[1][0]);
}

export function eigenvector(A: Mat, eigenvalue: number): Vec {
    return [
        -A[1][0] / (A[0][0] - eigenvalue),
        1
    ];
}

export function inverse(A: Mat): Mat {
    const det = A[0][0] * A[1][1] - A[0][1] * A[1][0];
    return [
        [A[1][1] / det, -A[0][1] / det],
        [-A[1][0] / det, A[0][0] / det]
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
        eigenvector(A, lambdas[0]),
        eigenvector(A, lambdas[1])
    ]
    const PInverse: Mat = inverse(P);

    return (n: number): number => {
        const Dn: Mat = diagonalPow(D, n - 1);
        const xn = [PInverse, Dn, P].reduce((p, M) => transpose(M, p), [f1, f0]);
        return xn[0];
    }
}