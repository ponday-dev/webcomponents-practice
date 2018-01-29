export class MyButton extends HTMLElement {

    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
            <style>
                .my-button {
                    outline: none;
                    background-color: #e0e0e0;
                    color: #424242;
                    border: none;
                    border-radius: 3px;
                    box-sizing: border-box;
                    padding: 0.5rem 1rem;
                }
                .my-button:hover {
                    background-color: #1976d2;
                    color: white;
                    transition: all .2s linear;
                }
            </style>
            <button class="my-button">
                <slot></slot>
            </button>
        `;
    }

    connectedCallback() {
        console.log('connectedCallback');
    }
}
