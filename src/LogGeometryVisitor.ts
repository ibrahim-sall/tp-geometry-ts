import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";
import LineString from "./LineString";
import GeometryCollection from "./GeometryCollection";


export default class LogGeometryVisitor implements GeometryVisitor {
    visitPoint(point: Point): void {
        if (point.x === undefined || point.y === undefined) {
            console.log("Je suis un point vide.");
        } else {
            console.log(`Je suis un point avec x=${point.x().toFixed(1)} et y=${point.y().toFixed(1)}.`);
        }
    }

    visitLineString(lineString : LineString): void {
        if (lineString.isEmpty()) {
            console.log("Je suis une polyligne vide.");
        } else {
            console.log(`Je suis une polyligne définie par ${lineString.getNumPoints()} point(s).`);
        }
    }
    visitGeometryCollection(geometries: GeometryCollection): void {
        if (geometries.isEmpty()){
            console.log("Je suis une collection de geometry vide")
        }
        else {
            console.log(`Je suis une collection de geometry définie par ${geometries.getNumGeometries()} geometrie(s).`)
        }
    }
}