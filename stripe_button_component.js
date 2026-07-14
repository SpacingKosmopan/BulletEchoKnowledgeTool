class StripeButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["color", "href", "is-new"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (name === "color" || name === "is-new") {
        this.updateColor();
      } else if (name === "href" && this.shadowRoot) {
        const link = this.shadowRoot.querySelector("a");
        if (link) link.setAttribute("href", newValue || "#");
      }
    }
  }

  getColor() {
    return this.getAttribute("color") || "#0099ff";
  }

  updateColor() {
    const isNew =
      this.hasAttribute("is-new") && this.getAttribute("is-new") !== "false";

    if (isNew) {
      this.style.setProperty("--neon-color", "#ffd700");
      this.shadowRoot
        ?.querySelector(".stripe-button-element")
        ?.classList.add("is-new-active");
    } else {
      this.style.setProperty("--neon-color", this.getColor());
      this.shadowRoot
        ?.querySelector(".stripe-button-element")
        ?.classList.remove("is-new-active");
    }
  }

  connectedCallback() {
    const href = this.getAttribute("href") || "#";

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          --angle: 63.4deg;
          --base-width: 20px;
          
          --neon-glow: drop-shadow(0 0 3px var(--neon-color));
          --neon-glow-hover: drop-shadow(0 0 5px var(--neon-color));
          
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
          position: relative;
          overflow: hidden; 
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

        .stripe-button-element.is-new-active .trimmed-rectangle::before,
        .stripe-button-element.is-new-active .after-stripe::before {
          background: linear-gradient(90deg, #d4af37 0%, #ffd700 50%, #aa7c11 100%);
        }

        .stripe-button-element.is-new-active::after {
          content: "";
          position: absolute;
          top: 0;
          left: -150%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.6) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: skewX(-25deg);
          animation: shine 3s infinite ease-in-out;
          z-index: 2;
          pointer-events: none;
        }

        @keyframes shine {
          0% { left: -150%; }
          30% { left: 150%; }
          100% { left: 150%; }
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
          z-index: 3;
          color: #ffffff;
          font-weight: lighter;
          font-size: 18px;
          white-space: nowrap;
          letter-spacing: 2px;
          pointer-events: none;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
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

    this.updateColor();
  }
}

customElements.define("stripe-button", StripeButton);
