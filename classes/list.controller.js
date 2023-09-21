export class ListController {
  constructor(domManipulator, domLinks) {
    this.domManipulator = domManipulator;
    this.domLinks = domLinks;
  }

  init() {
    this.domLinks.loadAllBtn.addEventListener('click', () => {
      this.loadAll();
    });

    this.domLinks.loadOneForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.loadOne();
    });

    this.domLinks.updateForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.update();
    });

    this.domLinks.removeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.remove();
    });
  }

  loadAll() {
    this.domManipulator.renderList([
      { id: 'randomId', name: 'Oleg' },
      { id: 'randomId2', name: 'Joka' },
      { id: 'randomId3', name: 'Boka' },
    ]);
  }

  loadOne() {
    const formData = new FormData(this.domLinks.loadOneForm);

    for (let item of formData.values()) {
      console.log(item);
    }
  }

  update() {
    const formData = new FormData(this.domLinks.updateForm);

    for (let item of formData.values()) {
      console.log(item);
    }
  }

  remove() {
    const formData = new FormData(this.domLinks.removeForm);

    for (let item of formData.values()) {
      console.log(item);
    }
  }
}
