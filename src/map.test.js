describe("map", () => {
  it("should have two dimensions", () => {
    const { createMap } = require("./map");
    const map = createMap(1, 1);
    expect(map.width).toBeTruthy();
    expect(map.height).toBeTruthy();
    expect(createDimensionSpy).toBeCalledTimes(2);
  });

  it("should allow us to mock stuff", () => {
    jest.mock("./dimension");
    const { createMap } = require("./map");
    const map = createMap(1, 1);
    expect(map.width).toStrictEqual(3);
    expect(map.height).toStrictEqual(3);
  });
});
