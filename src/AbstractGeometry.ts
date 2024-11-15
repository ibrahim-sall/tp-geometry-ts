import Geometry from './Geometry';
import GeometryVisitor from './GeometryVisitor';
import WktVisitor from './WktVisitor';

export default abstract class AbstractGeometry implements Geometry {
    abstract getType(): string;
    abstract isEmpty(): boolean;
    abstract translate(dx: number, dy: number): void;
    abstract clone(): Geometry;
    abstract accept(visitor: GeometryVisitor): void;
 
    asText(): string {
        const wktVisitor = new WktVisitor();
        this.accept(wktVisitor);
        return wktVisitor.getResult();
    }
}