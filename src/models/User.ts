import { Eventing } from './Eventing';

const ENV_BASE_URL = 'http://localhost:3000';
interface UserProps {
  age?: number;
  id?: number;
  name?: string;
}

export class User {
  public events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
