import { Position } from "./Position.model";

export class Vector implements Position {
  constructor(
    public x: number,
    public y: number,
  ) {}

  get magnitude(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }

  get inverse(): Vector {
    const normalize = (n: number) => (Object.is(n, -0) ? 0 : n);
    return new Vector(normalize(-this.x), normalize(-this.y));
  }

  get position(): Position {
    return { x: this.x, y: this.y };
  }

  static fromPosition(size: Position): Vector {
    return new Vector(size.x, size.y);
  }

  add({ x, y }: Vector): Vector {
    return new Vector(this.x + x, this.y + y);
  }

  displacement(vector: Vector): Vector {
    return this.add(vector.inverse);
  }

  distance(vector: Vector): number {
    return this.displacement(vector).magnitude;
  }

  congruent(vector: Vector): boolean {
    return this.distance(vector) === 0;
  }

  adjacent(vector: Vector): boolean {
    return this.distance(vector) === 1;
  }
}
