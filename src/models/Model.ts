import { AxiosPromise, AxiosResponse } from 'axios';

interface ModelAttributes<T> {
  set(update: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
  data: T;
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callbackName: () => void): void;
  trigger(eventName: string): void;
}

interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  get on() {
    // Returns a reference to the events.on() function.
    // Note: we are not calling it at this point, just returning the reference.
    // This means that any changes within Eventing.ts will not require changes to our passthrough code
    // if we wrote this as on(event, callback) {this.events.on(event, callback)} changes to Eventing.ts
    // may need to be changed here too.
    return this.events.on;
  }
  get trigger() {
    //as get on() we're just passing a reference here
    return this.events.trigger;
  }

  get get() {
    //as get on() we're just passing a reference here
    return this.attributes.get;
  }

  get getAll() {
    //as get on() we're just passing a reference here
    //return this.attributes.getAll;
    return this.attributes.data;
  }

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger('set');
  }

  fetch(): void {
    const id = this.get('id');
    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without valid id');
    }

    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    });

    this.trigger('fetch');
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.trigger('save');
      })
      .catch(() => {
        this.trigger('error');
      });
  }
}
