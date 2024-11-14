import "mocha";
import { expect } from "chai";
import Envelope from "../src/Envelope";

describe("test Envelope", () => {
    it ("test default constructor", ()=>{
        const env = new Envelope();
        expect(env.isEmpty()).to.equal(true);
    });
    it ("test constructor with points", ()=>{
        const env = new Envelope([1., 3.], [2., 4.]);
        expect(env.isEmpty()).to.equal(false);
    });
    it ("test getters", ()=>{
        const env = new Envelope([1., 3.], [2., 4.]);
        expect(env.getXmin()).to.equal(1.);
        expect(env.getYmin()).to.equal(3.);
        expect(env.getXmax()).to.equal(2.);
        expect(env.getYmax()).to.equal(4.);
    });
    it ("test toString", ()=>{
        const env = new Envelope([1., 3.], [2., 4.]);
        expect(env.toString()).to.equal("Voci l'emprise de la bbox: \n        (1, 3,\n        2, 4)");
    });
})