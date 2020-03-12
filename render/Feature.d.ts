export default RenderFeature;
/**
 * Lightweight, read-only, {@link module:ol/Feature~Feature} and {@link module:ol/geom/Geometry~Geometry} like
 * structure, optimized for vector tile rendering and styling. Geometry access
 * through the API is limited to getting the type and extent of the geometry.
 */
declare class RenderFeature {
    /**
     * @param {GeometryType} type Geometry type.
     * @param {Array<number>} flatCoordinates Flat coordinates. These always need
     *     to be right-handed for polygons.
     * @param {Array<number>|Array<Array<number>>} ends Ends or Endss.
     * @param {Object<string, *>} properties Properties.
     * @param {number|string|undefined} id Feature id.
     */
    constructor(type: {
        POINT: string;
        LINE_STRING: string;
        LINEAR_RING: string;
        POLYGON: string;
        MULTI_POINT: string;
        MULTI_LINE_STRING: string;
        MULTI_POLYGON: string;
        GEOMETRY_COLLECTION: string;
        CIRCLE: string;
    }, flatCoordinates: number[], ends: number[] | number[][], properties: {
        [x: string]: any;
    }, id: string | number);
    /**
     * @private
     * @type {import("../extent.js").Extent|undefined}
     */
    private extent_;
    /**
     * @private
     * @type {number|string|undefined}
     */
    private id_;
    /**
     * @private
     * @type {GeometryType}
     */
    private type_;
    /**
     * @private
     * @type {Array<number>}
     */
    private flatCoordinates_;
    /**
     * @private
     * @type {Array<number>}
     */
    private flatInteriorPoints_;
    /**
     * @private
     * @type {Array<number>}
     */
    private flatMidpoints_;
    /**
     * @private
     * @type {Array<number>|Array<Array<number>>}
     */
    private ends_;
    /**
     * @private
     * @type {Object<string, *>}
     */
    private properties_;
    /**
     * Get a feature property by its key.
     * @param {string} key Key
     * @return {*} Value for the requested key.
     * @api
     */
    get(key: string): any;
    /**
     * Get the extent of this feature's geometry.
     * @return {import("../extent.js").Extent} Extent.
     * @api
     */
    getExtent(): number[];
    /**
     * @return {Array<number>} Flat interior points.
     */
    getFlatInteriorPoint(): number[];
    /**
     * @return {Array<number>} Flat interior points.
     */
    getFlatInteriorPoints(): number[];
    /**
     * @return {Array<number>} Flat midpoint.
     */
    getFlatMidpoint(): number[];
    /**
     * @return {Array<number>} Flat midpoints.
     */
    getFlatMidpoints(): number[];
    /**
     * Get the feature identifier.  This is a stable identifier for the feature and
     * is set when reading data from a remote source.
     * @return {number|string|undefined} Id.
     * @api
     */
    getId(): string | number;
    /**
     * @return {Array<number>} Flat coordinates.
     */
    getOrientedFlatCoordinates(): number[];
    /**
     * For API compatibility with {@link module:ol/Feature~Feature}, this method is useful when
     * determining the geometry type in style function (see {@link #getType}).
     * @return {RenderFeature} Feature.
     * @api
     */
    getGeometry(): RenderFeature;
    /**
     * @param {number} squaredTolerance Squared tolerance.
     * @return {RenderFeature} Simplified geometry.
     */
    getSimplifiedGeometry(squaredTolerance: number): RenderFeature;
    /**
     * Get a transformed and simplified version of the geometry.
     * @abstract
     * @param {number} squaredTolerance Squared tolerance.
     * @param {import("../proj.js").TransformFunction} [opt_transform] Optional transform function.
     * @return {RenderFeature} Simplified geometry.
     */
    simplifyTransformed(squaredTolerance: number, opt_transform?: (arg0: number[], arg1?: number[], arg2?: number) => number[]): RenderFeature;
    /**
     * Get the feature properties.
     * @return {Object<string, *>} Feature properties.
     * @api
     */
    getProperties(): {
        [x: string]: any;
    };
    /**
     * @return {number} Stride.
     */
    getStride(): number;
    /**
     * @return {undefined}
     */
    getStyleFunction(): undefined;
    /**
     * Get the type of this feature's geometry.
     * @return {GeometryType} Geometry type.
     * @api
     */
    getType(): {
        POINT: string;
        LINE_STRING: string;
        LINEAR_RING: string;
        POLYGON: string;
        MULTI_POINT: string;
        MULTI_LINE_STRING: string;
        MULTI_POLYGON: string;
        GEOMETRY_COLLECTION: string;
        CIRCLE: string;
    };
    /**
     * Transform geometry coordinates from tile pixel space to projected.
     * The SRS of the source and destination are expected to be the same.
     *
     * @param {import("../proj.js").ProjectionLike} source The current projection
     * @param {import("../proj.js").ProjectionLike} destination The desired projection.
     */
    transform(source: string | import("../proj/Projection.js").default, destination: string | import("../proj/Projection.js").default): void;
    getEnds(): number[] | number[][];
    getEndss: () => number[] | number[][];
    /**
     * @return {Array<number>} Flat coordinates.
     */
    getFlatCoordinates: () => number[];
}
//# sourceMappingURL=Feature.d.ts.map