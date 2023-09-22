/*
  Abstract class which provides basic features for the DomManipulator
  For now just skip it
*/
export class DomManipulatorAbstract {
  _actionObserver = null;

  // In constructor we set a root element or create our own
  // If we need to apply our logic to already rendered element
  constructor({ root, attachTo, tag } = {}) {
    if (root) {
      this.root = root;
    } else {
      this.root = document.createElement(tag);
      document.getElementById(attachTo).appendChild(this.root);
    }
  }

  // Can be used to attach observer from Controller
  attachObserver(actionObserver) {
    this._actionObserver = actionObserver;
  }

  // Can be used to broadcast event to Controller
  broadcast(...params) {
    this._actionObserver.broadcast(...params);
  }

  // Basic method for DOM element creation
  createDomElement(tagName, payload) {
    const domElement = document.createElement(tagName);

    domElement.setAttribute('data-identifier', payload.id);

    return domElement;
  }

  // Basic search method
  findElementById(id) {
    const selector = `[data-identifier="${id}"]`;

    return this.root.querySelector(selector);
  }

  // Basic remove method
  removeElement(id) {
    this.root.removeChild(this.findElementById(id));
  }

  // Basic method which removed all child nodes from root element
  clearRoot() {
    this.root.replaceChildren();
  }
}
