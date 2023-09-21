export class Observer {
  subscriptions = [];

  subscribe(subscriber) {
    this.subscriptions.push(subscriber);
  }

  unsubscribe(subscriber) {
    this.subscriptions = this.subscriptions.filter((sub) => sub !== subscriber);
  }

  broadcast(...params) {
    this.subscriptions.forEach((subscription) => {
      subscription.call(this, ...params);
    });
  }
}
