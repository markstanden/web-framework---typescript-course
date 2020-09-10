import { User, UserProps } from './User';
import { Eventing } from './Eventing';
import Axios, { AxiosResponse } from 'axios';

export class Collection {
  models: User[] = [];
  events: Eventing = new Eventing();

  constructor(public rootURL: string) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch() {
    Axios.get(this.rootURL).then((response: AxiosResponse) => {
      response.data.forEach((item: UserProps, index: number) => {
        this.models.push(User.buildUser(item));
      });
    });
  }
}
