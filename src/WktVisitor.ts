import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";
import LineString from "./LineString";

export default class WktVisitor implements GeometryVisitor {
    buffer : string;
    getResult() :string{
        return this.buffer;  
    }
    visitPoint(point: Point): void {
        this.buffer =  point.getType().toUpperCase() + "(" + point.x().toFixed(1) + " " + point.y().toFixed(1) + ")";
    }
    visitLineString(lineString : LineString): void {
        let wkt = "";
        for (let i = 0; i < lineString.getNumPoints(); i++){
        const point = lineString.getPointN(i);
        wkt += point.x().toFixed(1) + " " + point.y().toFixed(1);
        if (i < lineString.getNumPoints() - 1){
            wkt += ",";
        }
        }
        this.buffer =  lineString.getType().toUpperCase() + "(" + wkt + ")";
    }
}