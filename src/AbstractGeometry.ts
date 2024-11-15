import Geometry from './Geometry';

import GeometryVisitor from './GeometryVisitor';

export default abstract class AbstractGeometry implements Geometry {
    abstract getType(): string;
    abstract isEmpty(): boolean;
    abstract translate(dx: number, dy: number): void;
    abstract clone(): Geometry;
    abstract accept(visitor: GeometryVisitor): void;
    
    async asText(): Promise<string> {
        const { default: WktVisitor } = await import('./WktVisitor');
        const wktVisitor = new WktVisitor();
        return wktVisitor.getResult();
    }
}