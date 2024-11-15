import "mocha";
import { expect } from "chai";

import WktWriter from "../src/WktWriter";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test WktWriter", () => {
    it ("test write Point", () => {
        const writer = new WktWriter();
        const g = new Point([3.0,4.0]);
        expect(writer.write(g)).to.equal("POINT(3.0 4.0)");
    });
    it ("test write LineString", () => {
        const writer = new WktWriter();
        const g = new LineString([
            new Point([5., 8.]),
            new Point([6., 9.])]
        );
        expect(writer.write(g)).to.equal("LINESTRING(5.0 8.0,6.0 9.0)");
    });
})
