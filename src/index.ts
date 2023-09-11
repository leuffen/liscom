

export var __liscom_config : LiscomConfig = null;

export class LiscomConfig {
    slideshow: true
    detailsTitle: true

}

/**
 * Activates the liscom components
 *
 * @param liscomConfig
 */
export function liscom_enable(liscomConfig : LiscomConfig = new LiscomConfig()) {
    __liscom_config = liscomConfig;
}


import "./slideshow/slideshow";
import "./details-title/details-title";
