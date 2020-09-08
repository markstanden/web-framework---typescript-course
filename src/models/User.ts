/*
    IMPORTS
*/
import { Eventing } from './Eventing';
import { Sync } from './Sync';

/*
    INTERFACES
*/
export interface UserProps {
  age?: number;
  id?: number;
  name?: string;
}
/*
    IMPORTS
*/
// Base url of the JSON server and the users key created in the db.json file.
const ENV_BASE_URL = 'http://localhost:3000/users';

/*
    USER CLASS
*/
export class User {
  // Hardcoded eventing class allows use of userInstance.events.trigger(...) etc, but means we
  // cannot swap it out easily.
  public events: Eventing = new Eventing();
  // again hardcoding allows for easy intuitive calling but limits the reuse of the code as
  // sync function is hardcoded into the class.
  public sync: Sync<UserProps> = new Sync<UserProps>(ENV_BASE_URL);

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
