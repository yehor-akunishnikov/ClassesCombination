import { Controller } from '../abstract-classes/controller.js';

export class ListController extends Controller {
  constructor(domManipulator) {
    super([
      {
        id: 'load-one-form',
        events: [{ name: 'submit', method: 'loadOne' }],
      },
      {
        id: 'update-form',
        events: [{ name: 'submit', method: 'update' }],
      },
      {
        id: 'remove-form',
        events: [{ name: 'submit', method: 'remove' }],
      },
      {
        id: 'load-all-btn',
        events: [{ name: 'click', method: 'loadAll' }],
      },
    ]);

    this.domManipulator = domManipulator;
  }

  loadAll() {
    this.domManipulator.renderList([
      { id: 'randomId', name: 'Oleg' },
      { id: 'randomId2', name: 'Joka' },
      { id: 'randomId3', name: 'Boka' },
    ]);
  }

  loadOne(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    for (let item of formData.values()) {
      console.log(item);
    }
  }

  update(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    for (let item of formData.values()) {
      console.log(item);
    }
  }

  remove(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    for (let item of formData.values()) {
      console.log(item);
    }
  }
}
