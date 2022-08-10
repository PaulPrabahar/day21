import sum from "./sum";

test("snapshot testing-sum", () => {
    expect(sum(4,5)).toMatchSnapshot();
    expect(sum(3,0)).toMatchSnapshot();
    expect(sum(-1,9)).toMatchSnapshot();
    expect(sum(4,5,5)).toMatchSnapshot();
    expect(sum(4,5,45)).toMatchSnapshot();
})
