import { ControllerAbstract } from '../abstract-classes/controller-abstract.js';
import { DomManipulator } from './dom-manipulator.js';

/*
  Main entry point to your feature
  Here you will add general logic by using methods of your helper classes together
*/
export class ListController extends ControllerAbstract {
  constructor() {
    /*
      Pass your dependencies here
      For ex:
        restService,
        store,
    */
    super(
      // There's a lot going on under the hood, but skip that part for now
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

      // DomManipulator is already available via "this",
      // Please check "loadAll" method to see the example of its usage
      new DomManipulator({ attachTo: 'app', tag: 'ul' })
    );

    /*
      Add your dependencies here
      For ex:
        this.restService = restService;
    */
  }

  loadAll() {
    // Rendering sample
    this.domManipulator.renderList([
      { id: 'randomId', name: 'Oleg' },
      { id: 'randomId2', name: 'Joka' },
      { id: 'randomId3', name: 'Boka' },
    ]);

    // Load list of items from server and render
  }

  loadOne(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    // Load item from server and render
  }

  update(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    // Update item on server and update DOM
  }

  remove(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    // Remove item both on server and in DOM
  }
}
