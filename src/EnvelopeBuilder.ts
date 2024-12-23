import Envelope from "./Envelope";
import Coordinate from "./Coordinate";
import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";
import LineString from "./LineString";
import GeometryCollection from "./GeometryCollection";

export default class EnvelopeBuilder implements GeometryVisitor{

    private xVals? : number[];
    private yVals? : number[];

    constructor(){
        this.xVals = [];
        this.yVals = [];
    }

    insert(coordinates: Coordinate) : void{
        this.xVals.push(coordinates[0]);
        this.yVals.push(coordinates[1]);}

    build() : Envelope{

        if (this.xVals.length === 0){
            return new Envelope();
        }
        const bottomLeft = [Math.min(...this.xVals), Math.min(...this.yVals)];
        const topRight = [Math.max(...this.xVals), Math.max(...this.yVals)]; 
        return new Envelope(bottomLeft, topRight);
    }
    visitPoint(point: Point): void {
        this.insert(point.getCoordinate());
    }
    visitLineString(lineString: LineString): void {
        for (let i = 0; i < lineString.getNumPoints(); i++){
            this.insert(lineString.getPointN(i).getCoordinate());
        }
    }
    visitGeometryCollection(geometries: GeometryCollection): void {
        for (let i = 0; i < geometries.getNumGeometries(); i++){
            const geometry = geometries.getGeometryN(i);
            if (geometry instanceof Point){
                this.insert(geometry.getCoordinate());
                } else if (geometry instanceof LineString) {
                    for (let i = 0; i < geometry.getNumPoints(); i++){
                        this.insert(geometry.getPointN(i).getCoordinate());
                    }
                    geometries.getGeometryN(i).accept(this);
                }
            }
    }
}