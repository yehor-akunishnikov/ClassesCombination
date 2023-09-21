import { ControllerAbstract } from '../abstract-classes/controller-abstract.js';
import { DomManipulator } from './dom-manipulator.js';

export class ListController extends ControllerAbstract {
  constructor() {
    super(
      [
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
      ],
      new DomManipulator({ attachTo: 'app' })
    );
  }

  loadAll() {
    this.domManipulator.renderList([
      { id: 'randomId', name: 'Oleg' },
      { id: 'randomId2', name: 'Joka' },
      { id: 'randomId3', name: 'Boka' },
    ]);

    const subId = this.subscribe((...data) => {
      console.log(data);
    });

    setTimeout(() => {
      this.unsubscribe(subId);
    }, 5000);
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
