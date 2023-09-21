import { Observer } from '../util-classes/observer.js';

export class ControllerAbstract {
  _subscriptions = {};

  constructor(listenersList, domManipulator) {
    if (domManipulator) {
      this._actionObserver = new Observer();
      domManipulator.attachObserver(this._actionObserver);
      this.domManipulator = Object.freeze(domManipulator);
    }

    listenersList.forEach((listenerMeta) => {
      const element = document.getElementById(listenerMeta.id);

      listenerMeta.events.forEach((event) => {
        element.addEventListener(event.name, (e) => {
          this[event.method].call(this, e);
        });
      });
    });
  }

  subscribe(callBack) {
    const subId = (Math.random() + 1).toString(36).substring(7);

    this._subscriptions[subId] = callBack;
    this._actionObserver.subscribe(callBack);

    return subId;
  }

  unsubscribe(subId) {
    const subscription = this._subscriptions[subId];

    this._actionObserver.unsubscribe(subscription);

    delete this._subscriptions[subId];
  }
}
