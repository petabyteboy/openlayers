export default GeoJSON;
export type GeoJSONObject = import("geojson").Point | import("geojson").MultiPoint | import("geojson").LineString | import("geojson").MultiLineString | import("geojson").Polygon | import("geojson").MultiPolygon | import("geojson").GeometryCollection | import("geojson").Feature<import("geojson").Geometry, {
    [name: string]: any;
}> | import("geojson").FeatureCollection<import("geojson").Geometry, {
    [name: string]: any;
}>;
export type GeoJSONFeature = import("geojson").Feature<import("geojson").Geometry, {
    [name: string]: any;
}>;
export type GeoJSONFeatureCollection = import("geojson").FeatureCollection<import("geojson").Geometry, {
    [name: string]: any;
}>;
export type GeoJSONGeometry = import("geojson").Point | import("geojson").MultiPoint | import("geojson").LineString | import("geojson").MultiLineString | import("geojson").Polygon | import("geojson").MultiPolygon | import("geojson").GeometryCollection;
export type GeoJSONPoint = import("geojson").Point;
export type GeoJSONLineString = import("geojson").LineString;
export type GeoJSONPolygon = import("geojson").Polygon;
export type GeoJSONMultiPoint = import("geojson").MultiPoint;
export type GeoJSONMultiLineString = import("geojson").MultiLineString;
export type GeoJSONMultiPolygon = import("geojson").MultiPolygon;
export type GeoJSONGeometryCollection = import("geojson").GeometryCollection;
export type Options = {
    /**
     * Default data projection.
     */
    dataProjection?: string | import("../proj/Projection.js").default;
    /**
     * Projection for features read or
     * written by the format.  Options passed to read or write methods will take precedence.
     */
    featureProjection?: string | import("../proj/Projection.js").default;
    /**
     * Geometry name to use when creating features.
     */
    geometryName?: string;
    /**
     * Certain GeoJSON providers include
     * the geometry_name field in the feature GeoJSON. If set to `true` the GeoJSON reader
     * will look for that field to set the geometry name. If both this field is set to `true`
     * and a `geometryName` is provided, the `geometryName` will take precedence.
     */
    extractGeometryName?: boolean;
};
/**
 * @typedef {import("geojson").GeoJSON} GeoJSONObject
 * @typedef {import("geojson").Feature} GeoJSONFeature
 * @typedef {import("geojson").FeatureCollection} GeoJSONFeatureCollection
 * @typedef {import("geojson").Geometry} GeoJSONGeometry
 * @typedef {import("geojson").Point} GeoJSONPoint
 * @typedef {import("geojson").LineString} GeoJSONLineString
 * @typedef {import("geojson").Polygon} GeoJSONPolygon
 * @typedef {import("geojson").MultiPoint} GeoJSONMultiPoint
 * @typedef {import("geojson").MultiLineString} GeoJSONMultiLineString
 * @typedef {import("geojson").MultiPolygon} GeoJSONMultiPolygon
 * @typedef {import("geojson").GeometryCollection} GeoJSONGeometryCollection
 */
/**
 * @typedef {Object} Options
 * @property {import("../proj.js").ProjectionLike} [dataProjection='EPSG:4326'] Default data projection.
 * @property {import("../proj.js").ProjectionLike} [featureProjection] Projection for features read or
 * written by the format.  Options passed to read or write methods will take precedence.
 * @property {string} [geometryName] Geometry name to use when creating features.
 * @property {boolean} [extractGeometryName=false] Certain GeoJSON providers include
 * the geometry_name field in the feature GeoJSON. If set to `true` the GeoJSON reader
 * will look for that field to set the geometry name. If both this field is set to `true`
 * and a `geometryName` is provided, the `geometryName` will take precedence.
 */
/**
 * @classdesc
 * Feature format for reading and writing data in the GeoJSON format.
 *
  * @api
 */
declare class GeoJSON extends JSONFeature {
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
     * Look for the geometry name in the feature GeoJSON
     * @type {boolean|undefined}
     * @private
     */
    private extractGeometryName_;
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
     * Encode a feature as a GeoJSON Feature object.
     *
     * @param {import("../Feature.js").default} feature Feature.
     * @param {import("./Feature.js").WriteOptions=} opt_options Write options.
     * @return {GeoJSONFeature} Object.
     * @override
     * @api
     */
    writeFeatureObject(feature: Feature<any>, opt_options?: import("./Feature.js").WriteOptions): import("geojson").Feature<import("geojson").Geometry, {
        [name: string]: any;
    }>;
    /**
     * Encode an array of features as a GeoJSON object.
     *
     * @param {Array<import("../Feature.js").default>} features Features.
     * @param {import("./Feature.js").WriteOptions=} opt_options Write options.
     * @return {GeoJSONFeatureCollection} GeoJSON Object.
     * @override
     * @api
     */
    writeFeaturesObject(features: Feature<any>[], opt_options?: import("./Feature.js").WriteOptions): import("geojson").FeatureCollection<import("geojson").Geometry, {
        [name: string]: any;
    }>;
    /**
     * Encode a geometry as a GeoJSON object.
     *
     * @param {import("../geom/Geometry.js").default} geometry Geometry.
     * @param {import("./Feature.js").WriteOptions=} opt_options Write options.
     * @return {GeoJSONGeometry|GeoJSONGeometryCollection} Object.
     * @override
     * @api
     */
    writeGeometryObject(geometry: import("../geom/Geometry.js").default, opt_options?: import("./Feature.js").WriteOptions): import("geojson").Geometry;
}
import JSONFeature from "./JSONFeature.js";
import Feature_1 from "../Feature.js";
//# sourceMappingURL=GeoJSON.d.ts.map