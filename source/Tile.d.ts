/**
 * @classdesc
 * Events emitted by {@link module:ol/source/Tile~TileSource} instances are instances of this
 * type.
 */
export class TileSourceEvent extends Event {
    /**
     * @param {string} type Type.
     * @param {import("../Tile.js").default} tile The tile.
     */
    constructor(type: string, tile: import("../Tile.js").default);
    /**
     * The tile related to the event.
     * @type {import("../Tile.js").default}
     * @api
     */
    tile: import("../Tile.js").default;
}
export default TileSource;
export type Options = {
    attributions?: string | string[] | ((arg0: import("../PluggableMap.js").FrameState) => string | string[]);
    /**
     * Attributions are collapsible.
     */
    attributionsCollapsible?: boolean;
    cacheSize?: number;
    opaque?: boolean;
    tilePixelRatio?: number;
    projection?: string | import("../proj/Projection.js").default;
    state?: any;
    tileGrid?: import("../tilegrid/TileGrid.js").default;
    wrapX?: boolean;
    transition?: number;
    key?: string;
    zDirection?: number;
};
import Event from "../events/Event.js";
/**
 * @typedef {Object} Options
 * @property {import("./Source.js").AttributionLike} [attributions]
 * @property {boolean} [attributionsCollapsible=true] Attributions are collapsible.
 * @property {number} [cacheSize]
 * @property {boolean} [opaque]
 * @property {number} [tilePixelRatio]
 * @property {import("../proj.js").ProjectionLike} [projection]
 * @property {import("./State.js").default} [state]
 * @property {import("../tilegrid/TileGrid.js").default} [tileGrid]
 * @property {boolean} [wrapX=true]
 * @property {number} [transition]
 * @property {string} [key]
 * @property {number} [zDirection=0]
 */
/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Base class for sources providing images divided into a tile grid.
 * @abstract
 * @api
 */
declare class TileSource extends Source {
    /**
     * @param {Options} options SourceTile source options.
     */
    constructor(options: Options);
    /**
     * @private
     * @type {boolean}
     */
    private opaque_;
    /**
     * @private
     * @type {number}
     */
    private tilePixelRatio_;
    /**
     * @protected
     * @type {import("../tilegrid/TileGrid.js").default}
     */
    protected tileGrid: import("../tilegrid/TileGrid.js").default;
    /**
     * @protected
     * @type {import("../TileCache.js").default}
     */
    protected tileCache: import("../TileCache.js").default;
    /**
     * @protected
     * @type {import("../size.js").Size}
     */
    protected tmpSize: import("../size.js").Size;
    /**
     * @private
     * @type {string}
     */
    private key_;
    /**
     * @protected
     * @type {import("../Tile.js").Options}
     */
    protected tileOptions: import("../Tile.js").Options;
    /**
     * zDirection hint, read by the renderer. Indicates which resolution should be used
     * by a renderer if the views resolution does not match any resolution of the tile source.
     * If 0, the nearest resolution will be used. If 1, the nearest lower resolution
     * will be used. If -1, the nearest higher resolution will be used.
     * @type {number}
     */
    zDirection: number;
    /**
     * @return {boolean} Can expire cache.
     */
    canExpireCache(): boolean;
    /**
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @param {!Object<string, boolean>} usedTiles Used tiles.
     */
    expireCache(projection: import("../proj/Projection.js").default, usedTiles: {
        [x: string]: boolean;
    }): void;
    /**
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @param {number} z Zoom level.
     * @param {import("../TileRange.js").default} tileRange Tile range.
     * @param {function(import("../Tile.js").default):(boolean|void)} callback Called with each
     *     loaded tile.  If the callback returns `false`, the tile will not be
     *     considered loaded.
     * @return {boolean} The tile range is fully covered with loaded tiles.
     */
    forEachLoadedTile(projection: import("../proj/Projection.js").default, z: number, tileRange: import("../TileRange.js").default, callback: (arg0: import("../Tile.js").default) => boolean | void): boolean;
    /**
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {number} Gutter.
     */
    getGutterForProjection(projection: import("../proj/Projection.js").default): number;
    /**
     * Return the key to be used for all tiles in the source.
     * @return {string} The key for all tiles.
     * @protected
     */
    protected getKey(): string;
    /**
     * Set the value to be used as the key for all tiles in the source.
     * @param {string} key The key for tiles.
     * @protected
     */
    protected setKey(key: string): void;
    /**
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {boolean} Opaque.
     */
    getOpaque(projection: import("../proj/Projection.js").default): boolean;
    /**
     * @abstract
     * @param {number} z Tile coordinate z.
     * @param {number} x Tile coordinate x.
     * @param {number} y Tile coordinate y.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {!import("../Tile.js").default} Tile.
     */
    getTile(z: number, x: number, y: number, pixelRatio: number, projection: import("../proj/Projection.js").default): import("../Tile.js").default;
    /**
     * Return the tile grid of the tile source.
     * @return {import("../tilegrid/TileGrid.js").default} Tile grid.
     * @api
     */
    getTileGrid(): import("../tilegrid/TileGrid.js").default;
    /**
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {!import("../tilegrid/TileGrid.js").default} Tile grid.
     */
    getTileGridForProjection(projection: import("../proj/Projection.js").default): import("../tilegrid/TileGrid.js").default;
    /**
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {import("../TileCache.js").default} Tile cache.
     * @protected
     */
    protected getTileCacheForProjection(projection: import("../proj/Projection.js").default): TileCache;
    /**
     * Get the tile pixel ratio for this source. Subclasses may override this
     * method, which is meant to return a supported pixel ratio that matches the
     * provided `pixelRatio` as close as possible.
     * @param {number} pixelRatio Pixel ratio.
     * @return {number} Tile pixel ratio.
     */
    getTilePixelRatio(pixelRatio: number): number;
    /**
     * @param {number} z Z.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {import("../size.js").Size} Tile size.
     */
    getTilePixelSize(z: number, pixelRatio: number, projection: import("../proj/Projection.js").default): number[];
    /**
     * Returns a tile coordinate wrapped around the x-axis. When the tile coordinate
     * is outside the resolution and extent range of the tile grid, `null` will be
     * returned.
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {import("../proj/Projection.js").default=} opt_projection Projection.
     * @return {import("../tilecoord.js").TileCoord} Tile coordinate to be passed to the tileUrlFunction or
     *     null if no tile URL should be created for the passed `tileCoord`.
     */
    getTileCoordForTileUrlFunction(tileCoord: number[], opt_projection?: import("../proj/Projection.js").default): number[];
    /**
     * Remove all cached tiles from the source. The next render cycle will fetch new tiles.
     * @api
     */
    clear(): void;
    /**
     * Marks a tile coord as being used, without triggering a load.
     * @abstract
     * @param {number} z Tile coordinate z.
     * @param {number} x Tile coordinate x.
     * @param {number} y Tile coordinate y.
     * @param {import("../proj/Projection.js").default} projection Projection.
     */
    useTile(z: number, x: number, y: number, projection: import("../proj/Projection.js").default): void;
}
import Source from "./Source.js";
import TileCache from "../TileCache.js";
//# sourceMappingURL=Tile.d.ts.map