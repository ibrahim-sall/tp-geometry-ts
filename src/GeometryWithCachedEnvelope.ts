import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";


export default class GeometryWithCachedEnvelope implements Geometry{
    private original : Geometry;
    private cachedEnvelope?: Envelope

    constructor(original: Geometry) {
        this.original = original;
    }

    getType(): string {
        return this.original.getType();
    }

    isEmpty(): boolean {
        return this.original.isEmpty();
    }

    translate(dx: number, dy: number): void {
        this.original.translate(dx, dy);
        this.cachedEnvelope = undefined; // Invalidate cache
    }

    clone(): Geometry {
        return new GeometryWithCachedEnvelope(this.original.clone());
    }

    accept(visitor: GeometryVisitor): void {
        this.original.accept(visitor);
    }

    asText(): string {
        return this.original.asText();
    }

    getEnvelope(): Envelope {
        if (!this.cachedEnvelope) {
            const envelopeBuilder = new EnvelopeBuilder();
            this.original.accept(envelopeBuilder);
            this.cachedEnvelope = envelopeBuilder.build();
        }
        return this.cachedEnvelope;
    }

}