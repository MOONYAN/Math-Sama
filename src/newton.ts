// y=f(x)
// g(x)=f(x)-y
// solve:g(x)~0

export function newton(y: number, f: (x: number) => number, err: number = 0.001, delta: number = 0.000001): number {

    function g(x: number): number {
        return f(x) - y;
    }

    function next(x: number): number {
        const val = g(x);
        const gradient = (val - g(x - delta)) / delta;
        return x - (val / gradient);
    }

    let last = y;

    let current = next(last);

    while (Math.abs(last - current) > err) {
        last = current;
        current = next(last);
    }
    
    return current;
}