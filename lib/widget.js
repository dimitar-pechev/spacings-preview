const LOADING_SPINNER_SVG = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='22 22 44 44'><style>@keyframes circular-rotate{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}</style><style>@keyframes circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0;}50%{stroke-dasharray:100,200;stroke-dashoffset:-15;}100%{stroke-dasharray:1,200;stroke-dashoffset:-126;}}</style><g style='animation:circular-rotate 1.4s linear infinite;transform-origin:44px 44px;'><circle cx='44' cy='44' r='20.2' fill='none' stroke='%23d4dbed' stroke-width='3.6' stroke-linecap='round' style='animation:circular-dash 1.4s ease-in-out infinite;'/></g></svg>`;

function createIframe() {
  const iframe = document.createElement('iframe');
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  iframe.setAttribute('title', 'Growth Hub Content');
  iframe.setAttribute('allow', 'geolocation; payment; fullscreen');
  // allow-forms is required: the 3DS challenge posts a form inside nested frames.
  iframe.setAttribute(
    'sandbox',
    'allow-scripts allow-same-origin allow-popups allow-forms allow-modals allow-popups-to-escape-sandbox'
  );
  iframe.setAttribute('crossorigin', 'anonymous');

  // Initially hide the iframe
  iframe.style.visibility = 'hidden';
  return iframe;
}

function createLoadingContainer() {
  const container = document.createElement('div');
  container.setAttribute('role', 'status');
  container.setAttribute('aria-live', 'polite');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.alignItems = 'center';
  container.style.marginTop = '6.25rem';
  container.style.marginBottom = '6.25rem';

  // Create the spinner
  const spinner = document.createElement('img');
  spinner.style.width = '2.5rem';
  spinner.style.height = '2.5rem';
  spinner.src = LOADING_SPINNER_SVG;

  // Create the loading text
  const text = document.createElement('div');
  text.textContent = 'Loading, please wait...';
  text.style.fontSize = '0.875rem';
  text.style.marginTop = '0.5rem';

  container.appendChild(spinner);
  container.appendChild(text);

  return container;
}

class GrowthHubIframe extends HTMLElement {
  constructor() {
    super();

    this.iframe = createIframe();
    this.loadingContainer = createLoadingContainer();

    this.shadowRootInstance = this.attachShadow({ mode: 'open' });
    this.shadowRootInstance.appendChild(this.loadingContainer);
    this.shadowRootInstance.appendChild(this.iframe);

    this.autoHeight = false;
    this.ignoreExternalHeight = false;

    this.handleMessage = this.handleMessage.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
  }

  static get observedAttributes() {
    return ['src', 'autoHeight', 'width', 'height', 'ignoreExternalHeight'];
  }

  attributeChangedCallback(name, _oldValue, newValue) {
    if (name === 'src') {
      this.iframe.src = newValue;
    } else if (name === 'autoHeight') {
      // Boolean attribute: presence means enabled
      this.autoHeight = newValue !== null;
    } else if (name === 'width') {
      this.iframe.style.width = newValue;
    } else if (name === 'height') {
      this.iframe.style.height = newValue;
    } else if (name === 'ignoreExternalHeight') {
      this.ignoreExternalHeight = newValue !== null && newValue !== 'false';
    }
  }

  connectedCallback() {
    window.addEventListener('message', this.handleMessage);

    if (this.hasAttribute('autoHeight')) {
      this.autoHeight = true;
    }

    if (this.hasAttribute('ignoreExternalHeight')) {
      const value = this.getAttribute('ignoreExternalHeight');
      this.ignoreExternalHeight = value !== 'false';
    }

    this.iframe.addEventListener('load', this.handleLoad);
  }

  disconnectedCallback() {
    window.removeEventListener('message', this.handleMessage);
    this.iframe.removeEventListener('load', this.handleLoad);
  }

  handleLoad() {
    if (this.loadingContainer && this.shadowRootInstance.contains(this.loadingContainer)) {
      this.shadowRootInstance.removeChild(this.loadingContainer);
    }
    this.iframe.style.visibility = 'visible';

    // Only send message if both ignoreExternalHeight and autoHeight are enabled
    if (this.ignoreExternalHeight && this.autoHeight) {
      try {
        this.iframe.contentWindow.postMessage(
          {
            type: 'ignoreExternalHeight',
            payload: {
              enabled: true,
            },
          },
          '*'
        );
      } catch (error) {
        console.warn(
          '[growth-hub-iframe] Cannot send ignoreExternalHeight (cross-origin):',
          error.message
        );
      }
    }
  }

  handleMessage(event) {
    if (event.data.type === 'height' && typeof event.data.height === 'number' && this.autoHeight) {
      this.iframe.style.height = `${event.data.height}px`;
    }

    // https://officernd.atlassian.net/browse/GH-385
    // LOGGED TODO: Consider refining these scroll actions. Currently, scrolling to 0 or scrollHeight
    // may push the embedded app out of view on pages with thick headers or footers,
    // especially when using 'scrollToBottom'.
    if (event.data.action === 'scrollToTop') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    if (event.data.action === 'scrollToBottom') {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }
}

customElements.define('growth-hub-iframe', GrowthHubIframe);
