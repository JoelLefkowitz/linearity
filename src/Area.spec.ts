import { Area } from "./Area";
import { Vector } from "./Vector";

describe("Area.width", () => {
  it("gets the area's width", () => {
    expect(new Area(0, 0).width).toBe(0);
    expect(new Area(0, 1).width).toBe(0);
    expect(new Area(1, 1).width).toBe(1);
  });
});

describe("Area.height", () => {
  it("gets the area's height", () => {
    expect(new Area(0, 0).height).toBe(0);
    expect(new Area(0, 1).height).toBe(1);
    expect(new Area(1, 1).height).toBe(1);
  });
});

describe("Area.area", () => {
  it("gets the area's area", () => {
    expect(new Area(0, 0).area).toBe(0);
    expect(new Area(0, 1).area).toBe(0);
    expect(new Area(1, 1).area).toBe(1);
  });
});

describe("Area.range", () => {
  it("gets the area's range", () => {
    expect(new Area(0, 0).range).toEqual(new Vector(0, 0));
    expect(new Area(0, 1).range).toEqual(new Vector(0, 0));
    expect(new Area(0, 2).range).toEqual(new Vector(0, 1));
    expect(new Area(0, -1).range).toEqual(new Vector(0, 0));
  });
});

describe("Area.contains", () => {
  it("checks if the area contains a vector", () => {
    expect(new Area(0, 0).contains(new Vector(0, 0))).toBe(true);
    expect(new Area(0, 0).contains(new Vector(-1, 0))).toBe(false);

    expect(new Area(1, 1).contains(new Vector(1, 1))).toBe(true);
    expect(new Area(1, 1).contains(new Vector(1, 2))).toBe(false);
  });
});
