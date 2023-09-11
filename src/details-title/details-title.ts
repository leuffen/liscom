import {ka_create_element} from "@kasimirjs/embed";
import {__liscom_config} from "../index";

let observedDataDetailTitle : HTMLElement[] = [];
setInterval(() => {
    if (__liscom_config?.detailsTitle !== true) {
        return;
    }
    let elements = document.querySelectorAll("[data-details-title]") as HTMLElement[];
    for (let e : HTMLElement of elements) {
        // if already in observedDataDetailTitle, continue
        if (observedDataDetailTitle.indexOf(e) !== -1)
            continue;
        observedDataDetailTitle.push(e);
        let title = e.getAttribute("data-details-title");
        let details = ka_create_element("details", {"data-debug-liscom-element": "details-title"}) as HTMLElement;
        let summary = ka_create_element("summary", {}, [], details) as HTMLElement;
        e.parentElement.insertBefore(details, e);
        summary.append(title);
        details.append(e);
    }
}, 1000);
