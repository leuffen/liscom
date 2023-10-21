import {ka_create_element, ka_debounce} from "@kasimirjs/embed";
import {customElement} from "@kasimirjs/embed";
import {ka_dom_ready} from "@kasimirjs/embed";


@customElement("liscom-scrollspy")
export class LiscomScrollspy extends HTMLElement {

    private elements = {} as {[key: string]: {target: HTMLElement, nav: HTMLElement, observer: IntersectionObserver}};

    public async connectedCallback() {
        await ka_dom_ready();
        // Allow attaching to any element
        this.style.display = "contents";



        document.querySelectorAll("[data-scrollspy-name]").forEach((el : HTMLElement) => {
            let curName = el.getAttribute("data-scrollspy-name");
            let navElem = ka_create_element("li", {class: ""},
                [
                    ka_create_element("a", {href: window.location.pathname + "#" + el.getAttribute("id")}, curName)
                ],
                this
            );


            let curMo = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    navElem.classList.add("active");
                } else {
                    navElem.classList.remove("active");
                }
            });
            curMo.observe(el);
            this.elements[curName] = ({target: el, nav: navElem, observer: curMo});
        })

    }

    async disconnectedCallback() {
        // disconnect all observers
        for(let key in this.elements) {
            this.elements[key].observer.disconnect();
            this.elements[key].nav.remove();
        }

    }

    // language=html

}
