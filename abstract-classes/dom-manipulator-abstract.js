export class DomManipulatorAbstract {
  _actionObserver = null;

  constructor({ root, attachTo } = {}) {
    if (root) {
      this.root = root;
    } else {
      this.createRoot(attachTo);
    }
  }

  attachObserver(actionObserver) {
    this._actionObserver = actionObserver;
  }

  createRoot(attachTo) {
    this.root = document.createElement('ul');

    document.getElementById(attachTo).appendChild(this.root);
  }

  createDomElement(tagName, payload) {
    const domElement = document.createElement(tagName);

    domElement.setAttribute('data-identifier', payload.id);

    return domElement;
  }

  findElementById(id) {
    const selector = `[data-identifier="${id}"]`;

    return this.root.querySelector(selector);
  }

  broadcast(...params) {
    this._actionObserver.broadcast(...params);
  }

  removeElement(id) {
    this.root.removeChild(this.findElementById(id));
  }

  clearRoot() {
    this.root.replaceChildren();
  }
}
