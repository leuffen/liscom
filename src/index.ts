

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

    __liscom_config = config;
}


import "./slideshow/slideshow";
import "./details-title/details-title";
