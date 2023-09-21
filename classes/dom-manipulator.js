export class DomManipulator {
  constructor({ root, attachTo } = {}) {
    if (root) {
      this.root = root;
    } else {
      this.createRoot(attachTo);
    }
  }

  createRoot(attachTo) {
    this.root = document.createElement('ul');

    document.getElementById(attachTo).appendChild(this.root);
  }

  createListItem(entity) {
    const liElement = document.createElement('li');

    liElement.innerText = `Name: ${entity.name}`;
    liElement.setAttribute('data-identifier', entity.id);

    return liElement;
  }

  findElementById(id) {
    const selector = `[data-identifier="${id}"]`;

    return this.root.querySelector(selector);
  }

  renderList(entityList) {
    this.root.replaceChildren();
    entityList.forEach((entity) => this.addElement(entity));
  }

  addElement(entity) {
    this.root.append(this.createListItem(entity));
  }

  removeElement(id) {
    this.root.removeChild(this.findElementById(id));
  }

  updateElement(id, payload) {
    const elementToUpdate = this.findElementById(id);

    elementToUpdate.innerText = `Name: ${payload.name}`;
  }
}
