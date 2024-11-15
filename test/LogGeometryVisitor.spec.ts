import "mocha";
import { expect } from "chai";

import LogGeometryVisitor from "../src/LogGeometryVisitor";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test LogGeometryVisitor", () => {
    it ("sortie console de visitPoint, pas de réel test", ()=>{
        const log = new LogGeometryVisitor();
        log.visitPoint(new Point([1., 2.]));
        log.visitPoint(new Point());
    });
    it ("sortie console visitLineString, pas de réel test", ()=>{
        const log = new LogGeometryVisitor();
        log.visitLineString(new LineString([new Point([1., 2.]), new Point([3., 4.])]));
        log.visitLineString(new LineString());
    });
})