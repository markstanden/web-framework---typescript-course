export type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];

    // if handlers (i.e. this.events[eventName] doesn't exist, or if it is empty, return early)
    if (!handlers || handlers.length === 0) {
      return;
    }
    //for each callback in the events array, call them.
    handlers.forEach(callbackArrayItem => {
      callbackArrayItem();
    });
  };

  on = (eventName: string, callback: Callback): void => {
    // if this.events[eventName] hasn't been created before, it will be falsy and an empty array created.
    const handlers: Callback[] = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };
}
