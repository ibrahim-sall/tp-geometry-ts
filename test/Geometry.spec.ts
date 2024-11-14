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
    it("test isEmpty", () => {
        const p = new Point();
        expect(p.isEmpty()).to.equal(true);
        const l = new LineString();
        expect(l.isEmpty()).to.equal(true);
    })
});