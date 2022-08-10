import sum from "./sum";

describe("test suite 2",() => {
    test("sum 4+5 equlas 9", () => {
        expect(sum(4, 5)).toBe(9);
    });
    it("sum 3+3 equals 6",() =>{
        expect(sum(3, 3)).toBe(6);
    });
});
