/*
na końcu head
<script src="../stripe_button_component.js" defer></script>

<stripe-button href="../index.html"
  ><i class="bi bi-house-fill"></i> Home</stripe-button
>
 */

class StripeButton extends HTMLElement {
  constructor() {
    super();
    // Tworzymy Shadow DOM, aby style komponentu nie mieszały się z globalnymi
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const href = this.getAttribute("href") || "#";

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          --angle: 63.4deg;
          --base-width: 20px;
          --neon-color: #0099ff;
          --neon-glow: drop-shadow(0 0 8px rgba(0, 153, 255, 0.4));
          --neon-glow-hover: drop-shadow(0 0 8px rgba(0, 153, 255, 0.4)) drop-shadow(0 0 5px rgba(0, 153, 255, 0.4));
          display: inline-block;
          width: 300px;
        }

        .stripe-button-element {
          --current-height: 40px;
          --stripe-offset: calc(var(--current-height) / tan(var(--angle)));
          display: flex;
          align-items: center;
          height: var(--current-height);
          width: 100%;
          transform-origin: left;
          transition: transform 0.2s ease-in-out;
          cursor: pointer;
          text-decoration: none; 
        }

        .stripe-button-element:hover {
          transform: scale(1.05, 1);
        }

        .stripe-button-element:hover .trimmed-rectangle,
        .stripe-button-element:hover .after-stripe {
          filter: var(--neon-glow-hover);
        }

        .trimmed-rectangle,
        .after-stripe {
          position: relative;
          height: 100%;
          filter: var(--neon-glow);
          transition: filter 0.2s ease-in-out;
        }

        .trimmed-rectangle::before,
        .after-stripe::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-color: var(--neon-color);
        }

        .trimmed-rectangle {
          flex: 1;
        }

        .trimmed-rectangle::before {
          clip-path: polygon(0% 0%, 100% 0%, calc(100% - var(--stripe-offset)) 100%, 0% 100%);
        }

        .after-stripe {
          width: calc(var(--base-width) + var(--stripe-offset));
          margin-left: calc(var(--stripe-offset) * -0.65);
          flex-shrink: 0;
        }

        .after-stripe::before {
          clip-path: polygon(var(--stripe-offset) 0%, 100% 0%, calc(100% - var(--stripe-offset)) 100%, 0% 100%);
        }

        .op-7 { opacity: 0.7; }
        .op-4 { opacity: 0.4; }

        .button-text {
          display: flex;
          align-items: center;
          gap: 8px;

          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 20px;
          z-index: 1;
          color: #ffffff;
          font-weight: lighter;
          font-size: 18px;
          white-space: nowrap;
          letter-spacing: 2px;
          pointer-events: none;
        }
      </style>

      <a href="${href}" class="stripe-button-element">
        <div class="trimmed-rectangle">
          <span class="button-text">
            <slot></slot>
          </span>
        </div>
        <div class="after-stripe op-7"></div>
        <div class="after-stripe op-4"></div>
      </a>

    `;
  }
}

customElements.define("stripe-button", StripeButton);
