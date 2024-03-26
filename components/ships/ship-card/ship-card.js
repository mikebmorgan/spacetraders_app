const parser = new DOMParser();
const resp = await fetch('/components/shared/header/header.html');
const html = await resp.text();
const template = parser.parseFromString(html, 'text/html').querySelector('template');

class ShipCard extends HTMLElement {
  constructor() {
    super();

    // Create shadow DOM to scope actions
    var shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));

    // Select elements to populate
    this.agentCallsignEl = this.shadowRoot.querySelector('slot[name=agent-callsign]');
    this.creditsEl = this.shadowRoot.querySelector('slot[name=credits]');
    this.factionEl = this.shadowRoot.querySelector('slot[name=agent-faction]');
    this.headquartersEl = this.shadowRoot.querySelector('slot[name=agent-headquarters]');
    this.shipCountEl = this.shadowRoot.querySelector('slot[name=ship-count]');
    this.creditsZoneEl = this.shadowRoot.querySelector('div[id=credits-zone]');
  }

  // Lists all attributes which are paid attention
  static get observedAttributes() {
    return ['symbol', 'credits', 'startingfaction', 'headquarters', 'shipcount'];
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[ property ] = newValue;
  }

  connectedCallback() {
    // Set text content of slots
    // toTitleCase method from shared.js
    if (this.symbol) this.agentCallsignEl.textContent = this.symbol;
    if (this.credits) this.creditsEl.textContent = abbreviateNumber(parseInt(this.credits));
    if (this.startingfaction) this.factionEl.textContent = this.startingfaction;
    if (this.headquarters) this.headquartersEl.textContent = this.headquarters;
    if (this.shipcount) this.shipCountEl.textContent = this.shipcount;

    // navigate to show page for request on click
    this.shadowRoot.querySelector('div[id=credits-zone]').addEventListener('click', (event) => {
      event.stopPropagation();
      if (this.creditsZoneEl.classList.contains('expanded')) {
        this.creditsZoneEl.classList.remove('expanded');
        this.creditsEl.textContent = abbreviateNumber(parseInt(this.credits));
      } else {
        this.creditsZoneEl.classList.add('expanded');
        this.creditsEl.textContent = this.credits || '-- ?? --';
      }
    });
  }
}

export default ShipCard;