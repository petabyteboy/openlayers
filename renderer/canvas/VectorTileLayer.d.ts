export default CanvasVectorTileLayerRenderer;
/**
 * @classdesc
 * Canvas renderer for vector tile layers.
 * @api
 */
declare class CanvasVectorTileLayerRenderer extends CanvasTileLayerRenderer {
    /**
     * @param {import("../../layer/VectorTile.js").default} layer VectorTile layer.
     */
    constructor(layer: import("../../layer/VectorTile.js").default);
    /** @private */
    private boundHandleStyleImageChange_;
    /**
     * @private
     * @type {boolean}
     */
    private dirty_;
    /**
     * @private
     * @type {number}
     */
    private renderedLayerRevision_;
    /**
     * @private
     * @type {import("../../transform").Transform}
     */
    private renderedPixelToCoordinateTransform_;
    /**
     * @private
     * @type {number}
     */
    private renderedRotation_;
    /**
     * @private
     * @type {!Object<string, import("../../VectorRenderTile.js").default>}
     */
    private renderTileImageQueue_;
    /**
     * @type {Object<string, import("../../events.js").EventsKey>}
     */
    tileListenerKeys_: {
        [x: string]: import("../../events.js").EventsKey;
    };
    /**
     * @private
     * @type {import("../../transform.js").Transform}
     */
    private tmpTransform_;
    /**
     * @param {import("../../VectorRenderTile.js").default} tile Tile.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("../../proj/Projection").default} projection Projection.
     * @param {boolean} queue Queue tile for rendering.
     * @return {boolean|undefined} Tile needs to be rendered.
     */
    prepareTile(tile: import("../../VectorRenderTile.js").default, pixelRatio: number, projection: import("../../proj/Projection.js").default, queue: boolean): boolean;
    /**
     * @inheritDoc
     */
    getTile(z: any, x: any, y: any, frameState: any): import("../../Tile.js").default;
    /**
     * @inheritdoc
     */
    isDrawableTile(tile: any): any;
    /**
     * @inheritDoc
     */
    getTileImage(tile: any): any;
    /**
     * @param {import("../../VectorRenderTile.js").default} tile Tile.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("../../proj/Projection.js").default} projection Projection.
     * @private
     */
    private updateExecutorGroup_;
    /**
     * @inheritDoc
     */
    forEachFeatureAtCoordinate(coordinate: any, frameState: any, hitTolerance: any, callback: any, declutteredFeatures: any): any;
    /**
     * @inheritDoc
     */
    getFeatures(pixel: any): Promise<any>;
    /**
     * Handle changes in image style state.
     * @param {import("../../events/Event.js").default} event Image style change event.
     * @private
     */
    private handleStyleImageChange_;
    /**
     * @param {boolean} hifi We have time to render a high fidelity map image.
     * @param {import('../../PluggableMap.js').FrameState} frameState Frame state.
     */
    renderQueuedTileImages_(hifi: boolean, frameState: import("../../PluggableMap.js").FrameState): void;
    /**
     * @param {import("../../Feature.js").FeatureLike} feature Feature.
     * @param {number} squaredTolerance Squared tolerance.
     * @param {import("../../style/Style.js").default|Array<import("../../style/Style.js").default>} styles The style or array of styles.
     * @param {import("../../render/canvas/BuilderGroup.js").default} executorGroup Replay group.
     * @return {boolean} `true` if an image is loading.
     */
    renderFeature(feature: import("../../render/Feature.js").default | import("../../Feature.js").default<any>, squaredTolerance: number, styles: import("../../style/Style.js").default | import("../../style/Style.js").default[], executorGroup: CanvasBuilderGroup): boolean;
    /**
     * @param {import("../../VectorRenderTile.js").default} tile Tile.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("../../proj/Projection.js").default} projection Projection.
     * @return {boolean} A new tile image was rendered.
     * @private
     */
    private tileImageNeedsRender_;
    /**
     * @param {import("../../VectorRenderTile.js").default} tile Tile.
     * @param {import("../../PluggableMap").FrameState} frameState Frame state.
     * @private
     */
    private renderTileImage_;
}
import CanvasTileLayerRenderer from "./TileLayer.js";
import CanvasBuilderGroup from "../../render/canvas/BuilderGroup.js";
//# sourceMappingURL=VectorTileLayer.d.ts.map