import Coordinate from "./Coordinate";

export default class Envelope {
    private bottomLeft?: Coordinate;
    private topRight?: Coordinate;

    constructor();
    constructor(bottomLeft?: Coordinate, topRight?: Coordinate);

    constructor(bottomLeft?: Coordinate, topRight?: Coordinate){
        this.bottomLeft = bottomLeft ?? [];
        this.topRight = topRight ?? [];
    }

    isEmpty(): boolean {
        return this.bottomLeft.length === 0 && this.topRight.length ===0;
    }

    getXmin(): number {
        return this.bottomLeft[0];
    }
    getYmin(): number {
        return this.bottomLeft[1];
    }
    getXmax(): number {
        return this.topRight[0];
    }
    getYmax(): number {
        return  this.topRight[1];
    }
    toString(): string {
        return `Voci l'emprise de la bbox: 
        (${this.getXmin()}, ${this.getYmin()},
        ${this.getXmax()}, ${this.getYmax()})`;
    }
}