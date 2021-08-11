const { createDimension, messages } = require("./dimension");
describe("dimension", () => {
  it("should throw an error if we don't provide the value", () => {
    expect(() => {
      createDimension();
    }).toThrow(messages.noDimension);
  });
  it("should throw an error if we provide the value of null", () => {
    expect(() => {
      createDimension(null);
    }).toThrow(messages.noDimension);
  });
  it("should throw an error if we provide zero for the value", () => {
    expect(() => {
      createDimension(0);
    }).toThrow(messages.invalidDimension);
  });
  it("should throw an error if we provide a negative value for the value", () => {
    expect(() => {
      createDimension(-1);
    }).toThrow(messages.invalidDimension);
  });
  it("should throw an error if we provide a decimal value for the value", () => {
    expect(() => {
      createDimension(1.5);
    }).toThrow(messages.invalidDimension);
  });
  it("should return the provided value we passed in if it is a valid dimension", () => {
    expect(() => {
      const result = createDimension(3);
      expect(result).toStrictEqual(3);
    }).not.toThrow();
  });
});
