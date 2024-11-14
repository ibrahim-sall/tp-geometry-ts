import "mocha";
import { expect } from "chai";
import Point from "../src/Point";

describe("test Point", () => {
    it("test default constructor", () => {
        const p = new Point();
        expect(p.getCoordinate()).to.deep.equal([]);
        expect(Number.isNaN(p.x()));
        expect(Number.isNaN(p.y()));
    });
    it("test constructor with coordinates", () => {
        const p = new Point([3.0,4.0]);
        expect(p.getCoordinate()).to.deep.equal([3.0,4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
    });
    it("test getType", () => {
        const p = new Point();
        expect(p.getType()).to.equal("Point");
    });
    it("test isEmpty, case emty", () => {
        const p = new Point();
        expect(p.isEmpty()).to.equal(true);
    });
    it("test isEmpty, case not emty", () => {
        const p = new Point([3.0,4.0]);
        expect(p.isEmpty()).to.equal(false);
    });
    it("test translate", () => {
        const p = new Point([3.0,4.0]);
        p.translate(4., 5.);
        expect(p).to.deep.equal(new Point([7., 9.]));
    });
    it("test clone", () => {
        const p = new Point([3.0,4.0]);
        const copy = p.clone();
        expect(p).to.deep.equal(
            new Point([3.0,4.0])
        );
    });
});




