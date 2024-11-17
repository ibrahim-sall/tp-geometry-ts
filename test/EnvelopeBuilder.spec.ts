import "mocha";
import { expect } from "chai";
import EnvelopeBuilder from "../src/EnvelopeBuilder";
import Point from "../src/Point";
import LineString from "../src/LineString";
import GeometryCollection from "../src/GeometryCollection";
import Envelope from "../src/Envelope";

describe("test EnvelopeBuilder", () => {
    it ("test default constructor", () => {
        const envb = new EnvelopeBuilder();
        expect(envb.build().isEmpty()).to.equal(true);
    });
    it ("test insert", () => {
        const envb = new EnvelopeBuilder();
        envb.insert([1., 3.]);
        envb.insert([2., 4.]);
        const env = envb.build();
        expect(env.isEmpty()).to.equal(false);
    });
    it ("test build", () => {
        const envb = new EnvelopeBuilder();
        envb.insert([1., 3.]);
        envb.insert([2., 4.]);
        const env = envb.build();
        expect(env.getXmin()).to.equal(1.);
        expect(env.getYmin()).to.equal(3.);
        expect(env.getXmax()).to.equal(2.);
        expect(env.getYmax()).to.equal(4.);
    });
    it ("test build modified", () => {
        const envb = new EnvelopeBuilder();
        envb.insert([1., 3.]);
        envb.insert([2., 4.]);
        const env = envb.build();
        envb.insert([0., 10.]);
        const env2 = envb.build();
        expect(env2.getXmin()).to.equal(0.);
        expect(env2.getYmin()).to.not.equal(4.);
    });
    it ("test visitPoint", () => {
        const envb = new EnvelopeBuilder();
        envb.visitPoint(new Point([1., 3.]));
        const env = envb.build();
        expect(env.getXmin()).to.equal(1.);
        expect(env.getYmin()).to.equal(3.);
    });
    it ("test visitLineString", () => {
        const envb = new EnvelopeBuilder();
        const line = new LineString([
            new Point([1., 8.]),
            new Point([6., 9.])]
        );
        envb.visitLineString(line);
        const env = envb.build();
        expect(env.getXmin()).to.equal(1.);
        expect(env.getYmin()).to.equal(8.);
        expect(env.getXmax()).to.equal(6.);
        expect(env.getYmax()).to.equal(9.);
    });
    it ("test visitGeometryCollection", () => {
        const envb = new EnvelopeBuilder();
        const line = new LineString([
            new Point([1., 8.]),
            new Point([6., 9.])]
        );
        const point = new Point([1., 3.]);
        envb.visitGeometryCollection(new GeometryCollection([point, point, line]));
        const env = envb.build();
        expect(env.getXmin()).to.equal(1.);
        expect(env.getYmin()).to.equal(3.);
        expect(env.getXmax()).to.equal(6.);
        expect(env.getYmax()).to.equal(9.);
    });
});