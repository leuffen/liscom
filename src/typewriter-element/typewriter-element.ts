class TypewriterElement extends HTMLElement {
    private words: string[] = [];
    private index: number = 0;
    private charIndex: number = 0;
    private isDeleting: boolean = false;
    private container: HTMLSpanElement;

    private cursor: HTMLSpanElement; // Container für den Cursor

    // Werte für die Timeouts
    private writeSpeed: number = 100;
    private deleteSpeed: number = 50;
    private pauseBeforeDelete: number = 1500;
    private pauseBeforeWrite: number = 500;

    private curTimeout: number = null;

    constructor() {
        super();

        this.container = document.createElement('span');
        this.cursor = document.createElement('span'); // Erstelle den Cursor Container
        this.cursor.textContent = '|'; // Setze den Textinhalt des Cursors

        // Füge den Text- und den Cursorcontainer zum Shadow DOM hinzu
        this.append(this.container, this.cursor);
    }

    connectedCallback() {
        if ( ! this.hasAttribute("data-words")) {
            this.setAttribute('data-words', this.textContent!.trim().replace("|", ""));
            this.textContent = "";
        }
        this.words = this.dataset.words!.trim().split(',').filter((word) => word.trim() !== "");

        //this.words = (this.getAttribute('words') || '').split(',');

        // Setze die Klasse für den Cursor
        this.cursor.className = 'cursor';

        this.index = 0;
        this.charIndex = 0;
        this.isDeleting = false;

        // Werte aus den Data-Attributen lesen, wenn vorhanden
        this.writeSpeed = Number(this.dataset.writeSpeed) || this.writeSpeed;
        this.deleteSpeed = Number(this.dataset.deleteSpeed) || this.deleteSpeed;
        this.pauseBeforeDelete = Number(this.dataset.pauseBeforeDelete) || this.pauseBeforeDelete;
        this.pauseBeforeWrite = Number(this.dataset.pauseBeforeWrite) || this.pauseBeforeWrite;

        this.type();
    }



    type() {
        if (this.words.length === 0) return;

        const currentWord = this.words[this.index];
        const typeSpeed = this.isDeleting ? this.deleteSpeed : this.writeSpeed;

        if (this.curTimeout)
            clearTimeout(this.curTimeout);

        if (this.isDeleting) {
            this.charIndex--;
        } else {
            this.charIndex++;
        }

        this.container.textContent = currentWord.substring(0, this.charIndex);

        if (!this.isDeleting && this.charIndex === currentWord.length) {
            this.isDeleting = true;
            this.curTimeout = setTimeout(() => this.type(), this.pauseBeforeDelete);
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.index = (this.index + 1) % this.words.length;
            this.curTimeout = setTimeout(() => this.type(), this.pauseBeforeWrite);
        } else {
            this.curTimeout = setTimeout(() => this.type(), typeSpeed + (Math.random() * typeSpeed));
        }
    }
}

customElements.define('typewriter-element', TypewriterElement);
