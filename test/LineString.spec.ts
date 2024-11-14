import "mocha";
import { expect } from "chai";
import LineString from "../src/LineString";
import Point from "../src/Point";

describe("test LineString", () => {
    it ("test default constructor", () => {
        const l = new LineString();
        expect(l.getPointN(0)).to.equal(undefined);
        expect(l.getNumPoints()).to.equal(0);});
    
    it ("test constructor with points", () => {
        const p1 = new Point([1., 3.]);
        const p2 = new Point([2., 4.]);
        const l = new LineString([p1, p2]);
        expect(l.getPointN(0)).to.equal(p1);
        expect(l.getNumPoints()).to.equal(2);
    });

    it("test getType", () => {
        const l = new LineString();
        expect(l.getType()).to.equal("LineString");
    });

    it("test isEmpty, case emty", () => {
        const l = new LineString();
        expect(l.isEmpty()).to.equal(true);
    });
    it("test isEmpty, case not emty", () => {
        const l = new LineString([new Point([3.0,4.0])]);
        expect(l.isEmpty()).to.equal(false);
    });
    it("test translate", () => {
        const p1 = new Point([1., 3.]);
        const p2 = new Point([2., 4.]);
        const l = new LineString([p1, p2])
        l.translate(4., 5.);
        expect(l).to.deep.equal(
            new LineString([
                new Point([5., 8.]),
                new Point([6., 9.])]
            ));
    });
    it("test clone", () => {
        const l = new LineString([
            new Point([5., 8.]),
            new Point([6., 9.])]
        )
        const copy = l.clone();
        copy.translate(1., 2.);
        expect(l).to.deep.equal(
            new LineString([
                new Point([5., 8.]),
                new Point([6., 9.])]
            ));
    });
});