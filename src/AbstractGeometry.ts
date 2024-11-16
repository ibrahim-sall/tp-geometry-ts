import Geometry from './Geometry';
import GeometryVisitor from './GeometryVisitor';
import WktVisitor from './WktVisitor';
import EnvelopeBuilder from './EnvelopeBuilder';
import Envelope from './Envelope';

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
    getEnvelope(): Envelope {
        const envelopeBuilder = new EnvelopeBuilder();
        this.accept(envelopeBuilder);
        return envelopeBuilder.build();
    }
}