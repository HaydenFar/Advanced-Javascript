const expect = require("chai").expect;
const validateComparison = require("../app/validateComparison");

describe("validateComparison Tests", () => {

    it("5 and 6 → 6", () => {
        expect(validateComparison("5", "6")).to.equal(6);
    });

    it("4 and 3 → 4", () => {
        expect(validateComparison("4", "3")).to.equal(4);
    });

    it("3 and 3 → equal", () => {
        expect(validateComparison("3", "3")).to.equal("The amounts are equal");
    });

    it("a and 5 → error value1", () => {
        expect(validateComparison("a", "5")).to.equal("Please enter a number in Value 1");
    });

    it("5 and a → error value2", () => {
        expect(validateComparison("5", "a")).to.equal("Please enter a number in Value 2");
    });

    it("'' and 5 → error value1", () => {
        expect(validateComparison("", "5")).to.equal("Please enter a number in Value 1");
    });

    it("5 and '' → error value2", () => {
        expect(validateComparison("5", "")).to.equal("Please enter a number in Value 2");
    });

    it("-1 and 5 → 5", () => {
        expect(validateComparison("-1", "5")).to.equal(5);
    });

    it("34 and -30 → 34", () => {
        expect(validateComparison("34", "-30")).to.equal(34);
    });

    it("-5 and -6 → -5", () => {
        expect(validateComparison("-5", "-6")).to.equal(-5);
    });

    it("5 and -1 → 5", () => {
        expect(validateComparison("5", "-1")).to.equal(5);
    });

    it("1.5 and 2 → 2", () => {
        expect(validateComparison("1.5", "2")).to.equal(2);
    });

    it("2 and 1.5 → 2", () => {
        expect(validateComparison("2", "1.5")).to.equal(2);
    });

    it("3/4 and 1 → error value1", () => {
        expect(validateComparison("3/4", "1")).to.equal("Please enter a number in Value 1");
    });

    it("5b and 3 → error value1", () => {
        expect(validateComparison("5b", "3")).to.equal("Please enter a number in Value 1");
    });

    it("3 and 5b → error value2", () => {
        expect(validateComparison("3", "5b")).to.equal("Please enter a number in Value 2");
    });
});
