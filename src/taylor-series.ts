type Func = (x: number) => number;

export function taylorSeries(f: Func, a: number, precise: number = 2, delta: number = 0.000001): Func {

    //f'(x) = [f(x)-f(x-delta)]/delta
    function gradient(g: Func): Func {
        return x => (g(x) - g(x - delta)) / delta;
    }

    return (x: number): number => {

        let sum = f(a);
        for (let i = 1, product = 1, h = gradient(f); precise > 1; precise--) {
            sum += h(a) * ((x - a) ** i) / product;
            h = gradient(h);
            i++;
            product *= i;
        }

        return sum;
    }
}