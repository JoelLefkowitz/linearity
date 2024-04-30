import { Size } from "./Size.model";
import { Vector } from "./Vector";

export class Area extends Vector implements Size {
  get width(): number {
    return this.x;
  }

  get height(): number {
    return this.y;
  }

  get area(): number {
    return this.x * this.y;
  }

  get range(): Vector {
    return new Vector(Math.max(this.x - 1, 0), Math.max(this.y - 1, 0));
  }

  get size(): Size {
    return { width: this.width, height: this.height };
  }

  static fromSize(size: Size): Area {
    return new Area(size.width, size.height);
  }

  static projection(vector: Vector): Area {
    return new Area(vector.x, vector.y);
  }

  contains(vector: Vector, inclusive = true): boolean {
    return (
      vector.x >= 0 &&
      vector.y >= 0 &&
      (inclusive
        ? vector.x <= this.x && vector.y <= this.y
        : vector.x < this.x && vector.y < this.y)
    );
  }
}
