import { Vector } from "./Vector";

describe("Vector.magnitude", () => {
  it("gets the vector's magnitude", () => {
    expect(new Vector(0, 0).magnitude).toBe(0);
    expect(new Vector(0, 1).magnitude).toBe(1);
    expect(new Vector(1, 1).magnitude).toBe(Math.sqrt(2));
  });
});

describe("Vector.inverse", () => {
  it("gets the vector's inverse", () => {
    expect(new Vector(0, 0).inverse).toEqual(new Vector(0, 0));
    expect(new Vector(0, 1).inverse).toEqual(new Vector(0, -1));
    expect(new Vector(1, 1).inverse).toEqual(new Vector(-1, -1));
  });
});

describe("Vector.add", () => {
  it("adds two vectors", () => {
    expect(new Vector(0, 0).add(new Vector(0, 0))).toEqual(new Vector(0, 0));
    expect(new Vector(0, 0).add(new Vector(0, 1))).toEqual(new Vector(0, 1));
    expect(new Vector(0, 1).add(new Vector(1, 0))).toEqual(new Vector(1, 1));
  });
});

describe("Vector.displacement", () => {
  it("evaluates the displacement between two vectors", () => {
    expect(new Vector(0, 1).displacement(new Vector(0, 0))).toEqual(
      new Vector(0, 1),
    );
    expect(new Vector(0, 0).displacement(new Vector(0, 1))).toEqual(
      new Vector(0, -1),
    );
    expect(new Vector(2, 2).displacement(new Vector(1, 1))).toEqual(
      new Vector(1, 1),
    );
  });
});

describe("Vector.distance", () => {
  it("evaluates the distance between two vectors", () => {
    expect(new Vector(0, 1).distance(new Vector(0, 0))).toBe(1);
    expect(new Vector(0, 0).distance(new Vector(0, 1))).toBe(1);
    expect(new Vector(2, 2).distance(new Vector(1, 1))).toBe(Math.sqrt(2));
  });
});

describe("Vector.congruent", () => {
  it("checks if two vectors are congruent", () => {
    expect(new Vector(0, 0).congruent(new Vector(0, 0))).toBe(true);
    expect(new Vector(0, 1).congruent(new Vector(0, 1))).toBe(true);
    expect(new Vector(0, 1).congruent(new Vector(1, 1))).toBe(false);
  });
});

describe("Vector.adjacent", () => {
  it("checks if two vectors are adjacent", () => {
    expect(new Vector(0, 0).adjacent(new Vector(0, 0))).toBe(false);
    expect(new Vector(0, 0).adjacent(new Vector(0, 1))).toBe(true);
    expect(new Vector(0, 0).adjacent(new Vector(1, 1))).toBe(false);

    expect(new Vector(0, 1).adjacent(new Vector(0, 0))).toBe(true);
    expect(new Vector(0, 1).adjacent(new Vector(0, 1))).toBe(false);
    expect(new Vector(0, 1).adjacent(new Vector(1, 1))).toBe(true);

    expect(new Vector(0, 1).adjacent(new Vector(0, 2))).toBe(true);
    expect(new Vector(0, 1).adjacent(new Vector(0, 3))).toBe(false);
  });
});
