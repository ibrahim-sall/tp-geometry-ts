
import Geometry from "./Geometry";
import Point from "./Point";


export default class LineString implements Geometry {
    private points?: Array<Point>;

    constructor ();
    constructor(points:Array<Point>);

   constructor(points?:Array<Point>) {
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
}