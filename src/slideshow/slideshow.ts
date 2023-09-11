import {__liscom_config} from "../index";

class Slideshow{

    #curElement : HTMLElement =  null;

    constructor(
        private element : HTMLDivElement

    ) {

        let timeout = parseInt(element.getAttribute("data-delay"));
        if (isNaN(timeout))
            timeout = 5000;

        element.setAttribute("data-debug-liscom-element", "slideshow");

        setTimeout(() => this.switch(true), 100);
        setTimeout(() => this.switch(), 200);
        setInterval(() => this.switch(), timeout);
    }

    switch(first : boolean = false) {
        console.log("switch", first);
        if (this.#curElement !== null) {
            this.#curElement.classList.add("animateOut")
            this.#curElement.classList.remove("show")
            this.#curElement.classList.remove("animateIn")
        }
        if (this.#curElement === null) {
            this.#curElement = this.element.firstElementChild as HTMLElement;
        } else {
            this.#curElement = this.#curElement.nextElementSibling as HTMLElement;
            if (this.#curElement === null)
                this.#curElement = this.element.firstElementChild as HTMLElement;
        }
        if (! first) {
            this.#curElement.classList.add("animateIn")
            this.#curElement.classList.remove("animateOut")
        }
        this.#curElement.classList.add("show")
    }
}

window.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(() => {
        if (__liscom_config?.slideshow !== true) {
            return;
        }
        document.querySelectorAll(".slideshow").forEach((e) => new Slideshow(e as HTMLDivElement));
    }, 1000);
})
