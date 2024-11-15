import Geometry from "./Geometry";
import Point from "./Point";
import LineString from "./LineString";

export default class WktWriter {

    write (geometry?: Geometry) : string {
        if ( geometry instanceof Point ){
            return geometry.getType().toUpperCase() + "(" + geometry.x().toFixed(1) + " " + geometry.y().toFixed(1) + ")";
        }else if ( geometry instanceof LineString ){
            let wkt = "";
            for (let i = 0; i < geometry.getNumPoints(); i++){
            const point = geometry.getPointN(i);
            wkt += point.x().toFixed(1) + " " + point.y().toFixed(1);
            if (i < geometry.getNumPoints() - 1){
                wkt += ",";
            }
            }
            return geometry.getType().toUpperCase() + "(" + wkt + ")";
        }else{
            throw new TypeError("geometry type not supported");
        }
    }
}