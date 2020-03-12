export default MultiPolygon;
/**
 * @classdesc
 * Multi-polygon geometry.
 *
 * @api
 */
declare class MultiPolygon extends SimpleGeometry {
    /**
     * @param {Array<Array<Array<import("../coordinate.js").Coordinate>>|Polygon>|Array<number>} coordinates Coordinates.
     *     For internal use, flat coordinates in combination with `opt_layout` and `opt_endss` are also accepted.
     * @param {GeometryLayout=} opt_layout Layout.
     * @param {Array<Array<number>>=} opt_endss Array of ends for internal use with flat coordinates.
     */
    constructor(coordinates: number[] | (number[][][] | Polygon)[], opt_layout?: {
        XY: string;
        XYZ: string;
        XYM: string;
        XYZM: string;
    }, opt_endss?: number[][]);
    /**
     * @type {Array<Array<number>>}
     * @private
     */
    private endss_;
    /**
     * @private
     * @type {number}
     */
    private flatInteriorPointsRevision_;
    /**
     * @private
     * @type {Array<number>}
     */
    private flatInteriorPoints_;
    /**
     * @private
     * @type {number}
     */
    private maxDelta_;
    /**
     * @private
     * @type {number}
     */
    private maxDeltaRevision_;
    /**
     * @private
     * @type {number}
     */
    private orientedRevision_;
    /**
     * @private
     * @type {Array<number>}
     */
    private orientedFlatCoordinates_;
    /**
     * Append the passed polygon to this multipolygon.
     * @param {Polygon} polygon Polygon.
     * @api
     */
    appendPolygon(polygon: Polygon): void;
    /**
     * Make a complete copy of the geometry.
     * @return {!MultiPolygon} Clone.
     * @override
     * @api
     */
    clone(): MultiPolygon;
    /**
     * @inheritDoc
     */
    closestPointXY(x: any, y: any, closestPoint: any, minSquaredDistance: any): any;
    /**
     * @inheritDoc
     */
    containsXY(x: any, y: any): boolean;
    /**
     * Return the area of the multipolygon on projected plane.
     * @return {number} Area (on projected plane).
     * @api
     */
    getArea(): number;
    /**
     * Get the coordinate array for this geometry.  This array has the structure
     * of a GeoJSON coordinate array for multi-polygons.
     *
     * @param {boolean=} opt_right Orient coordinates according to the right-hand
     *     rule (counter-clockwise for exterior and clockwise for interior rings).
     *     If `false`, coordinates will be oriented according to the left-hand rule
     *     (clockwise for exterior and counter-clockwise for interior rings).
     *     By default, coordinate orientation will depend on how the geometry was
     *     constructed.
     * @return {Array<Array<Array<import("../coordinate.js").Coordinate>>>} Coordinates.
     * @override
     * @api
     */
    getCoordinates(opt_right?: boolean): number[][][][];
    /**
     * @return {Array<Array<number>>} Endss.
     */
    getEndss(): number[][];
    /**
     * @return {Array<number>} Flat interior points.
     */
    getFlatInteriorPoints(): number[];
    /**
     * Return the interior points as {@link module:ol/geom/MultiPoint multipoint}.
     * @return {MultiPoint} Interior points as XYM coordinates, where M is
     * the length of the horizontal intersection that the point belongs to.
     * @api
     */
    getInteriorPoints(): MultiPoint;
    /**
     * @return {Array<number>} Oriented flat coordinates.
     */
    getOrientedFlatCoordinates(): number[];
    /**
     * @inheritDoc
     */
    getSimplifiedGeometryInternal(squaredTolerance: any): any;
    /**
     * Return the polygon at the specified index.
     * @param {number} index Index.
     * @return {Polygon} Polygon.
     * @api
     */
    getPolygon(index: number): Polygon;
    /**
     * Return the polygons of this multipolygon.
     * @return {Array<Polygon>} Polygons.
     * @api
     */
    getPolygons(): Polygon[];
    /**
     * @inheritDoc
     * @api
     */
    getType(): string;
    /**
     * @inheritDoc
     * @api
     */
    intersectsExtent(extent: any): boolean;
    /**
     * Set the coordinates of the multipolygon.
     * @param {!Array<Array<Array<import("../coordinate.js").Coordinate>>>} coordinates Coordinates.
     * @param {GeometryLayout=} opt_layout Layout.
     * @override
     * @api
     */
    setCoordinates(coordinates: number[][][][], opt_layout?: {
        XY: string;
        XYZ: string;
        XYM: string;
        XYZM: string;
    }): void;
}
import SimpleGeometry from "./SimpleGeometry.js";
import Polygon from "./Polygon.js";
import MultiPoint from "./MultiPoint.js";
//# sourceMappingURL=MultiPolygon.d.ts.map