import Envelope from "./Envelope";
import Coordinate from "./Coordinate";

export default class EnvelopeBuilder {

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
}