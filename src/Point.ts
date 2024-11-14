import Coordinate from "./Coordinate";
import Geometry from "./Geometry";

export default class Point implements Geometry {
  private coordinate?: Coordinate;
  constructor();
  constructor(coordinate: Coordinate);
  constructor(coordinate?: Coordinate) {
    this.coordinate = coordinate ?? [];
  }

  getCoordinate(): Coordinate {
    return this.coordinate;
  }
  getType(): string {
    return "Point";
  }
  isEmpty(): boolean {
      return this.coordinate.length === 0;
  }

  x(): number {
    return this.coordinate && this.coordinate.length > 0 ? this.coordinate[0] : Number.NaN;
  }

  y(): number {
    return this.coordinate && this.coordinate.length > 0 ? this.coordinate[1] : Number.NaN;
  }

  translate( dx :number, dy:number): void {
    if (!this.isEmpty()){
      this.coordinate[0] += dx;
      this.coordinate[1] += dy;
    }
  }
}
