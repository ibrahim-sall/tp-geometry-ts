
import AbstractGeometry from "./AbstractGeometry";
import Point from "./Point";
import GeometryVisitor from "./GeometryVisitor";


export default class LineString extends AbstractGeometry {
    private points?: Array<Point>;

    constructor ();
    constructor(points:Array<Point>);

   constructor(points?:Array<Point>) {
        super();
        this.points = points ?? [];
    }

    getNumPoints(): number {
        return this.points ? this.points.length : 0;
    }

    getPointN(n:number) : Point {
        return this.points ? this.points[n] : undefined;
    }

    getType() :string {
        return "LineString";
    }

    isEmpty(): boolean {
        return this.points.length === 0;
    }

    translate(dx:number , dy:number): void {
        if (!this.isEmpty()){
            for (let i = 0; i < this.points.length; i++){
                this.points[i].translate(dx, dy);
            }
        }
    }
    clone(): LineString {
        const copy = new LineString();
        for (let i = 0; i < this.points.length; i++){
            copy.points.push(this.points[i].clone());
        }
        return copy;
    }
    accept(visitor: GeometryVisitor): void {
        visitor.visitLineString(this);
      }



}