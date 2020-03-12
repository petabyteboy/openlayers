export class CustomTile extends ImageTile {
    /**
     * @param {import("../size.js").Size} tileSize Full tile size.
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {TileState} state State.
     * @param {string} src Image source URI.
     * @param {?string} crossOrigin Cross origin.
     * @param {import("../Tile.js").LoadFunction} tileLoadFunction Tile load function.
     * @param {import("../Tile.js").Options=} opt_options Tile options.
     */
    constructor(tileSize: number[], tileCoord: number[], state: {
        IDLE: number;
        LOADING: number;
        LOADED: number;
        ERROR: number;
        EMPTY: number;
    }, src: string, crossOrigin: string, tileLoadFunction: (arg0: import("../Tile.js").default, arg1: string) => void, opt_options?: import("../Tile.js").Options);
    /**
     * @private
     * @type {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement}
     */
    private zoomifyImage_;
    /**
     * @type {import("../size.js").Size}
     */
    tileSize_: import("../size.js").Size;
}
export default Zoomify;
export type TierSizeCalculation = string;
export type Options = {
    /**
     * Attributions.
     */
    attributions?: string | string[] | ((arg0: import("../PluggableMap.js").FrameState) => string | string[]);
    /**
     * Tile cache size. The default depends on the screen size. Will be ignored if too small.
     */
    cacheSize?: number;
    /**
     * The `crossOrigin` attribute for loaded images.  Note that
     * you must provide a `crossOrigin` value  you want to access pixel data with the Canvas renderer.
     * See https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image for more detail.
     */
    crossOrigin?: string;
    /**
     * Projection.
     */
    projection?: string | import("../proj/Projection.js").default;
    /**
     * The pixel ratio used by the tile service. For example, if the tile service advertizes 256px by 256px tiles but actually sends 512px by 512px images (for retina/hidpi devices) then `tilePixelRatio` should be set to `2`
     */
    tilePixelRatio?: number;
    /**
     * Maximum allowed reprojection error (in pixels).
     * Higher values can increase reprojection performance, but decrease precision.
     */
    reprojectionErrorThreshold?: number;
    /**
     * URL template or base URL of the Zoomify service.
     * A base URL is the fixed part
     * of the URL, excluding the tile group, z, x, and y folder structure, e.g.
     * `http://my.zoomify.info/IMAGE.TIF/`. A URL template must include
     * `{TileGroup}`, `{x}`, `{y}`, and `{z}` placeholders, e.g.
     * `http://my.zoomify.info/IMAGE.TIF/{TileGroup}/{z}-{x}-{y}.jpg`.
     * Internet Imaging Protocol (IIP) with JTL extension can be also used with
     * `{tileIndex}` and `{z}` placeholders, e.g.
     * `http://my.zoomify.info?FIF=IMAGE.TIF&JTL={z},{tileIndex}`.
     * A `{?-?}` template pattern, for example `subdomain{a-f}.domain.com`, may be
     * used instead of defining each one separately in the `urls` option.
     */
    url: string;
    /**
     * Tier size calculation method: `default` or `truncated`.
     */
    tierSizeCalculation?: string;
    size: number[];
    /**
     * Extent for the TileGrid that is created.
     * Default sets the TileGrid in the
     * fourth quadrant, meaning extent is `[0, -height, width, 0]`. To change the
     * extent to the first quadrant (the default for OpenLayers 2) set the extent
     * as `[0, 0, width, height]`.
     */
    extent?: number[];
    /**
     * Duration of the opacity transition for rendering.
     * To disable the opacity transition, pass `transition: 0`.
     */
    transition?: number;
    /**
     * Tile size. Same tile size is used for all zoom levels.
     */
    tileSize?: number;
    /**
     * Indicate which resolution should be used
     * by a renderer if the views resolution does not match any resolution of the tile source.
     * If 0, the nearest resolution will be used. If 1, the nearest lower resolution
     * will be used. If -1, the nearest higher resolution will be used.
     */
    zDirection?: number;
};
import ImageTile from "../ImageTile.js";
/**
 * @typedef {Object} Options
 * @property {import("./Source.js").AttributionLike} [attributions] Attributions.
 * @property {number} [cacheSize] Tile cache size. The default depends on the screen size. Will be ignored if too small.
 * @property {null|string} [crossOrigin] The `crossOrigin` attribute for loaded images.  Note that
 * you must provide a `crossOrigin` value  you want to access pixel data with the Canvas renderer.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image for more detail.
 * @property {import("../proj.js").ProjectionLike} [projection] Projection.
 * @property {number} [tilePixelRatio] The pixel ratio used by the tile service. For example, if the tile service advertizes 256px by 256px tiles but actually sends 512px by 512px images (for retina/hidpi devices) then `tilePixelRatio` should be set to `2`
 * @property {number} [reprojectionErrorThreshold=0.5] Maximum allowed reprojection error (in pixels).
 * Higher values can increase reprojection performance, but decrease precision.
 * @property {string} url URL template or base URL of the Zoomify service.
 * A base URL is the fixed part
 * of the URL, excluding the tile group, z, x, and y folder structure, e.g.
 * `http://my.zoomify.info/IMAGE.TIF/`. A URL template must include
 * `{TileGroup}`, `{x}`, `{y}`, and `{z}` placeholders, e.g.
 * `http://my.zoomify.info/IMAGE.TIF/{TileGroup}/{z}-{x}-{y}.jpg`.
 * Internet Imaging Protocol (IIP) with JTL extension can be also used with
 * `{tileIndex}` and `{z}` placeholders, e.g.
 * `http://my.zoomify.info?FIF=IMAGE.TIF&JTL={z},{tileIndex}`.
 * A `{?-?}` template pattern, for example `subdomain{a-f}.domain.com`, may be
 * used instead of defining each one separately in the `urls` option.
 * @property {string} [tierSizeCalculation] Tier size calculation method: `default` or `truncated`.
 * @property {import("../size.js").Size} size
 * @property {import("../extent.js").Extent} [extent] Extent for the TileGrid that is created.
 * Default sets the TileGrid in the
 * fourth quadrant, meaning extent is `[0, -height, width, 0]`. To change the
 * extent to the first quadrant (the default for OpenLayers 2) set the extent
 * as `[0, 0, width, height]`.
 * @property {number} [transition] Duration of the opacity transition for rendering.
 * To disable the opacity transition, pass `transition: 0`.
 * @property {number} [tileSize=256] Tile size. Same tile size is used for all zoom levels.
 * @property {number} [zDirection] Indicate which resolution should be used
 * by a renderer if the views resolution does not match any resolution of the tile source.
 * If 0, the nearest resolution will be used. If 1, the nearest lower resolution
 * will be used. If -1, the nearest higher resolution will be used.
 */
/**
 * @classdesc
 * Layer source for tile data in Zoomify format (both Zoomify and Internet
 * Imaging Protocol are supported).
 * @api
 */
declare class Zoomify extends TileImage {
    /**
     * @param {Options} opt_options Options.
     */
    constructor(opt_options: Options);
}
import TileImage from "./TileImage.js";
//# sourceMappingURL=Zoomify.d.ts.map