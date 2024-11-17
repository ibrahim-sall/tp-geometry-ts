import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";

export default class GeometryWithCachedEnvelope implements Geometry{
    private original : Geometry;

    constructor(original: Geometry) {
        this.original = original;
    }

    public getType() : string{
        return this.original.getType();
    }

    public isEmpty() : boolean{
        return this.original.isEmpty();
    }

    public translate(dx: number, dy:number): void{
        this.original.translate(dx, dy);
    };
    public clone() : Geometry{
        return this.original.clone();
    }

    public accept(visitor: GeometryVisitor): void {
        this.accept(visitor);
    }

    public asText(): string {
        return this.original.asText();
    }

}