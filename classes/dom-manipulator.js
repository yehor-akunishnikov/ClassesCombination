import { DomManipulatorAbstract } from '../abstract-classes/dom-manipulator-abstract.js';

export class DomManipulator extends DomManipulatorAbstract {
  constructor(config) {
    super(config);
  }

  createListItem(entity) {
    const listItem = super.createDomElement('li', entity);

    listItem.innerText = `Name: ${entity.name}`;
    listItem.addEventListener('click', () => {
      this.broadcast(entity);
    });

    return listItem;
  }

  renderList(entityList) {
    super.clearRoot();
    entityList.forEach((entity) => this.addElement(entity));
  }

  addElement(entity) {
    this.root.append(this.createListItem(entity));
  }

  updateElement(id, payload) {
    const elementToUpdate = this.findElementById(id);

    elementToUpdate.innerText = `Name: ${payload.name}`;
  }
}
