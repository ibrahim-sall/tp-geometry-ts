import { expect } from 'chai';
import 'mocha';

import GeometryWithCachedEnvelope from '../src/GeometryWithCachedEnvelope';
import Geometry from '../src/Geometry';
import GeometryVisitor from '../src/GeometryVisitor';
import LineString from '../src/LineString';
import Point from '../src/Point';

describe('GeometryWithCachedEnvelope for points', () => {
    it('should cache the envelope calculation', () => {
        const point = new Point([1, 2]);
        const geometry = new GeometryWithCachedEnvelope(point);

        const envelope1 = geometry.getEnvelope();
        const envelope2 = geometry.getEnvelope();

        expect(envelope1).to.equal(envelope2); 
    });

    it('should invalidate the cache on translate', () => {
        const point = new Point([1, 2]);
        const geometry = new GeometryWithCachedEnvelope(point);

        const envelope1 = geometry.getEnvelope();
        geometry.translate(1, 1);
        const envelope2 = geometry.getEnvelope();

        expect(envelope1).to.not.equal(envelope2);
    });
});
describe('test GeometryWithCachedEnvelope for lineString', () => {
    it('should cache the envelope calculation', () => {
        const line = new LineString([
            new Point([5., 8.]),
            new Point([6., 9.])]
        );
        const geometry = new GeometryWithCachedEnvelope(line);

        const envelope1 = geometry.getEnvelope();
        const envelope2 = geometry.getEnvelope();

        expect(envelope1).to.equal(envelope2);
    });

    it('should invalidate the cache on translate', () => {
        const point = new Point([1, 2]);
        const geometry = new GeometryWithCachedEnvelope(point);

        const envelope1 = geometry.getEnvelope();
        geometry.translate(1, 1);
        const envelope2 = geometry.getEnvelope();

        expect(envelope1).to.not.equal(envelope2);
    });
});


