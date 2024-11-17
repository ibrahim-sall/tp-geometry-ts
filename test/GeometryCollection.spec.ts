import { expect } from 'chai';
import 'mocha';
import GeometryCollection from '../src/GeometryCollection';
import LineString from '../src/LineString';
import Point from '../src/Point';



describe('Test GeometryCollection', () => {
    let collection: GeometryCollection;

    before(() => {
        const point1 = new Point([1, 2]);
        const point2 = new Point([3, 4]);
        const lineString = new LineString([point1, point2]);
        const geometries = [point1, point2, lineString];
        collection = new GeometryCollection(geometries);
    });
    it('should return the correct number of geometries', () => {

        expect(collection.getNumGeometries()).to.equal(3);
    });

    it('should return the correct geometry at index', () => {
        expect(collection.getGeometryN(1)).to.deep.equal(new Point([3, 4]));
    });

    it('should return undefined for out of bounds index', () => {
        const collection = new GeometryCollection();
        expect(collection.getGeometryN(2)).to.be.undefined;
    });

    it('should return the correct type', () => {
        const collection = new GeometryCollection();
        expect(collection.getType()).to.equal('GeometryCollection');
    });

    it('should return true if empty', () => {
        const collection = new GeometryCollection();
        expect(collection.isEmpty()).to.be.true;
    });

    it('should return false if not empty', () => {
        expect(collection.isEmpty()).to.be.false;
    });

    it('should translate all geometries', () => {
        const point1 = new Point([1, 2]);
        const point2 = new Point([3, 4]);
        const collection = new GeometryCollection([point1, point2]);

        collection.translate(1, 1);

        expect(collection.getGeometryN(0)).to.deep.equal(new Point([2, 3]));
    });

    it('should clone all geometries', () => {
        const clonedCollection = collection.clone() as GeometryCollection;
        expect(clonedCollection.getNumGeometries()).to.equal(3);
        expect(clonedCollection.getGeometryN(0)).to.deep.equal(collection.getGeometryN(0));
        clonedCollection.translate(1, 1);
        expect(clonedCollection.getGeometryN(0)).to.not.equal(collection.getGeometryN(0));
    });
});