import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import Geometry from "../src/Geometry";

describe("test Point", () => {
    it("test default constructor", () => {
        const p = new Point();
        expect(p.getCoordinate()).to.equal(undefined);
        expect(Number.isNaN(p.x()));
        expect(Number.isNaN(p.y()));
    });
    it("test constructor with coordinates", () => {
        const p = new Point([3.0,4.0]);
        expect(p.getCoordinate()).to.deep.equal([3.0,4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
    });
});

describe("test LineString", () => {
    it ("test default constructor", () => {
        const l = new LineString();
        expect(l.getPointN(0)).to.equal(undefined);
        expect(l.getNumPoints()).to.equal(0);})
    it ("test constructor with points", () => {
        const p1 = new Point([1., 3.]);
        const p2 = new Point([2., 4.]);
        const l = new LineString([p1, p2]);
        expect(l.getPointN(0)).to.equal(p1);
        expect(l.getNumPoints()).to.equal(2);
    })
    });


describe("test Geometry", () => {
    it("test getType", () => {
        const p = new Point();
        expect(p.getType()).to.equal("Point");
        const l = new LineString();
        expect(l.getType()).to.equal("LineString");
    });
});