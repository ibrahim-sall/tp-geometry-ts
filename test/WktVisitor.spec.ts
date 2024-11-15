import "mocha";
import { expect } from "chai";

import WktVisitor from "../src/WktVisitor";
import Point from "../src/Point";
import LineString from "../src/LineString";

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
})