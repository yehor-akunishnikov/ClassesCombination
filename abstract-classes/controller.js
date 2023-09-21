export class Controller {
  constructor(listenersList) {
    listenersList.forEach((listenerMeta) => {
      const element = document.getElementById(listenerMeta.id);

      listenerMeta.events.forEach((event) => {
        element.addEventListener(event.name, (e) => {
          this[event.method].call(this, e);
        });
      });
    });
  }
}
