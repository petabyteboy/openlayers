export default WMSCapabilities;
/**
 * @classdesc
 * Format for reading WMS capabilities data
 *
 * @api
 */
declare class WMSCapabilities extends XML {
    /**
     * @type {string|undefined}
     */
    version: string | undefined;
    /**
     * @inheritDoc
     */
    readFromDocument(doc: any): {
        version: string;
    };
    /**
     * @inheritDoc
     */
    readFromNode(node: any): {
        version: string;
    };
}
import XML from "./XML.js";
//# sourceMappingURL=WMSCapabilities.d.ts.map