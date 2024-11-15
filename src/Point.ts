import Coordinate from "./Coordinate";
import AbstractGeometry from "./AbstractGeometry";
import GeometryVisitor from "./GeometryVisitor";

export default class Point extends AbstractGeometry {
  private coordinate?: Coordinate;
  
  constructor(coordinate?: Coordinate) {
    super();
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

  clone() : Point {
    if (this.isEmpty()){
      return new Point();
    }
    return new Point([this.x(), this.y()]);
  }
  accept(visitor: GeometryVisitor): void {
    visitor.visitPoint(this);
  }
  
}
