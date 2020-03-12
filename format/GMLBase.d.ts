/**
 * @const
 * @type {string}
 */
export const GMLNS: string;
export default GMLBase;
export type Options = {
    /**
     * Feature
     * namespace. If not defined will be derived from GML. If multiple
     * feature types have been configured which come from different feature
     * namespaces, this will be an object with the keys being the prefixes used
     * in the entries of featureType array. The values of the object will be the
     * feature namespaces themselves. So for instance there might be a featureType
     * item `topp:states` in the `featureType` array and then there will be a key
     * `topp` in the featureNS object with value `http://www.openplans.org/topp`.
     */
    featureNS?: string | {
        [x: string]: string;
    };
    /**
     * Feature type(s) to parse.
     * If multiple feature types need to be configured
     * which come from different feature namespaces, `featureNS` will be an object
     * with the keys being the prefixes used in the entries of featureType array.
     * The values of the object will be the feature namespaces themselves.
     * So for instance there might be a featureType item `topp:states` and then
     * there will be a key named `topp` in the featureNS object with value
     * `http://www.openplans.org/topp`.
     */
    featureType?: string | string[];
    /**
     * srsName to use when writing geometries.
     */
    srsName: string;
    /**
     * Write gml:Surface instead of gml:Polygon
     * elements. This also affects the elements in multi-part geometries.
     */
    surface?: boolean;
    /**
     * Write gml:Curve instead of gml:LineString
     * elements. This also affects the elements in multi-part geometries.
     */
    curve?: boolean;
    /**
     * Write gml:MultiCurve instead of gml:MultiLineString.
     * Since the latter is deprecated in GML 3.
     */
    multiCurve?: boolean;
    /**
     * Write gml:multiSurface instead of
     * gml:MultiPolygon. Since the latter is deprecated in GML 3.
     */
    multiSurface?: boolean;
    /**
     * Optional schemaLocation to use when
     * writing out the GML, this will override the default provided.
     */
    schemaLocation?: string;
    /**
     * If coordinates have a Z value.
     */
    hasZ?: boolean;
};
/**
 * @typedef {Object} Options
 * @property {Object<string, string>|string} [featureNS] Feature
 * namespace. If not defined will be derived from GML. If multiple
 * feature types have been configured which come from different feature
 * namespaces, this will be an object with the keys being the prefixes used
 * in the entries of featureType array. The values of the object will be the
 * feature namespaces themselves. So for instance there might be a featureType
 * item `topp:states` in the `featureType` array and then there will be a key
 * `topp` in the featureNS object with value `http://www.openplans.org/topp`.
 * @property {Array<string>|string} [featureType] Feature type(s) to parse.
 * If multiple feature types need to be configured
 * which come from different feature namespaces, `featureNS` will be an object
 * with the keys being the prefixes used in the entries of featureType array.
 * The values of the object will be the feature namespaces themselves.
 * So for instance there might be a featureType item `topp:states` and then
 * there will be a key named `topp` in the featureNS object with value
 * `http://www.openplans.org/topp`.
 * @property {string} srsName srsName to use when writing geometries.
 * @property {boolean} [surface=false] Write gml:Surface instead of gml:Polygon
 * elements. This also affects the elements in multi-part geometries.
 * @property {boolean} [curve=false] Write gml:Curve instead of gml:LineString
 * elements. This also affects the elements in multi-part geometries.
 * @property {boolean} [multiCurve=true] Write gml:MultiCurve instead of gml:MultiLineString.
 * Since the latter is deprecated in GML 3.
 * @property {boolean} [multiSurface=true] Write gml:multiSurface instead of
 * gml:MultiPolygon. Since the latter is deprecated in GML 3.
 * @property {string} [schemaLocation] Optional schemaLocation to use when
 * writing out the GML, this will override the default provided.
 * @property {boolean} [hasZ=false] If coordinates have a Z value.
 */
/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Feature base format for reading and writing data in the GML format.
 * This class cannot be instantiated, it contains only base content that
 * is shared with versioned format classes GML2 and GML3.
 *
 * @abstract
 */
