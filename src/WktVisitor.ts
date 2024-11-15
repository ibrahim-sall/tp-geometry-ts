import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";
import LineString from "./LineString";
import WktWriter from "./WktWriter";

export default class WktVisitor implements GeometryVisitor {
    buffer : string;
    constructor(){
        this.buffer = "";
    }
    getResult() :string{
        return this.buffer;
    }
    visitPoint(point: Point): void {
        const writer = new WktWriter();

        this.buffer += writer.write(point);
    }
    visitLineString(lineString : LineString): void {
        const writer = new WktWriter();
        this.buffer += writer.write(lineString);
    }
}