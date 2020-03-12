/**
 * Encode a list of n-dimensional points and return an encoded string
 *
 * Attention: This function will modify the passed array!
 *
 * @param {Array<number>} numbers A list of n-dimensional points.
 * @param {number} stride The number of dimension of the points in the list.
 * @param {number=} opt_factor The factor by which the numbers will be
 *     multiplied. The remaining decimal places will get rounded away.
 *     Default is `1e5`.
 * @return {string} The encoded string.
 * @api
 */
export function encodeDeltas(numbers: number[], stride: number, opt_factor?: number): string;
/**
 * Decode a list of n-dimensional points from an encoded string
 *
 * @param {string} encoded An encoded string.
 * @param {number} stride The number of dimension of the points in the
 *     encoded string.
 * @param {number=} opt_factor The factor by which the resulting numbers will
 *     be divided. Default is `1e5`.
 * @return {Array<number>} A list of n-dimensional points.
 * @api
 */
export function decodeDeltas(encoded: string, stride: number, opt_factor?: number): number[];
/**
 * Encode a list of floating point numbers and return an encoded string
 *
 * Attention: This function will modify the passed array!
 *
 * @param {Array<number>} numbers A list of floating point numbers.
 * @param {number=} opt_factor The factor by which the numbers will be
 *     multiplied. The remaining decimal places will get rounded away.
 *     Default is `1e5`.
 * @return {string} The encoded string.
 * @api
 */
export function encodeFloats(numbers: number[], opt_factor?: number): string;
/**
 * Decode a list of floating point numbers from an encoded string
 *
 * @param {string} encoded An encoded string.
 * @param {number=} opt_factor The factor by which the result will be divided.
 *     Default is `1e5`.
 * @return {Array<number>} A list of floating point numbers.
 * @api
 */
export function decodeFloats(encoded: string, opt_factor?: number): number[];
/**
 * Encode a list of signed integers and return an encoded string
 *
 * Attention: This function will modify the passed array!
 *
 * @param {Array<number>} numbers A list of signed integers.
 * @return {string} The encoded string.
 */
export function encodeSignedIntegers(numbers: number[]): string;
/**
 * Decode a list of signed integers from an encoded string
 *
 * @param {string} encoded An encoded string.
 * @return {Array<number>} A list of signed integers.
 */
export function decodeSignedIntegers(encoded: string): number[];
/**
 * Encode a list of unsigned integers and return an encoded string
 *
 * @param {Array<number>} numbers A list of unsigned integers.
 * @return {string} The encoded string.
 */
export function encodeUnsignedIntegers(numbers: number[]): string;
/**
 * Decode a list of unsigned integers from an encoded string
 *
 * @param {string} encoded An encoded string.
 * @return {Array<number>} A list of unsigned integers.
 */
export function decodeUnsignedIntegers(encoded: string): number[];
/**
 * Encode one single unsigned integer and return an encoded string
 *
 * @param {number} num Unsigned integer that should be encoded.
 * @return {string} The encoded string.
 */
export function encodeUnsignedInteger(num: number): string;
export default Polyline;
export type Options = {
    /**
     * The factor by which the coordinates values will be scaled.
     */
    factor?: number;
    /**
     * Layout of the
     * feature geometries created by the format reader.
     */
    geometryLayout?: {
        XY: string;
        XYZ: string;
        XYM: string;
        XYZM: string;
    };
};
/**
 * @typedef {Object} Options
 * @property {number} [factor=1e5] The factor by which the coordinates values will be scaled.
 * @property {GeometryLayout} [geometryLayout='XY'] Layout of the
 * feature geometries created by the format reader.
 */
/**
 * @classdesc
 * Feature format for reading and writing data in the Encoded
 * Polyline Algorithm Format.
 *
 * When reading features, the coordinates are assumed to be in two dimensions
 * and in [latitude, longitude] order.
 *
 * As Polyline sources contain a single feature,
 * {@link module:ol/format/Polyline~Polyline#readFeatures} will return the
 * feature in an array.
 *
 * @api
 */
declare class Polyline extends TextFeature {
    /**
     * @param {Options=} opt_options Optional configuration object.
     */
    constructor(opt_options?: Options);
    /**
     * @private
     * @type {number}
     */
    private factor_;
    /**
     * @private
     * @type {GeometryLayout}
     */
    private geometryLayout_;
    /**
     * @inheritDoc
     */
    readFeatureFromText(text: any, opt_options: any): Feature<import("../geom/Geometry.js").default>;
    /**
     * @inheritDoc
     */
    readFeaturesFromText(text: any, opt_options: any): Feature<import("../geom/Geometry.js").default>[];
    /**
     * @inheritDoc
     */
    readGeometryFromText(text: any, opt_options: any): import("../geom/Geometry.js").default;
    /**
     * @inheritDoc
     */
    writeFeatureText(feature: any, opt_options: any): string;
    /**
     * @inheritDoc
     */
    writeFeaturesText(features: any, opt_options: any): string;
    /**
     * @inheritDoc
     */
    writeGeometryText(geometry: any, opt_options: any): string;
}
import TextFeature from "./TextFeature.js";
import Feature from "../Feature.js";
//# sourceMappingURL=Polyline.d.ts.map