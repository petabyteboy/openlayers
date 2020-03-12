export default EsriJSON;
export type EsriJSONFeature = import("arcgis-rest-api").Feature;
export type EsriJSONFeatureSet = import("arcgis-rest-api").FeatureSet;
export type EsriJSONGeometry = import("arcgis-rest-api").Geometry;
export type EsriJSONPoint = import("arcgis-rest-api").Point;
export type EsriJSONPolyline = import("arcgis-rest-api").Polyline;
export type EsriJSONPolygon = import("arcgis-rest-api").Polygon;
export type EsriJSONMultipoint = import("arcgis-rest-api").Multipoint;
export type EsriJSONHasZM = import("arcgis-rest-api").HasZM;
export type EsriJSONPosition = import("arcgis-rest-api").Position2D | [number, number, number] | [number, number, number, number];
export type EsriJSONSpatialReferenceWkid = import("arcgis-rest-api").SpatialReferenceWkid;
export type EsriJSONMultiPolygon = {
    /**
     * Rings for the MultiPolygon.
     */
    rings: number[][][][];
    /**
     * If the polygon coordinates have an M value.
     */
    hasM?: boolean;
    /**
     * If the polygon coordinates have a Z value.
     */
    hasZ?: boolean;
    /**
     * The coordinate reference system.
     */
    spatialReference?: import("arcgis-rest-api").SpatialReferenceWkid;
};
export type Options = {
    /**
     * Geometry name to use when creating features.
     */
    geometryName?: string;
};
/**
 * @typedef {Object} Options
 * @property {string} [geometryName] Geometry name to use when creating features.
 */
/**
 * @classdesc
 * Feature format for reading and writing data in the EsriJSON format.
 *
 * @api
 */
declare class EsriJSON extends JSONFeature {
    /**
     * @param {Options=} opt_options Options.
     */
    constructor(opt_options?: Options);
    /**
     * Name of the geometry attribute for features.
     * @type {string|undefined}
     * @private
     */
    private geometryName_;
    /**
     * @inheritDoc
     */
    readFeatureFromObject(object: any, opt_options: any): Feature<import("../geom/Geometry.js").default>;
    /**
     * @inheritDoc
     */
    readFeaturesFromObject(object: any, opt_options: any): Feature<any>[];
    /**
     * @inheritDoc
     */
    readGeometryFromObject(object: any, opt_options: any): import("../geom/Geometry.js").default;
    /**
     * @inheritDoc
     */
    readProjectionFromObject(object: any): import("../proj/Projection.js").default;
    /**
     * Encode a geometry as a EsriJSON object.
     *
     * @param {import("../geom/Geometry.js").default} geometry Geometry.
     * @param {import("./Feature.js").WriteOptions=} opt_options Write options.
     * @return {EsriJSONGeometry} Object.
     * @override
     * @api
     */
    writeGeometryObject(geometry: import("../geom/Geometry.js").default, opt_options?: import("./Feature.js").WriteOptions): import("arcgis-rest-api").Geometry;
    /**
     * Encode an array of features as a EsriJSON object.
     *
     * @param {Array<import("../Feature.js").default>} features Features.
     * @param {import("./Feature.js").WriteOptions=} opt_options Write options.
     * @return {EsriJSONFeatureSet} EsriJSON Object.
     * @override
     * @api
     */
    writeFeaturesObject(features: Feature<any>[], opt_options?: import("./Feature.js").WriteOptions): import("arcgis-rest-api").FeatureSet;
}
import JSONFeature from "./JSONFeature.js";
import Feature_1 from "../Feature.js";
//# sourceMappingURL=EsriJSON.d.ts.map