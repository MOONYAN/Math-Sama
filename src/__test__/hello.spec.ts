import { hello } from '../hello'

test("hello message", () => {
    const autual: string = hello();
    expect(autual).toEqual("Welcome to startup template.");
})