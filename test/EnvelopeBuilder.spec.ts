import "mocha";
import { expect } from "chai";
import EnvelopeBuilder from "../src/EnvelopeBuilder";

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
});