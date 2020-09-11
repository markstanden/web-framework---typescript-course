import { Eventing } from './Eventing';
import Axios, { AxiosResponse } from 'axios';

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootURL: string, public deserialise: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch() {
    Axios.get(this.rootURL).then((response: AxiosResponse) => {
      response.data.forEach((item: K, index: number) => {
        this.models.push(this.deserialise(item));
      });
      this.trigger('change');
    });
  }
}
