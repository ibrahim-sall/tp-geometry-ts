import "mocha";
import { expect } from "chai";

import WktVisitor from "../src/WktVisitor";
import Point from "../src/Point";
import LineString from "../src/LineString";
import GeometryCollection from "../src/GeometryCollection";

describe( "test WktVisitor", () => {
    it("test visitPoint", () => {
        const wkt = new WktVisitor();
        wkt.visitPoint(new Point([1., 2.]));
        expect(wkt.getResult()).to.equal("POINT(1.0 2.0)");
    });
    it("test visitLineString", () => {
        const wkt = new WktVisitor();
        wkt.visitLineString(new LineString([new Point([1., 2.]), new Point([3., 4.])]));
        expect(wkt.getResult()).to.equal("LINESTRING(1.0 2.0,3.0 4.0)");
    });
    it('Test visitGeometryCollection', () => {
        const collection = new GeometryCollection(
            [
                new Point([1, 2]), new Point([3, 4]),
                new LineString([new Point([1, 2]), new Point([3, 4])])
                ]);
        const wktvisitor = new WktVisitor();
        collection.accept(wktvisitor);
        expect(wktvisitor.getResult()).to.equal('GEOMETRYCOLLECTION(POINT(1.0 2.0),POINT(3.0 4.0),LINESTRING(1.0 2.0,3.0 4.0))');
    });
})