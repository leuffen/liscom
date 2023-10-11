

export var __liscom_config : LiscomConfig = null;

export class LiscomConfig {
    public slideshow: boolean = true;
    public detailsTitle: boolean = true;

}

/**
 * Activates the liscom components
 *
 * @param liscomConfig
 */
export function liscom_enable(liscomConfig : LiscomConfig | any = {}) {
    let config = new LiscomConfig();
    config = {...config, ...liscomConfig};

    console.log("[liscom] enabled features: ", config);
    __liscom_config = config;
}


import "./slideshow/slideshow";
import "./details-title/details-title";
import "./typewriter-element/typewriter-element";
import "./slider/liscom-slider";
export * from "./loader/loader";
