import {customElement} from "@kasimirjs/embed";


@customElement("liscom-scroll-to-top")
class ScrollToTop extends HTMLElement {



    connectedCallback() {
        console.log("scroll to top");
        this.addEventListener("click", () => {
            window.scrollTo({top: 0, behavior: "smooth"});
        });
        let active = false;

        if (this.innerHTML.trim() === "")
            this.innerHTML = "⬆️";

        window.addEventListener("scroll", () => {
            if (window.scrollY > 300 && active === false) {
                this.classList.add("show");
                active = true;
            }
            if (window.scrollY < 300 && active === true) {
                this.classList.remove("show");
                active = false;
            }
        }, {passive: true});
    }
}
