import {customElement, Debouncer} from "@kasimirjs/embed";
import {sleep} from "@micx/lib-js/src/helper/functions";


let debounceer = new Debouncer(100);

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

        window.addEventListener("scroll", async () => {
            await debounceer.debounce();
            console.log("scroll", window.innerHeight, window.getComputedStyle(document.body).height, window.scrollY);
            if (window.scrollY > 300 && active === false) {
                this.style.display = "block";
                await sleep(200);
                this.classList.add("show");
                active = true;
            }
            if ((window.scrollY < 300 || window.scrollY >  parseInt(window.getComputedStyle(document.body).height) - window.outerHeight - 500)&& active === true) {
                this.classList.remove("show");
                await sleep(500);
                this.style.display = "none";
                active = false;
            }
        }, {passive: true});
    }
}
