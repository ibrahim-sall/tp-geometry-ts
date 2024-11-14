import "mocha";
import { expect } from "chai";
import LineString from "../src/LineString";
import Point from "../src/Point";

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