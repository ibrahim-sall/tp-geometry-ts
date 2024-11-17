import AbstractGeometry from "./AbstractGeometry";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";

export default class GeometryCollection extends AbstractGeometry implements Geometry{
    private geometries ?: Array<Geometry>;

    constructor (geometries ?: Array<Geometry> ){
        super();
        this.geometries=geometries ?? [];
    }

    getNumGeometries():number{
        return this.geometries ? this.geometries.length : 0;
    }
    getGeometryN(n:number) : Geometry{
        return this.geometries ? this.geometries[n] : undefined;
    }

    getType(): string {
        return "GeometryCollection";
    }

    isEmpty(): boolean {
        return this.geometries.length === 0;
    }

    translate(dx: number, dy: number): void {
        if (this.geometries) {
            for (const geometry of this.geometries) {
                geometry.translate(dx, dy);
            }
        }
    }

    clone(): Geometry {
        const geometriescopy = new GeometryCollection();
        if (this.geometries) {
            for (const geometry of this.geometries) {
                geometriescopy.geometries.push(geometry.clone());
            }
        } 
        return geometriescopy;
    }
    accept(visitor: GeometryVisitor): void {
        if (this.geometries) {
            for (const geometry of this.geometries) {
                geometry.accept(visitor);
            }
        }
    }
}