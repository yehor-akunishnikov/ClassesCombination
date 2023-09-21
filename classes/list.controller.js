export class ListController {
  constructor(domManipulator) {
    this.domManipulator = domManipulator;
  }

  init() {
    this.domManipulator.renderList([
      { id: 'randomId', name: 'Oleg' },
      { id: 'randomId2', name: 'Joka' },
      { id: 'randomId3', name: 'Boka' },
    ]);
  }
}
