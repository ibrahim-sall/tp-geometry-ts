import "mocha";
import { expect } from "chai";

import LogGeometryVisitor from "../src/LogGeometryVisitor";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test LogGeometryVisitor", () => {
    it ("test visitPoint", ()=>{
        const log = new LogGeometryVisitor();
        log.visitPoint(new Point([1., 2.]));
        log.visitPoint(new Point());
    });
    it ("test visitLineString", ()=>{
        const log = new LogGeometryVisitor();
        log.visitLine(new LineString([new Point([1., 2.]), new Point([3., 4.])]));
        log.visitLine(new LineString());
    });
})