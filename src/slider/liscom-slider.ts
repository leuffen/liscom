class MyComponent extends HTMLElement {
    private prevBtn!: HTMLElement;
    private nextBtn!: HTMLElement;
    private currentSection = 0;
    private sections!: NodeListOf<HTMLElement>;

    constructor() {
        super();

    }

    connectedCallback() {
        /*
        this.container = this.shadowRoot!.querySelector('.container')!;
        this.prevBtn = this.shadowRoot!.getElementById('prevBtn')!;
        this.nextBtn = this.shadowRoot!.getElementById('nextBtn')!;
        this.sections = this.querySelectorAll('section');



        this.prevBtn.addEventListener('click', () => this.scroll(-1));
        this.nextBtn.addEventListener('click', () => this.scroll(1));
        */
        console.log("connected");

        this.addEventListener('mousedown', this.dragStart);
        this.addEventListener('mouseup', this.dragEnd);
        this.addEventListener('mouseleave', this.dragEnd);
        this.addEventListener('mousemove', this.dragMove);
    }

    doScroll(direction: number) {
        this.currentSection = Math.max(0, Math.min(this.sections.length - 1, this.currentSection + direction));
        this.sections[this.currentSection].scrollIntoView({ behavior: 'smooth' });
    }

    // Define your dragStart, dragEnd, and dragMove methods here to handle mouse drag
    private isDragging = false;
    private startY = 0;
    private startX = 0;
    private scrollStartY = 0;
    private scrollStartX = 0;

    // ... other methods

    dragStart(e: MouseEvent) {
        console.log("mousedown");
        e.preventDefault();
        this.isDragging = true;
        this.startY = e.clientY;
        this.startX = e.clientX;
        this.style.scrollSnapType = "unset";

        this.scrollStartY = this.scrollTop;
        this.scrollStartX = this.scrollLeft;
        this.style.cursor = 'grabbing';
    }

    dragEnd(e: MouseEvent) {
        if (!this.isDragging) return;
        this.isDragging = false;
        this.style.cursor = '';
         this.style.scrollSnapType = null;
         setTimeout(() => {
             this.scrollBy(1, 0)
             this.scrollBy(0, 1)
         }, 0)

    }

    dragMove(e: MouseEvent) {
        if (!this.isDragging) return;
        const y = e.clientY;
        const x = e.clientX;

        const deltaY = this.startY - y;
        this.scrollTop = this.scrollStartY + deltaY;

        const deltaX = this.startX - x;
        this.scrollLeft = this.scrollStartX + deltaX;
    }
}

customElements.define('liscom-slider', MyComponent);
