import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";


describe("test Geometry", () => {
    it("test getType", () => {
        const p = new Point();
        expect(p.getType()).to.equal("Point");
        const l = new LineString();
        expect(l.getType()).to.equal("LineString");
    });
    it("test isEmpty, case emty", () => {
        const p = new Point();
        expect(p.isEmpty()).to.equal(true);
        const l = new LineString();
        expect(l.isEmpty()).to.equal(true);
    })
    it("test isEmpty, case not emty", () => {
        const p = new Point([3.0,4.0]);
        expect(p.isEmpty()).to.equal(false);
        const l = new LineString([p]);
        expect(l.isEmpty()).to.equal(false);
    })
});