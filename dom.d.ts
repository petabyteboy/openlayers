/**
 * @module ol/dom
 */
/**
 * Create an html canvas element and returns its 2d context.
 * @param {number=} opt_width Canvas width.
 * @param {number=} opt_height Canvas height.
 * @param {Array<HTMLCanvasElement>=} opt_canvasPool Canvas pool to take existing canvas from.
 * @return {CanvasRenderingContext2D} The context.
 */
export function createCanvasContext2D(opt_width?: number, opt_height?: number, opt_canvasPool?: HTMLCanvasElement[]): CanvasRenderingContext2D;
/**
 * Get the current computed width for the given element including margin,
 * padding and border.
 * Equivalent to jQuery's `$(el).outerWidth(true)`.
 * @param {!HTMLElement} element Element.
 * @return {number} The width.
 */
export function outerWidth(element: HTMLElement): number;
/**
 * Get the current computed height for the given element including margin,
 * padding and border.
 * Equivalent to jQuery's `$(el).outerHeight(true)`.
 * @param {!HTMLElement} element Element.
 * @return {number} The height.
 */
export function outerHeight(element: HTMLElement): number;
/**
 * @param {Node} newNode Node to replace old node
 * @param {Node} oldNode The node to be replaced
 */
export function replaceNode(newNode: Node, oldNode: Node): void;
/**
 * @param {Node} node The node to remove.
 * @returns {Node} The node that was removed or null.
 */
export function removeNode(node: Node): Node;
/**
 * @param {Node} node The node to remove the children from.
 */
export function removeChildren(node: Node): void;
/**
 * Transform the children of a parent node so they match the
 * provided list of children.  This function aims to efficiently
 * remove, add, and reorder child nodes while maintaining a simple
 * implementation (it is not guaranteed to minimize DOM operations).
 * @param {Node} node The parent node whose children need reworking.
 * @param {Array<Node>} children The desired children.
 */
export function replaceChildren(node: Node, children: Node[]): void;
//# sourceMappingURL=dom.d.ts.map