declare class GMLBase extends XMLFeature {
    /**
     * @param {Options=} opt_options Optional configuration object.
     */
    constructor(opt_options?: Options);
    /**
     * @protected
     * @type {Array<string>|string|undefined}
     */
    protected featureType: Array<string> | string | undefined;
    /**
     * @protected
     * @type {Object<string, string>|string|undefined}
     */
    protected featureNS: {
        [x: string]: string;
    } | string | undefined;
    /**
     * @protected
     * @type {string}
     */
    protected srsName: string;
    /**
     * @protected
     * @type {string}
     */
    protected schemaLocation: string;
    /**
     * @type {Object<string, Object<string, Object>>}
     */
    FEATURE_COLLECTION_PARSERS: {
        [x: string]: {
            [x: string]: Object;
        };
    };
    /**
     * @param {Element} node Node.
     * @param {Array<*>} objectStack Object stack.
     * @return {Array<Feature> | undefined} Features.
     */
    readFeaturesInternal(node: Element, objectStack: any[]): Feature<any>[];
    /**
     * @param {Element} node Node.
     * @param {Array<*>} objectStack Object stack.
     * @return {import("../geom/Geometry.js").default|import("../extent.js").Extent|undefined} Geometry.
     */
    readGeometryElement(node: Element, objectStack: any[]): number[] | import("../geom/Geometry.js").default;
    /**
     * @param {Element} node Node.
     * @param {Array<*>} objectStack Object stack.
     * @param {boolean} asFeature whether result should be wrapped as a feature.
     * @return {Feature|Object} Feature
     */
    readFeatureElementInternal(node: Element, objectStack: any[], asFeature: boolean): any;
    /**
     * @param {Element} node Node.
     * @param {Array<*>} objectStack Object stack.
     * @return {Feature} Feature.
     */
    readFeatureElement(node: Element, objectStack: any[]): Feature<any>;
    /**
     * @param {Element} node Node.
     * @param {Array<*>} objectStack Object stack.
     * @return {Point|undefined} Point.
     */
    readPoint(node: Element, objectStack: any[]): Point;
    /**
     * @param {Element} node Node.
     * @param {Array<*>} objectStack Object stack.
     * @return {MultiPoint|undefined} MultiPoint.
     */
    readMultiPoint(node: Element, objectStack: any[]): MultiPoint;
    /**
     * @param {Element} node Node.
     * @param {Array<*>} objectStack Object stack.
     * @return {MultiLineString|undefined} MultiLineString.
     */
    readMultiLineString(node: Element, objectStack: any[]): MultiLineString;
    /**
     * @param {Element} node Node.
     * @param {Array<*>} objectStack Object stack.
     * @return {MultiPolygon|undefined} MultiPolygon.
     */
    readMultiPolygon(node: Element, objectStack: any[]): MultiPolygon;
    /**
     * @param {Element} node Node.
     * @param {Array<*>} objectStack Object stack.
     * @private
     */
    private pointMemberParser_;
    /**
     * @param {Element} node Node.
     * @param {Array<*>} objectStack Object stack.
     * @private
     */
    private lineStringMemberParser_;
    /**
     * @param {Element} node Node.
     * @param {Array<*>} objectStack Object stack.
     * @private
     */
    private polygonMemberParser_;
    /**
     * @param {Element} node Node.
     * @param {Array<*>} objectStack Object stack.
     * @return {LineString|undefined} LineString.
     */
    readLineString(node: Element, objectStack: any[]): LineString;
    /**
     * @param {Element} node Node.
     * @param {Array<*>} objectStack Object stack.
     * @private
     * @return {Array<number>|undefined} LinearRing flat coordinates.
     */
    private readFlatLinearRing_;
    /**
     * @param {Element} node Node.
     * @param {Array<*>} objectStack Object stack.
     * @return {LinearRing|undefined} LinearRing.
     */
    readLinearRing(node: Element, objectStack: any[]): LinearRing;
    /**
     * @param {Element} node Node.
     * @param {Array<*>} objectStack Object stack.
     * @return {Polygon|undefined} Polygon.
     */
    readPolygon(node: Element, objectStack: any[]): Polygon;
    /**
     * @param {Element} node Node.
     * @param {Array<*>} objectStack Object stack.
     * @private
     * @return {Array<number>} Flat coordinates.
     */
    private readFlatCoordinatesFromNode_;
    /**
     * @inheritDoc
     */
    readGeometryFromNode(node: any, opt_options: any): number[] | import("../geom/Geometry.js").default;
    /**
     * @inheritDoc
     */
    readFeaturesFromNode(node: any, opt_options: any): Feature<any>[];
    /**
     * @inheritDoc
     */
    readProjectionFromNode(node: any): import("../proj/Projection.js").default;
    namespace: string;
    /**
     * @const
     * @type {Object<string, Object<string, import("../xml.js").Parser>>}
     * @protected
     */
    protected FLAT_LINEAR_RINGS_PARSERS: {
        [x: string]: {
            [x: string]: import("../xml.js").Parser;
        };
    };
    /**
     * @const
     * @type {Object<string, Object<string, import("../xml.js").Parser>>}
     * @protected
     */
    protected GEOMETRY_FLAT_COORDINATES_PARSERS: {
        [x: string]: {
            [x: string]: import("../xml.js").Parser;
        };
    };
    /**
     * @const
     * @type {Object<string, Object<string, import("../xml.js").Parser>>}
     * @protected
     */
    protected GEOMETRY_PARSERS: {
        [x: string]: {
            [x: string]: import("../xml.js").Parser;
        };
    };
    /**
     * @const
     * @type {Object<string, Object<string, import("../xml.js").Parser>>}
     * @private
     */
    private MULTIPOINT_PARSERS_;
    /**
     * @const
     * @type {Object<string, Object<string, import("../xml.js").Parser>>}
     * @private
     */
    private MULTILINESTRING_PARSERS_;
    /**
     * @const
     * @type {Object<string, Object<string, import("../xml.js").Parser>>}
     * @private
     */
    private MULTIPOLYGON_PARSERS_;
    /**
     * @const
     * @type {Object<string, Object<string, import("../xml.js").Parser>>}
     * @private
     */
    private POINTMEMBER_PARSERS_;
    /**
     * @const
     * @type {Object<string, Object<string, import("../xml.js").Parser>>}
     * @private
     */
    private LINESTRINGMEMBER_PARSERS_;
    /**
     * @const
     * @type {Object<string, Object<string, import("../xml.js").Parser>>}
     * @private
     */
    private POLYGONMEMBER_PARSERS_;
    /**
     * @const
     * @type {Object<string, Object<string, import("../xml.js").Parser>>}
     * @protected
     */
    protected RING_PARSERS: {
        [x: string]: {
            [x: string]: import("../xml.js").Parser;
        };
    };
}
import XMLFeature from "./XMLFeature.js";
import Feature from "../Feature.js";
import Point from "../geom/Point.js";
import MultiPoint from "../geom/MultiPoint.js";
import MultiLineString from "../geom/MultiLineString.js";
import MultiPolygon from "../geom/MultiPolygon.js";
import LineString from "../geom/LineString.js";
import LinearRing from "../geom/LinearRing.js";
import Polygon from "../geom/Polygon.js";
//# sourceMappingURL=GMLBase.d.ts.map