
const indexName = "liscom_hit_index";
let state = sessionStorage.getItem(indexName);
if (state === null) {
    sessionStorage.setItem(indexName, "0");
}
sessionStorage.setItem(indexName, "" + (parseInt(sessionStorage.getItem(indexName) ?? "0") + 1));

export const hitIndex = parseInt(sessionStorage.getItem(indexName) ?? "0");

export function initLoader() {
    let interval = setInterval(() => {
        // Detect if body is loaded
        if (document.querySelector("body")) {
            // Cancel interval
            clearInterval(interval);

            let img = document.querySelector("img").cloneNode(true) as HTMLImageElement;
            let loader = document.createElement("div");
            loader.classList.add("loader");
            loader.appendChild(img);
            img.setAttribute("class", "");
            img.setAttribute("loading", "eager");

            let loaderBar = document.createElement("div");
            loaderBar.classList.add("loader-bar");
            loader.appendChild(loaderBar);

            document.querySelector("body").appendChild(loader);
        }
    }, hitIndex === 1 ? 10 : 350); // Wait 350 on subsequent requests to prevent flickering
}


